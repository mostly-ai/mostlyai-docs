import nextra from 'nextra';

const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx'
})

export default withNextra({
    basePath: "/docs",
    images: {
        unoptimized: process.env.UNOPTIMIZED_IMAGES === "true",
    },
    output: process.env.NEXT_OUTPUT,
    redirects: () => [
      {
        "source": "/docs/mostly-ai-help-support-tutorials-documentation",
        "destination": "/docs",
        "permanent": true
      },
      {
        "source": "/docs/concepts/concepts-section",
        "destination": "/docs",
        "permanent": true
      },
      {
        "source": "/docs/concepts/mostly-ai-what-is-ai-powered-synthetic-data",
        "destination": "/docs/concepts/what-is-synthetic-data",
        "permanent": true
      },
      {
        "source": "/docs/concepts/privacy-best-practices",
        "destination": "/docs/best-practices",
        "permanent": true
      },
      {
        "source": "/docs/concepts/glossary",
        "destination": "/docs/generators/tabular-synthetic-data",
        "permanent": true
      },
      {
        "source": "/docs/guides/guides-section",
        "destination": "/docs/generators",
        "permanent": true
      },
      {
        "source": "/docs/guides/provisioning/prepare-your-data",
        "destination": "/docs/generators/prepare-data",
        "permanent": true
      },
      {
        "source": "/docs/guides/provisioning/subject-linked-table-requirements",
        "destination": "/docs/generators/prepare-data/subject-linked-requirements",
        "permanent": true
      },
      {
        "source": "/docs/guides/provisioning/csv-file-requirements",
        "destination": "/docs/generators/prepare-data/csv-requirements",
        "permanent": true
      },
      {
        "source": "/docs/guides/encoding-types",
        "destination": "/docs/generators/configure/set-encoding-types",
        "permanent": true
      },
      {
        "source": "/docs/guides/encoding-types-catalogs",
        "destination": "/docs/generators/configure/set-encoding-types",
        "permanent": true
      },
      {
        "source": "/docs/guides/mock-data",
        "destination": "/docs/synthetic-datasets",
        "permanent": true
      },
      {
        "source": "/docs/guides/catalogs/catalogs",
        "destination": "/docs/generators",
        "permanent": true
      },
      {
        "source": "/docs/guides/connectors/connect-to-mysql",
        "destination": "/docs/connectors/create/mysql",
        "permanent": true
      },
      {
        "source": "/docs/guides/connectors/connect-to-postgresql",
        "destination": "/docs/connectors/create/postgresql",
        "permanent": true
      },
      {
        "source": "/docs/guides/connectors/connect-to-sql-server",
        "destination": "/docs/connectors/create/sql-server",
        "permanent": true
      },
      {
        "source": "/docs/guides/connectors/connect-to-oracle",
        "destination": "/docs/connectors/create/oracle",
        "permanent": true
      },
      {
        "source": "/docs/guides/connectors/connect-to-mariadb",
        "destination": "/docs/connectors/create/mariadb",
        "permanent": true
      },
      {
        "source": "/docs/guides/connect-to-snowflake",
        "destination": "/docs/connectors/create/snowflake",
        "permanent": true
      },
      {
        "source": "/docs/guides/connectors/connect-to-snowflake",
        "destination": "/docs/connectors/create/snowflake",
        "permanent": true
      },
      {
        "source": "/docs/guides/connectors/connect-to-bigquery",
        "destination": "/docs/connectors/create/bigquery",
        "permanent": true
      },
      {
        "source": "/docs/guides/connectors/connect-to-databricks",
        "destination": "/docs/connectors/create/databricks",
        "permanent": true
      },
      {
        "source": "/docs/guides/connectors/connect-to-aws",
        "destination": "/docs/connectors/create/aws",
        "permanent": true
      },
      {
        "source": "/docs/guides/connectors/connect-to-google-cloud",
        "destination": "/docs/connectors/create/google-cloud",
        "permanent": true
      },
      {
        "source": "/docs/guides/connectors/connect-to-azure",
        "destination": "/docs/connectors/create/azure",
        "permanent": true
      },
      {
        "source": "/docs/guides/data-destination-local-machine",
        "destination": "/docs/connectors/use/local-db",
        "permanent": true
      },
      {
        "source": "/docs/guides/event-time-series-data",
        "destination": "/docs/generators/configure/configure-time-series",
        "permanent": true
      },
      {
        "source": "/docs/install/install-section",
        "destination": "/docs/install/deploy",
        "permanent": true
      },
      {
        "source": "/docs/install/deployment",
        "destination": "/docs/install/deploy",
        "permanent": true
      },
      {
        "source": "/docs/install/helm-chart",
        "destination": "/docs/install/deploy/helm-chart",
        "permanent": true
      },
      {
        "source": "/docs/install/checklist",
        "destination": "/docs/install/deploy/checklist",
        "permanent": true
      },
      {
        "source": "/docs/install/deploy-to-openshift",
        "destination": "/docs/install/deploy/openshift",
        "permanent": true
      },
      {
        "source": "/docs/install/deploy-to-aws-eks",
        "destination": "/docs/install/deploy/aws-eks",
        "permanent": true
      },
      {
        "source": "/docs/install/deploy-to-minikube",
        "destination": "/docs/install/deploy/minikube",
        "permanent": true
      },
      {
        "source": "/docs/install/troubleshoot-openshift",
        "destination": "/docs/install/deploy/openshift",
        "permanent": true
      },
      {
        "source": "/docs/administration/administration-section",
        "destination": "/docs/administration/users-groups",
        "permanent": true
      },
      {
        "source": "/docs/administration/users-and-groups",
        "destination": "/docs/administration/users-groups",
        "permanent": true
      },
      {
        "source": "/docs/data-augmentation/rebalance-your-data",
        "destination": "/synthetic-datasets/rebalance-columns",
        "permanent": true
      },
      {
        "source": "/docs/ready-to-use-datasets",
        "destination": "/docs/datasets",
        "permanent": true
      },
      {
        "source": "/docs/whats-new-in-mostly-ai",
        "destination": "/docs/whats-new",
        "permanent": true
      },
      {
        "source": "/docs/data-augmentation/data-augmentation-section",
        "destination": "/docs/synthetic-datasets",
        "permanent": true 
      },
      {
        "source": "/docs/mostly-ai-how-does-it-help-your-team-and-business",
        "destination": "/docs",
        "permanent": true
      },
      {
        "source": "/docs/administration/technical-specifications",
        "destination": "/docs/install/architecture",
        "permanent": true
      },
      {
        "source": "/docs/guides/provisioning/data-formatting-requirements",
        "destination": "/docs/generators/prepare-data/csv-requirements",
        "permanent": true
      },
      {
        "source": "/docs/concepts/home-page",
        "destination": "/docs/quick-start",
        "permanent": true
      },
      {
        "source": "/docs/get-started/synthesize-cloud-storage",
        "destination": "/docs/quick-start",
        "permanent": true
      },
      {
        "source": "/docs/guides/synthesize-complex-database-relationships",
        "destination": "/docs/generators/configure/set-table-relationships",
        "permanent": true
      },
      {
        "source": "/docs/guides/create-a-catalog-database",
        "destination": "/docs/generators/train",
        "permanent": true
      },
      {
        "source": "/docs/guides/create-a-catalog-datasets",
        "destination": "/docs/generators/train",
        "permanent": true
      },
      {
        "source": "/docs/guides/mock-data-catalog",
        "destination": "/docs/synthetic-datasets",
        "permanent": true
      },
      {
        "source": "/docs/administration/installation-guide",
        "destination": "/docs/install/deploy",
        "permanent": true
      },
      {
        "source": "/docs/administration/installation-command-line-reference",
        "destination": "/docs/install/deploy",
        "permanent": true
      },
      {
        "source": "/docs/guides/launch-a-job",
        "destination": "/docs/quick-start",
        "permanent": true
      },
      {
        "source": "/docs/guides/provisioning/provision-your-data",
        "destination": "/docs/generators/prepare-data",
        "permanent": true
      },
      {
        "source": "/docs/data-augmentation/event-time-series-data",
        "destination": "/docs/generators/configure/configure-time-series",
        "permanent": true
      },
      {
        "source": "/docs/guides/catalogs/catalogs",
        "destination": "/docs/generators/train",
        "permanent": true
      },
      {
        "source": "/docs/administration/troubleshooting",
        "destination": "/docs/administration/users-groups",
        "permanent": true
      },
      {
        "source": "/docs/tutorials/privacy-secure-behavioral-customer-data",
        "destination": "/docs/tutorials",
        "permanent": true
      },
      {
        "source": "/docs/guides/job-progress",
        "destination": "/docs/guides/synthetic-datasets",
        "permanent": true
      },
      {
        "source": "/docs/databases/create-data-catalog-8-1-relating-your-tables",
        "destination": "/docs/generators/configure/set-table-relationships",
        "permanent": true
      },
      {
        "source": "/docs/datasets/encoding-types-text",
        "destination": "/docs/generators/configure/set-encoding-types",
        "permanent": true
      },
      {
        "source": "/docs/qa-report/reading-the-qa-report",
        "destination": "/docs/guides/qa-report",
        "permanent": true
      },
      {
        "source": "/docs/connectors/cloud-storage.adoc",
        "destination": "/docs/connectors/create#cloud-storage-connectors",
        "permanent": true
      },
      {
        "source": "/docs/connectors/databases",
        "destination": "/docs/guides/connectors/databases",
        "permanent": true
      },
      {
        "source": "/docs/install/deploy/requirements",
        "destination": "/docs/install/requirements",
        "permanent": true
      },
      {
        "source": "/docs/docs/datasets/us-census-na.csv.gz",
        "destination": "/docs/datasets/us-census-na.csv.gz",
        "permanent": true
      },
      {
        "source": "/docs/docs/datasets/baseball.zip",
        "destination": "/docs/datasets/baseball.zip",
        "permanent": true
      },
      {
        "source": "/docs/docs/datasets/insurance_claims.csv.gz",
        "destination": "/docs/datasets/insurance_claims.csv.gz",
        "permanent": true
      },
      {
        "source": "/docs/concepts/best-practices",
        "destination": "/docs/best-practices",
        "permanent": true
      },
      {
        "source": "/docs/guides/jobs",
        "destination": "/docs/synthetic-datasets",
        "permanent": true
      },
      {
        "source": "/docs/guides/jobs/configure",
        "destination": "/docs/synthetic-datasets",
        "permanent": true
      },
      {
        "source": "/docs/guides/jobs/mock-data",
        "destination": "/docs/synthetic-datasets",
        "permanent": true
      },
      {
        "source": "/docs/guides/jobs/encoding-types",
        "destination": "/docs/generators/configure/set-encoding-types",
        "permanent": true
      },
      {
        "source": "/docs/mostly-ai-how-it-works",
        "destination": "/docs",
        "permanent": true
      },
      {
        "source": "/docs/quickstart",
        "destination": "/docs/quick-start",
        "permanent": true
      },
      {
        "source": "/docs/datasets/quick-job-7-configuring-the-training-parameters",
        "destination": "/docs/generators",
        "permanent": true
      },
      {
        "source": "/docs/datasets/encoding-types-categorical",
        "destination": "/docs/generators/configure/set-encoding-types",
        "permanent": true
      },
      {
        "source": "/docs/databases/create-data-catalog-9-configuring-database-columns",
        "destination": "/docs/generators/configure/add-data",
        "permanent": true
      },
      {
        "source": "/docs/guides/connect-to-bigquery",
        "destination": "/docs/connectors/create/bigquery",
        "permanent": true
      },
      {
        "source": "/docs/advanced-features/generating-data-from-readily-trained-models",
        "destination": "/docs/synthetic-datasets/seeded-generation",
        "permanent": true
      },
      {
        "source": "/docs/databases/create-data-catalog-databases",
        "destination": "/docs/generators/configure/set-table-relationships",
        "permanent": true
      },
      {
        "source": "/docs/resources/technical-specifications",
        "destination": "/docs/install/requirements",
        "permanent": true
      },
      {
        "source": "/docs/guides/encoding-types-catalog",
        "destination": "/docs/generators/configure/set-encoding-types",
        "permanent": true
      },
      {
        "source": "/docs/guides/ready-to-use-datasets",
        "destination": "/docs/datasets",
        "permanent": true
      },
      {
        "source": "/docs/resources/third-party-software-list",
        "destination": "/docs",
        "permanent": true
      },
      {
        "source": "/docs/datasets/quick-job-4-setting-number-of-training-generated-subjects",
        "destination": "/docs/synthetic-datasets",
        "permanent": true
      },
      {
        "source": "/docs/install/helm-charts",
        "destination": "/docs/install/deploy/helm-chart",
        "permanent": true
      },
      {
        "source": "/docs/datasets/encoding-types-itt",
        "destination": "/docs/generators/configure/set-encoding-types",
        "permanent": true
      },
      {
        "source": "/docs/datasets/create-data-catalog-8-setting-number-training-generated-subjects",
        "destination": "/docs/synthetic-datasets",
        "permanent": true
      },
      {
        "source": "/docs/datasets/create-data-catalog-3-create-new-data-catalog",
        "destination": "/docs/generators",
        "permanent": true
      },
      {
        "source": "/docs/tutorials/create-a-realistic-and-secure-test-database",
        "destination": "/docs/tutorials",
        "permanent": true
      },
      {
        "source": "/docs/databases/create-data-catalog-4-connecting-database",
        "destination": "/docs/connectors",
        "permanent": true
      },
      {
        "source": "/docs/datasets/create-data-catalog-5-linking-your-tables",
        "destination": "/docs/generators/configure/set-table-relationships",
        "permanent": true
      },
      {
        "source": "/docs/datasets/quick-job-9-downloading-synthetic-data",
        "destination": "/docs/quick-start/data-consumers#step-2-download-synthetic-data",
        "permanent": true
      },
      {
        "source": "/docs/datasets/quick-job-5-linking-your-tables",
        "destination": "/docs/generators/configure/set-table-relationships",
        "permanent": true
      },
      {
        "source": "/docs/datasets/create-data-catalog-4-connecting-dataset",
        "destination": "/docs/connectors",
        "permanent": true
      },
      {
        "source": "/docs/datasets/encoding-types-lat-long",
        "destination": "/docs/generators/configure/set-encoding-types",
        "permanent": true
      },
      {
        "source": "/docs/administration/managing-users-and-groups",
        "destination": "/docs/administration/users-groups",
        "permanent": true
      },
      {
        "source": "/docs/resources/preparing-your-data",
        "destination": "/docs/generators/prepare-data",
        "permanent": true
      },
      {
        "source": "/docs/provisioning/csv-file-requirements",
        "destination": "/docs/generators/prepare-data/csv-requirements",
        "permanent": true
      },
      {
        "source": "/docs/datasets/quick-job-8-launching-your-job",
        "destination": "/docs/quick-start",
        "permanent": true
      },
      {
        "source": "/docs/datasets/quick-job-1-preparing-your-dataset",
        "destination": "/docs/generators/prepare-data",
        "permanent": true
      },
      {
        "source": "/docs/datasets/quick-job-3-exploring-the-synthetization-settings",
        "destination": "/docs/generators",
        "permanent": true
      },
      {
        "source": "/docs/resources/installation-guide",
        "destination": "/docs/install/deploy",
        "permanent": true
      },
      {
        "source": "/docs/resources/csv-file-requirements",
        "destination": "/docs/generators/prepare-data/csv-requirements",
        "permanent": true
      },
      {
        "source": "/docs/datasets/quick-jobs-full",
        "destination": "/docs/datasets",
        "permanent": true
      },
      {
        "source": "/docs/resources/operations-manual",
        "destination": "/docs",
        "permanent": true
      },
      {
        "source": "/docs/advanced-settings/global-run-settings",
        "destination": "/docs",
        "permanent": true
      },
      {
        "source": "/docs/datasets/create-data-catalog-2-creating-data-connector",
        "destination": "/docs/connectors",
        "permanent": true
      },
      {
        "source": "/docs/install/deploy/troubleshoot-openshift",
        "destination": "/docs/install/troubleshoot/openshift",
        "permanent": true
      },
      {
        "source": "/docs/datasets/quick-job-2-uploading-your-dataset",
        "destination": "/docs/generators/configure/add-data",
        "permanent": true
      },
      {
        "source": "/docs/install/custom-config",
        "destination": "/docs/install/config",
        "permanent": true
      },
      {
        "source": "/docs/install/custom-config/configure-compute",
        "destination": "/docs/install/config/compute-resources",
        "permanent": true
      },
      {
        "source": "/docs/install/custom-config/external-postgresql-db",
        "destination": "/docs/install/config/external-postgresql-db",
        "permanent": true
      },
      {
        "source": "/docs/install/custom-config/internal-image-repo",
        "destination": "/docs/install/config/internal-image-repo",
        "permanent": true
      },
      {
        "source": "/docs/install/custom-config/domain-ssl-cert",
        "destination": "/docs/install/config/domain-ssl-cert",
        "permanent": true
      },
      {
        "source": "/docs/data-augmentation/data-rebalancing",
        "destination": "/docs/synthetic-datasets/rebalance-columns",
        "permanent": true
      },
      {
        "source": "/docs/data-augmentation/generation-mood",
        "destination": "/docs/synthetic-datasets/set-size-temp",
        "permanent": true
      },
      {
        "source": "/docs/data-augmentation/smart-imputation",
        "destination": "/docs/synthetic-datasets/data-imputation",
        "permanent": true
      },
      {
        "source": "/docs/get-started",
        "destination": "/docs/quick-start",
        "permanent": true
      },
      {
        "source": "/docs/get-started/download-synthetic-data",
        "destination": "/docs/quick-start/data-consumers#step-2-download-synthetic-data",
        "permanent": true
      },
      {
        "source": "/docs/get-started/home-page",
        "destination": "/docs/quick-start",
        "permanent": true
      },
      {
        "source": "/docs/get-started/preview-synthetic-data",
        "destination": "/docs/quick-start",
        "permanent": true
      },
      {
        "source": "/docs/get-started/synthesize-cloud-bucket",
        "destination": "/docs/quick-start",
        "permanent": true
      },
      {
        "source": "/docs/get-started/synthesize-database",
        "destination": "/docs/quick-start",
        "permanent": true
      },
      {
        "source": "/docs/get-started/synthesize-sample-dataset",
        "destination": "/docs/quick-start",
        "permanent": true
      },
      {
        "source": "/docs/get-started/synthesize-uploaded-files",
        "destination": "/docs/quick-start",
        "permanent": true
      },
      {
        "source": "/docs/glossary",
        "destination": "/docs/generators/tabular-synthetic-data",
        "permanent": true
      },
      {
        "source": "/docs/guides/catalogs/configure",
        "destination": "/docs/generators",
        "permanent": true
      },
      {
        "source": "/docs/guides/catalogs/create",
        "destination": "/docs/generators/train",
        "permanent": true
      },
      {
        "source": "/docs/guides/connectors",
        "destination": "/docs/connectors",
        "permanent": true
      },
      {
        "source": "/docs/guides/connectors/cloud-storage",
        "destination": "/docs/connectors/create#cloud-storage-connectors",
        "permanent": true
      },
      {
        "source": "/docs/guides/connectors/cloud-storage/aws",
        "destination": "/docs/connectors/create/aws",
        "permanent": true
      },
      {
        "source": "/docs/guides/connectors/cloud-storage/azure",
        "destination": "/docs/connectors/create/azure",
        "permanent": true
      },
      {
        "source": "/docs/guides/connectors/cloud-storage/google-cloud",
        "destination": "/docs/connectors/create/google-cloud",
        "permanent": true
      },
      {
        "source": "/docs/guides/connectors/data-destination",
        "destination": "/docs/connectors/use/data-destination",
        "permanent": true
      },
      {
        "source": "/docs/guides/connectors/data-source",
        "destination": "/docs/connectors/use/data-source",
        "permanent": true
      },
      {
        "source": "/docs/guides/connectors/databases",
        "destination": "/docs/connectors/create#database-connectors",
        "permanent": true
      },
      {
        "source": "/docs/guides/connectors/databases/bigquery",
        "destination": "/docs/connectors/create/bigquery",
        "permanent": true
      },
      {
        "source": "/docs/guides/connectors/databases/databricks",
        "destination": "/docs/connectors/create/databricks",
        "permanent": true
      },
      {
        "source": "/docs/guides/connectors/databases/mariadb",
        "destination": "/docs/connectors/create/mariadb",
        "permanent": true
      },
      {
        "source": "/docs/guides/connectors/databases/mysql",
        "destination": "/docs/connectors/create/mysql",
        "permanent": true
      },
      {
        "source": "/docs/guides/connectors/databases/oracle",
        "destination": "/docs/connectors/create/oracle",
        "permanent": true
      },
      {
        "source": "/docs/guides/connectors/databases/postgresql",
        "destination": "/docs/connectors/create/postgresql",
        "permanent": true
      },
      {
        "source": "/docs/guides/connectors/databases/snowflake",
        "destination": "/docs/connectors/create/snowflake",
        "permanent": true
      },
      {
        "source": "/docs/guides/connectors/databases/sql-server",
        "destination": "/docs/connectors/create/sql-server",
        "permanent": true
      },
      {
        "source": "/docs/guides/connectors/local-db",
        "destination": "/docs/connectors/use/local-db",
        "permanent": true
      },
      {
        "source": "/docs/guides/generate-more-data",
        "destination": "/docs/synthetic-datasets/seeded-generation",
        "permanent": true
      },
      {
        "source": "/docs/guides/prepare-data",
        "destination": "/docs/generators/prepare-data",
        "permanent": true
      },
      {
        "source": "/docs/guides/prepare-data/csv-requirements",
        "destination": "/docs/generators/prepare-data/csv-requirements",
        "permanent": true
      },
      {
        "source": "/docs/guides/prepare-data/subject-linked-requirements",
        "destination": "/docs/generators/prepare-data/subject-linked-requirements",
        "permanent": true
      },
      {
        "source": "/docs/guides/qa-report",
        "destination": "/docs/generators/evaluate-quality",
        "permanent": true
      },
      {
        "source": "/docs/guides/rare-values",
        "destination": "/docs/generators/rare-values",
        "permanent": true
      },
      {
        "source": "/docs/guides/synthetic-datasets",
        "destination": "/docs/synthetic-datasets",
        "permanent": true
      },
      {
        "source": "/docs/guides/synthetic-datasets/configure",
        "destination": "/docs/synthetic-datasets",
        "permanent": true
      },
      {
        "source": "/docs/guides/synthetic-datasets/encoding-types",
        "destination": "/docs/generators/configure/set-encoding-types",
        "permanent": true
      },
      {
        "source": "/docs/guides/synthetic-datasets/mock-data",
        "destination": "/docs/synthetic-datasets",
        "permanent": true
      },
      {
        "source": "/docs/install/support",
        "destination": "/docs/support",
        "permanent": true
      },
      {
        "source": "/docs/synthetic-datasets/fill-nulls-imputation",
        "destination": "/docs/synthetic-datasets/data-imputation",
        "permanent": true
      },
      {
        "source": "/docs/api-key",
        "destination": "/docs/python-sdk#get-an-api-key",
        "permanent": true
      },
      {
        "source": "/docs/synthetic-datasets/generate-more-data",
        "destination": "/docs/synthetic-datasets/seeded-generation",
        "permanent": true
      },
      {
        "source": "/docs/connectors/create/aws",
        "destination": "/docs/connectors/create/s3",
        "permanent": true
      },
      {
        "source": "/docs/synthetic-datasets/live-probing",
        "destination": "/docs/generators/live-probing",
        "permanent": true
      },
      {
        "source": "/docs/generators/add-data",
        "destination": "/docs/generators/configure/add-data",
        "permanent": true
      },
      {
        "source": "/docs/generators/configure-time-series",
        "destination": "/docs/generators/configure/configure-time-series",
        "permanent": true
      },
      {
        "source": "/docs/generators/enable-flexible-generation",
        "destination": "/docs/generators/configure/enable-flexible-generation",
        "permanent": true
      },
      {
        "source": "/docs/generators/fine-tune-privacy-mechanisms",
        "destination": "/docs/generators/configure/fine-tune-privacy-mechanisms",
        "permanent": true
      },
      {
        "source": "/docs/generators/improve-model-accuracy",
        "destination": "/docs/generators/configure/improve-model-accuracy",
        "permanent": true
      },
      {
        "source": "/docs/generators/set-column-types",
        "destination": "/docs/generators/configure/set-encoding-types",
        "permanent": true
      },
      {
        "source": "/docs/generators/set-table-relationships",
        "destination": "/docs/generators/configure/set-table-relationships",
        "permanent": true
      },
      {
        "source": "/docs/generators/set-table-relationships/two-table",
        "destination": "/docs/generators/configure/set-table-relationships/two-table",
        "permanent": true
      },
      {
        "source": "/docs/generators/set-table-relationships/multi-table",
        "destination": "/docs/generators/configure/set-table-relationships/multi-table",
        "permanent": true
      },
      {
        "source": "/docs/generators/set-table-relationships/relationship-diagram",
        "destination": "/docs/generators/configure/set-table-relationships/relationship-diagram",
        "permanent": true
      },
      {
        "source": "/docs/generators/set-table-relationships/manage-pks",
        "destination": "/docs/generators/configure/set-table-relationships/manage-pks",
        "permanent": true
      },
      {
        "source": "/docs/generators/speed-up-training",
        "destination": "/docs/generators/configure/speed-up-training",
        "permanent": true
      },
      {
        "source": "/docs/administration/license",
        "destination": "/docs/install/deploy",
        "permanent": true
      },
      {
        "source": "/docs/generators/configure/set-column-types",
        "destination": "/docs/generators/configure/set-encoding-types",
        "permanent": true
      },
      {
        "source": "/docs/python-client",
        "destination": "/docs/python-sdk",
        "permanent": true
      },
      {
        "source": "/generators/share",
        "destination": "/generators/export-import",
        "permanent": true
      },
      {
        "source": "/public-private-assets",
        "destination": "/public-private-resources",
        "permanent": true
      },
      {
        "source": "/organizations/manage-assets",
        "destination": "/organizations/manage-resources",
        "permanent": true
      }
  ]
});