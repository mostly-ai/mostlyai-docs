import React from 'react';
import { CustomCard, CardProps } from './custom-card';
import CustomImageCard from './custom-image-card';

import { BookIcon, TableIcon, RocketIcon, DatabaseIcon, SpeakerphoneIcon, DeployIcon, GeneratorIcon, SyntheticDatasetIcon, CLIIcon, AssistantIcon } from './landingpage-icons';

const LandingPage: React.FC = () => {
  const cardsData: Array<CardProps> = [
    {
      icon: <RocketIcon />,
      title: {
        text: 'Quick start',
        link: '/quick-start',
      },
      description: '',
      links: [
        { text: 'Datasets', href: '/quick-start/dataset-quickstart' },
        { text: 'Connectors', href: '/quick-start/connector-quickstart' },
        { text: 'Generators', href: '/quick-start/model-creators' },
        { text: 'Synthetic data', href: '/quick-start/data-consumers' },
      ],
    },
    {
      icon: <AssistantIcon />,
      title: {
        text: 'Assistant',
        link: '/assistant',
      },
      description: '',
      links: [
        { text: 'Configuration', href: '/assistant/configuration' },
        { text: 'Manage chats', href: '/assistant/manage-chats' },
        { text: 'Manage artifacts', href: '/assistant/artifacts' },
        { text: 'Prompt examples', href: '/assistant/prompt-examples' },
        { text: 'Python sessions', href: '/assistant/python-session-status' },
      ],
    },
    {
      icon: <TableIcon />,
      title: {
        text: 'Tabular synthetic data',
        link: '/generators/tabular-synthetic-data',
      },
      description: '',
      links: [
        { text: 'Multi-table synthetic data', href: '/generators/tabular-synthetic-data#multi-table-synthetic-data' },
        { text: 'Subject tables', href: '/generators/tabular-synthetic-data#subject-tables' },
        { text: 'Linked tables', href: '/generators/tabular-synthetic-data#linked-tables' },
        { text: 'Context foreign key', href: '/generators/tabular-synthetic-data#context-foreign-key' },
        { text: 'Time-series and events data', href: '/generators/configure/configure-time-series' },
      ],
    },
    {
      icon: <GeneratorIcon />,
      title: {
        text: 'Generators',
        link: '/generators',
      },
      description: '',
      links: [
        { text: 'Train a new generator', href: '/generators/train' },
        { text: 'Live-probe a generator', href: '/generators/live-probing' },
        { text: 'Set table relationships', href: '/generators/configure/set-table-relationships' },
        { text: 'Set encoding types', href: '/generators/configure/set-encoding-types' },
        { text: 'Improve model accuracy', href: '/generators/configure/improve-model-accuracy' },
        { text: 'Speed up training', href: '/generators/configure/speed-up-training' },
        { text: 'Fine-tune privacy mechanisms', href: '/generators/configure/fine-tune-privacy-mechanisms' },
      ],
    },
    {
      icon: <SyntheticDatasetIcon />,
      title: {
        text: 'Synthetic datasets',
        link: '/synthetic-datasets',
      },
      description: '',
      links: [
        { text: 'Generate synthetic datasets', href: '/synthetic-datasets/generate' },
        { text: 'Rebalance columns', href: '/synthetic-datasets/rebalance-columns' },
        { text: 'Data imputation', href: '/synthetic-datasets/data-imputation' },
        { text: 'Deliver synthetic data to databases or cloud buckets', href: '/synthetic-datasets/deliver' },
        { text: 'Seeded generation', href: '/synthetic-datasets/seeded-generation' },
        { text: 'Fair synthetic data', href: '/synthetic-datasets/fairness' },
      ],
    },
    {
      icon: <DatabaseIcon />,
      title: {
        text: 'Connectors',
        link: '/connectors',
      },
      description: '',
      links: [
        { text: 'Databases', href: '/connectors/create#database-connectors' },
        { text: 'Cloud object storage', href: '/connectors/create#cloud-storage-connectors' },
        { text: 'Configure a data source', href: '/connectors/use/data-source' },
        { text: 'Configure a data destination', href: '/connectors/use/data-destination' },
      ],
    },
    {
      icon: <CLIIcon />,
      title: {
        text: 'More tools',
        link: null,
      },
      description: '',
      links: [
        { text: 'REST API', href: 'https://api-docs.mostly.ai/' },
        { text: 'Synthetic Data SDK', href: '/python-sdk' },
        { text: 'Synthetic Data Quality Assurance', href: 'https://github.com/mostly-ai/mostlyai-qa' },
      ],
    },
    {
      icon: <DeployIcon />,
      title: {
        text: 'Deploy',
        link: '/install/deploy',
      },
      description: '',
      links: [
        { text: 'Amazon AWS EKS', href: '/install/deploy/aws-eks' },
        { text: 'Google Cloud GKE', href: '/install/deploy/gke' },
        { text: 'Azure AKS', href: '/install/deploy/azure-aks' },
        { text: 'OpenShift', href: '/install/deploy/openshift' },
        { text: 'minikube', href: '/install/deploy/minikube' },
      ],
    },
    {
      icon: <SpeakerphoneIcon />,
      title: {
        text: "What's new",
        link: '/whats-new',
      },
      description: '',
      links: [
        {
          text: 'Use a local database as source or destination',
          href: '/connectors/local-db',
        },
        {
          text: 'Deploy to an Azure AKS cluster',
          href: '/install/deploy/azure-aks',
        },
        {
          text: 'Deploy to a GKE cluster',
          href: '/install/deploy/gke',
        },
        {
          text: 'Table relationship diagram',
          href: '/synthetic-datasets/configure#view-relationship-diagram',
        },
        {
          text: 'Best practices for using MOSTLY AI',
          href: '/best-practices',
        },
        {
          text: 'Deploy to an AWS EKS cluster',
          href: '/install/deploy/aws-eks',
        },
      ],
    },
    {
      icon: <BookIcon />,
      title: {
        text: 'About',
        link: null,
      },
      description: '',
      links: [
        { text: 'What is synthetic data?', href: '/concepts/what-is-synthetic-data' },
        { text: 'Privacy', href: '/concepts/privacy-protection' },
        { text: 'Synthetic data dictionary', href: 'https://mostly.ai/synthetic-data-dictionary' },
      ],
    },
  ];

  return (
    <div className="card-container">
      <CustomCard {...cardsData[0]} />
      <CustomImageCard />
      <CustomCard {...cardsData[1]} />
      <CustomCard {...cardsData[2]} />
      <CustomCard {...cardsData[3]} />
      <CustomCard {...cardsData[4]} />
      <CustomCard {...cardsData[5]} />
      <CustomCard {...cardsData[6]} />
      <style jsx>{`
        .card-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-top: 1em;
        }
        @media (max-width: 710px) {
          .card-container {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
