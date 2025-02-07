import Head from 'next/head';

interface MetaHeadProps extends React.MetaHTMLAttributes<HTMLMetaElement> {
  title?: string;
  description?: string;
  embedSource?:
  | 'default'
  | {
    twitter?: string;
    linkedin?: string;
    og?: string;
  };
}

const MetaHead: React.FunctionComponent<MetaHeadProps> = ({
  title = 'Rishav Mehra',
  description = "Hey there! I'm a DevOps/Backend engineer, constantly honing my skills in crafting and maintaining scalable infrastructure and applications",
  embedSource = 'default',
  ...attr
}) => {
  return (
    <Head {...attr}>
      <title>{title}</title>
      <link rel="shortcut icon" href="/media/icon.ico" />
      <meta name="title" content="Rishav Mehra" />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.rshv.xyz/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={
          embedSource === 'default'
            ? 'https://ik.imagekit.io/uxywkogar/new_banner.png?updatedAt=1706610665794&tr=w-1200%2Ch-675%2Cfo-auto'
            : embedSource?.og
        }
      />

      <meta
        property="twitter:card"
        content={
          embedSource === 'default'
            ? 'https://ik.imagekit.io/uxywkogar/new_banner.png?updatedAt=1706610665794&tr=w-1200%2Ch-675%2Cfo-auto'
            : embedSource?.twitter
        }
      />
      <meta property="twitter:url" content="https://www.rshv.xyz/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content={
          embedSource === 'default'
            ? 'https://ik.imagekit.io/uxywkogar/new_banner.png?updatedAt=1706610665794&tr=w-1200%2Ch-675%2Cfo-auto'
            : embedSource?.twitter
        }
      />
    </Head>
  );
};

export default MetaHead;
