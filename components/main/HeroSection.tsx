import Image from 'next/image';
import Section from '../layout/Section';
import Button from '../ui/Button';
import LinkText from '../ui/LinkText';
import Callout from './Callout';
import Header from './Header';

const HeroSection: React.FunctionComponent = () => {
  return (
    <main className="hero-section" id="hero">
      <Header />
      <Section>
        <h2 className="about-heading leading-snug font-medium text-base text-zinc-900">
          {'About me'}
        </h2>
        <div className="about-content-wrapper leading-6 text-sm font-normal text-zinc-500 mt-4">
          <p>
            {
              `Hi there! I'm an engineer with a keen interest in optimizing the backend architecture and deployment processes to create scalable and efficient websites and applications. My passion lies in ensuring a seamless user experience, maintaining a robust infrastructure, and delivering meaningful solutions. I'm dedicated to crafting a strong backend foundation and driving the DevOps practices that make it all possible.`
            }
          </p>
        </div>
        <Callout className="mt-4">
          <p>
            {
              `Seeking full-time DevOps/Backend roles, ready to optimize infrastructure and deployment. Let's meet and discuss collaboration!`
            }
          </p>
          <p className="mt-2 mb-4">
            {
              ''
            }
          </p>
          <div className="flex flex-row items-center justify-start gap-4">
            <Button onClick={() => window.open('https://cal.com/rishavmehra')}>
              {'Schedule a meet / cal.com'}
            </Button>
            <LinkText
              href={'/resume'}
              className="text-zinc-600 font-medium text-sm">
              {'Resume'}
            </LinkText>
          </div>
        </Callout>
      </Section>
    </main>
  );
};

export default HeroSection;
