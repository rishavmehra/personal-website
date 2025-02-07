import { ContactItemProps } from '@/components/main/ContactSection';

export const getContacts = function (): ContactItemProps[] {
  return [
    {
      title: 'GitHub',
      link: {
        display: '@rishavmehra',
        url: 'https://github.com/rishavmehra',
      },
    },
    {
      title: 'Twitter',
      link: {
        display: '@Rishavmehraa',
        url: 'https://twitter.com/Rishavmehraa',
      },
    },
    {
      title: 'LinkedIn',
      link: {
        display: 'linkedin.com/in/rishavmehra',
        url: 'https://linkedin.com/in/rishavmehra',
      },
    },
    {
      title: 'Instagram',
      link: {
        display: '@rishavmehraa',
        url: 'https://instagram.com/rishavmehraa',
      },
    },
    {
      title: 'Schedule a meeting',
      link: {
        display: 'cal.com/rishavmehra',
        url: 'https://cal.com/rishavmehra',
      },
    },
    {
      title: 'Resume',
      link: {
        display: 'rshv.xyz/resume.pdf',
        url: '/resume',
      },
    },
  ];
};
