import { ProjectItemProps } from '@/components/main/ProjectSection';

export const getProjects = function (): ProjectItemProps[] {
  let projects: ProjectItemProps[] = [
    {
      projectTitle: 'AWS-Serverless',
      projectData: {
        githubURL: 'https://github.com/rishavmehra/AWS-Serverless',
      },
      description: [
        ' Making a serverless web Application on Cloud, which sends the client request to the team for contact as soon as possible',
        'AWS S3, AWS API Gateway, AWS Lambda, AWS SES',
      ],
      tech: [
        'JS',
        'AWS',
        'S3',
        'Api Gateway',
        'Lambda',
        'Simple Email Service',
      ],
      // @ts-ignore
      category: ['AWS/Cloud, ServerLess'],
      status: 'Maintained',
    },
    {
      projectTitle: 'Database Monitoring',
      description: [
        'Implemented comprehensive database monitoring using Prometheus.',
        'Monitored MongoDB, focusing on slow query counts and execution times for performance optimization.',
        'Utilized PostgreSQL metrics in Prometheus to assess running node performance, ensuring system health and stability.',
      ],
      tech: [
        'Database',
        'Percona',
        'Monitoring'
      ],
      // @ts-ignore
      category: ['Monitoring, Percona, Slow Queries'],
      status: 'Maintained',
    },
    {
      projectTitle: 'SpinMergePro',
      projectData: {
        relatedLinks: [
          {
            label: "Notion Todo's",
            link: 'https://rishavmehra.notion.site/SpinMergePro-d43c1903e90d4d79923ce675c57e4469?pvs=4',
          },
        ],
      },
      description: [
        'Spearheaded the conceptualization and development of SpinMergePro, a cutting-edge cloud-native web application. This innovative solution empowers users to effortlessly rotate and merge PDFs through a sleek, user-friendly interface.',
        "Leveraged cloud-native technologies to enhance scalability and accessibility, allowing SpinMergePro to adapt seamlessly to varying workloads. This forward-looking approach ensures that the application remains agile and responsive to the evolving needs of users in the dynamic digital landscape.",
        "Envisioned a responsive and intuitive design, prioritizing user experience. SpinMergePro boasts a modern and accessible interface that streamlines the often complex tasks of PDF manipulation, making it an indispensable tool for professionals and individuals alike.",
      ],
      tech: ['Cloud Native', ' Kubernetes', ' Go', ' Js', ' AWS ', ' Terraform ', ' Ansible', ' Jaeger', ' Docker', ' Scripts'],
      // @ts-ignore
      category: ['Cloud Native', ' Kubernetes', ' Go', ' Js', ' AWS ', ' Terraform ', ' Ansible', ' Jaeger', ' Docker', ' Scripts'],
      status: 'Ongoing',
    },
    {
      projectTitle: 'GCP MultiService Deployment',
      projectData: {
        relatedLinks: [
          {
            label: "Github",
            link: 'https://github.com/rishavmehra/rns',
          },
        ],
      },
      description: [
        "Designed and implemented a complete infrastructure on Google Cloud Platform (GCP) using Terraform, including a VPC network, Cloud SQL instance, Cloud Run service, and load balancer for seamless application hosting and scalability.",
        "Leveraged Terraform's infrastructure-as-code capabilities to create a modular and reusable architecture, ensuring consistent, scalable, and operationally efficient deployments tailored to dynamic workloads.",
        "Engineered the infrastructure with adaptability in mind, enabling it to meet evolving business requirements while maintaining security, reliability, and ease of management in a cloud-native environment.",
        "Prioritized maintainability and simplicity in the design, empowering developers and operations teams to deploy, manage, and scale applications with confidence and minimal overhead."
      ],
      tech: [' Terraform ', ' GCP ',],
      // @ts-ignore
      category: [' Terraform ', ' GCP ',],
      status: 'Open Source',
    },
    {
      projectTitle: 'HA using AWS',
      projectData: {
        liveURL: 'https://www.loom.com/share/924c173af7744d03b9f8ce2a46551be1?sid=bd764a9a-fd3b-4fb5-a15b-446edb8f75dc',
        relatedLinks: [
          {
            label: 'GitHub',
            link: 'https://github.com/rishavmehra/Jenkins-HA',
          },
        ],
      },
      description: [
        'Deploy Jenkins on an AWS Autoscaling group with an Application Load Balancer and EFS filesystem for Jenkin\'s data directory. ',
        'Implemented an Application Load Balancer to efficiently distribute incoming traffic across multiple Jenkins instances, optimizing performance and ensuring a seamless experience for users.'
      ],
      tech: ['AWS, Packer', 'Ansible', 'Terraform', 'Python Boto3'],
      // @ts-ignore
      category: ['Autoscaling, AWS ALB, Automate infrastructure'],
      status: 'Maintained',
    },
  ];

  return projects.reverse();
};
