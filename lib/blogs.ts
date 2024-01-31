import { BlogProps } from '@/pages/blog';

export const getBlogs = function (): BlogProps[] {
  return [
    {
      title: 'Monitoring With - Percona Monitoring and Management',
      linkType: 'external',
      link: 'https://rishavmehra.hashnode.dev/monitoring-with-percona-monitoring-and-management',
      publishedAt: {
        year: 2023,
      },
    },
    {
      title: 'CI/CD Pipeline: GitHub Actions with AWS ECS',
      linkType: 'external',
      link: 'https://blog.kubesimplify.com/cicd-pipeline-github-actions-with-aws-ecs#cl1cafo5t00zd0bnva4gwg0m7',
      publishedAt: {
        year: 2022,
      },
    },
    {
      title: 'Introduction of Jenkins pipeline',
      linkType: 'external',
      link: 'https://blog.kubesimplify.com/introduction-of-jenkins-pipeline#cl2yzhf40019c9bnvbc1j0rcz',
      publishedAt: {
        year: 2022,
      },
    },
    {
      title: 'Turnoff AWS EC2 instance using GitHub Actions',
      linkType: 'external',
      link: 'https://rishavmehra.hashnode.dev/turnoff-aws-ec2-instance-using-github-actions',
      publishedAt: {
        year: 2022,
      },
    },
    {
      title: 'AWS VPC(Virtual Private Cloud) ☁️',
      linkType: 'external',
      link: 'https://rishavmehra.hashnode.dev/aws-vpcvirtual-private-cloud',
      publishedAt: {
        year: 2022,
      },
    },
  ];
};
