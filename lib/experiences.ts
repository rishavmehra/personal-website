import { ExperienceItemProps } from '@/components/main/ExperienceSection';

export const getExperiences = function (): ExperienceItemProps[] {
  return [
    {
      experienceTitle: 'DevOps Engineer',
      experienceDescription: [
        'Migrated infrastructure from Azure to AWS, setting up a secure, multi-region VPC architecture that reduced costs by 50% and automated workflows through multiple scripts',
        'Built a robust CI/CD pipeline using Jenkins, with real-time notifications via Teams and email, ensuring seamless integration and deployment',
        'Architected a comprehensive monitoring and logging system using Telegraf, InfluxDB, Grafana, CloudWatch, Loki, and Promtail, providing deep insights and enhanced observability',
        'Designed and implemented a multi-layered backup strategy using AWS services, ensuring data integrity and disaster recovery preparedness',
        'Streamlined operations with automation scripts, improving productivity and system reliability across the board'
      ],
      experienceOrg: {
        name: 'Softsolvers',
        link: 'https://softsolvers.com/',
        websiteDisplayName: 'softsolvers.com',
      },
      experienceStatus: {
        startAt: 'September, 2023',
        endAt: 'Present',
      },
    },
    {
      experienceTitle: 'DevOps Engineer Intern',
      experienceDescription: [
        'Developed a Slack command for the application\'s intermediate builds',
        'Optimised the CI/CD pipeline for the application\'s build speed by 55.55% and the server\'s build size by 45%',
        'Introduced containerised development environments and k6 for performance testing',
        'Designed and engineered an aggregated logging module to increase system observability',
        'And learn backend Integration with mixpanel'
      ],
      experienceOrg: {
        name: 'The Homework App',
        link: 'https://www.thehomeworkapp.ai/',
        websiteDisplayName: 'thehomeworkapp.ai',
      },
      experienceStatus: {
        startAt: 'June, 2022',
        endAt: 'Dec, 2022',
      },
    },
    {
      experienceTitle: 'DevOps/Cloud Engineer',
      experienceDescription: [
        'Responsible for development, and deployment using CI/CD.',
        'Responsible for delivering blogs, technical documentation, and knowledge articles.',
      ],
      experienceOrg: {
        name: 'Pernicia',
        websiteDisplayName: 'Pernicia',
      },
      experienceStatus: {
        startAt: 'Feb, 2022',
        endAt: 'June, 2022',
      },
    },

  ];
};
