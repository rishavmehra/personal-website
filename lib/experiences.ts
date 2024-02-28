import { ExperienceItemProps } from '@/components/main/ExperienceSection';

export const getExperiences = function (): ExperienceItemProps[] {
  return [
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
