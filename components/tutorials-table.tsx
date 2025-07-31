import React from 'react';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { ColabBadge, GitHubIcon } from '@components/icons';

type ColabToGitHubLinkProps = {
  colabUrl: string;
};

const ColabToGitHubLink: React.FC<ColabToGitHubLinkProps> = ({ colabUrl }) => {
  const transformLink = (url: string): string => {
    const match = url.match(/colab\.research\.google\.com\/github\/(.*)/);
    return match ? `https://github.com/${match[1]}` : url;
  };

  const githubUrl = transformLink(colabUrl);

  return (
    <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
      <GitHubIcon />
    </Link>
  );
};

// Data structure for tutorials
type Tutorial = {
  title: string;
  colabUrl: string;
};

const tutorials: Tutorial[] = [
  {
    title: '**Getting Started with the SDK**',
    colabUrl: 'https://colab.research.google.com/github/mostly-ai/mostlyai/blob/main/docs/tutorials/getting-started/getting-started.ipynb',
  },
  {
    title: '**Validate synthetic data via Train-Synthetic-Test-Real**',
    colabUrl: 'https://colab.research.google.com/github/mostly-ai/mostlyai/blob/main/docs/tutorials/train-synthetic-test-real/TSTR.ipynb',
  },
  {
    title: '**Explore the size vs. accuracy trade-off for synthetic data**',
    colabUrl: 'https://colab.research.google.com/github/mostly-ai/mostlyai/blob/main/docs/tutorials/size-vs-accuracy/size-vs-accuracy.ipynb',
  },
  {
    title: '**Differentially private synthetic data**',
    colabUrl: 'https://colab.research.google.com/github/mostly-ai/mostlyai/blob/main/docs/tutorials/differential-privacy/differential-privacy.ipynb',
  },
  {
    title: '**Rebalance synthetic datasets for data augmentation**',
    colabUrl: 'https://colab.research.google.com/github/mostly-ai/mostlyai/blob/main/docs/tutorials/rebalancing/rebalancing.ipynb',
  },
  {
    title: '**Conditionally generate synthetic (geo) data**',
    colabUrl: 'https://colab.research.google.com/github/mostly-ai/mostlyai/blob/main/docs/tutorials/conditional-generation/conditional-generation.ipynb',
  },
  {
    title: '**Explain AI with synthetic data**',
    colabUrl: 'https://colab.research.google.com/github/mostly-ai/mostlyai/blob/main/docs/tutorials/explainable-ai/explainable-ai.ipynb',
  },
  {
    title: '**Generate fair synthetic data**',
    colabUrl: 'https://colab.research.google.com/github/mostly-ai/mostlyai/blob/main/docs/tutorials/fairness/fairness.ipynb',
  },
  {
    title: '**Generate synthetic text via a fast LSTM model trained from scratch**',
    colabUrl: 'https://colab.research.google.com/github/mostly-ai/mostlyai/blob/main/docs/tutorials/synthetic-text-lstm/synthetic-text-lstm.ipynb',
  },
  {
    title: '**Generate synthetic text via a pre-trained Large Language Model**',
    colabUrl: 'https://colab.research.google.com/github/mostly-ai/mostlyai/blob/main/docs/tutorials/synthetic-text-llm/synthetic-text-llm.ipynb',
  },
  {
    title: '**Perform multi-table synthesis**',
    colabUrl: 'https://colab.research.google.com/github/mostly-ai/mostlyai/blob/main/docs/tutorials/multi-table/multi-table.ipynb',
  },
  {
    title: '**Analyse star-schema correlations**',
    colabUrl: 'https://colab.research.google.com/github/mostly-ai/mostlyai/blob/main/docs/tutorials/star-schema-correlations/star-schema-correlations.ipynb',
  },
  {
    title: '**Develop a fake or real discriminator with Synthetic Data**',
    colabUrl: 'https://colab.research.google.com/github/mostly-ai/mostlyai/blob/main/docs/tutorials/fake-or-real/fake-or-real.ipynb',
  },
  {
    title: '**Close gaps in your data with Smart Imputation**',
    colabUrl: 'https://colab.research.google.com/github/mostly-ai/mostlyai/blob/main/docs/tutorials/smart-imputation/smart-imputation.ipynb',
  },
  {
    title: '**Calculate accuracy and privacy metrics for Quality Assurance**',
    colabUrl: 'https://colab.research.google.com/github/mostly-ai/mostlyai/blob/main/docs/tutorials/quality-assurance/quality-assurance.ipynb',
  },
  {
    title: '**Enrich Sensitive Data with LLMs using Synthetic Replicas**',
    colabUrl: 'https://colab.research.google.com/github/mostly-ai/mostlyai/blob/main/docs/tutorials/synthetic-enrich/synthetic-enrich.ipynb',
  },
];

const TutorialsTable: React.FC = () => {
  return (
    <table className="_not-prose _block _overflow-x-auto nextra-scrollbar [&:not(:first-child)]:_mt-6 _p-0">
      <thead>
        <tr>
          <th className="_m-0 _border _border-gray-300 _px-4 _py-2 _font-semibold dark:_border-gray-600">Tutorial</th>
          <th className="_m-0 _border _border-gray-300 _px-4 _py-2 _font-semibold dark:_border-gray-600">Colab Link</th>
          <th className="_m-0 _border _border-gray-300 _px-4 _py-2 _font-semibold dark:_border-gray-600 text-center">GitHub Link</th>
        </tr>
      </thead>
      <tbody>
        {tutorials.map((tutorial, index) => (
          <tr key={index} className="_m-0 _border-t _border-gray-300 _p-0 dark:_border-gray-600 even:_bg-gray-100 even:dark:_bg-gray-600/20">
            <td className="_m-0 _border _border-gray-300 _px-4 _py-2 dark:_border-gray-600">
              <ReactMarkdown>{tutorial.title}</ReactMarkdown>
            </td>
            <td className="_m-0 _border _border-gray-300 _px-4 _py-2 dark:_border-gray-600 text-center">
              <Link href={tutorial.colabUrl}>
                <ColabBadge />
              </Link>
            </td>
            <td className="_m-0 _border _border-gray-300 _px-4 _py-2 dark:_border-gray-600 text-center">
              <ColabToGitHubLink colabUrl={tutorial.colabUrl} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TutorialsTable;
