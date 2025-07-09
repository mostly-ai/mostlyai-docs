import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

export default withNextra({
  basePath: "/",
  trailingSlash: process.env.NEXT_TRAILING_SLASH === "true" ? true : false,
  images: {
    unoptimized: process.env.UNOPTIMIZED_IMAGES === "true",
  },
  output: process.env.NEXT_OUTPUT,
  redirects: async () => [
    {
      source: "/mostly-ai-help-support-tutorials-documentation",
      destination: "/",
      permanent: true,
    },
    {
      source: "/concepts/concepts-section",
      destination: "/",
      permanent: true,
    },
    {
      source: "/concepts/mostly-ai-what-is-ai-powered-synthetic-data",
      destination: "/concepts/what-is-synthetic-data",
      permanent: true,
    },
    {
      source: "/concepts/privacy-best-practices",
      destination: "/best-practices",
      permanent: true,
    },
    {
      source: "/concepts/glossary",
      destination: "/generators/tabular-synthetic-data",
      permanent: true,
    },
    {
      source: "/guides/guides-section",
      destination: "/generators",
      permanent: true,
    },
    {
      source: "/guides/provisioning/prepare-your-data",
      destination: "/generators/prepare-data",
      permanent: true,
    },
    {
      source: "/guides/provisioning/subject-linked-table-requirements",
      destination: "/generators/prepare-data/subject-linked-requirements",
      permanent: true,
    },
    {
      source: "/guides/provisioning/csv-file-requirements",
      destination: "/generators/prepare-data/csv-requirements",
      permanent: true,
    },
    {
      source: "/guides/encoding-types",
      destination: "/generators/configure/set-encoding-types",
      permanent: true,
    },
    {
      source: "/guides/encoding-types-catalogs",
      destination: "/generators/configure/set-encoding-types",
      permanent: true,
    },
    {
      source: "/guides/mock-data",
      destination: "/synthetic-datasets",
      permanent: true,
    },
    {
      source: "/guides/catalogs/catalogs",
      destination: "/generators",
      permanent: true,
    },
    {
      source: "/guides/connectors/connect-to-mysql",
      destination: "/connectors/create/mysql",
      permanent: true,
    },
    {
      source: "/guides/connectors/connect-to-postgresql",
      destination: "/connectors/create/postgresql",
      permanent: true,
    },
    {
      source: "/guides/connectors/connect-to-sql-server",
      destination: "/connectors/create/sql-server",
      permanent: true,
    },
    {
      source: "/guides/connectors/connect-to-oracle",
      destination: "/connectors/create/oracle",
      permanent: true,
    },
    {
      source: "/guides/connectors/connect-to-mariadb",
      destination: "/connectors/create/mariadb",
      permanent: true,
    },
    {
      source: "/guides/connect-to-snowflake",
      destination: "/connectors/create/snowflake",
      permanent: true,
    },
    {
      source: "/guides/connectors/connect-to-snowflake",
      destination: "/connectors/create/snowflake",
      permanent: true,
    },
    {
      source: "/guides/connectors/connect-to-bigquery",
      destination: "/connectors/create/bigquery",
      permanent: true,
    },
    {
      source: "/guides/connectors/connect-to-databricks",
      destination: "/connectors/create/databricks",
      permanent: true,
    },
    {
      source: "/guides/connectors/connect-to-aws",
      destination: "/connectors/create/aws",
      permanent: true,
    },
    {
      source: "/guides/connectors/connect-to-google-cloud",
      destination: "/connectors/create/google-cloud",
      permanent: true,
    },
    {
      source: "/guides/connectors/connect-to-azure",
      destination: "/connectors/create/azure",
      permanent: true,
    },
    {
      source: "/guides/data-destination-local-machine",
      destination: "/connectors/use/local-db",
      permanent: true,
    },
    {
      source: "/guides/event-time-series-data",
      destination: "/generators/configure/configure-time-series",
      permanent: true,
    },
    {
      source: "/install/install-section",
      destination: "/install/deploy",
      permanent: true,
    },
    {
      source: "/install/deployment",
      destination: "/install/deploy",
      permanent: true,
    },
    {
      source: "/install/helm-chart",
      destination: "/install/deploy/helm-chart",
      permanent: true,
    },
    {
      source: "/install/checklist",
      destination: "/install/deploy/checklist",
      permanent: true,
    },
    {
      source: "/install/deploy-to-openshift",
      destination: "/install/deploy/openshift",
      permanent: true,
    },
    {
      source: "/install/deploy-to-aws-eks",
      destination: "/install/deploy/aws-eks",
      permanent: true,
    },
    {
      source: "/install/deploy-to-minikube",
      destination: "/install/deploy/minikube",
      permanent: true,
    },
    {
      source: "/install/troubleshoot-openshift",
      destination: "/install/deploy/openshift",
      permanent: true,
    },
    {
      source: "/administration/administration-section",
      destination: "/administration/users-groups",
      permanent: true,
    },
    {
      source: "/administration/users-and-groups",
      destination: "/administration/users-groups",
      permanent: true,
    },
    {
      source: "/data-augmentation/rebalance-your-data",
      destination: "/synthetic-datasets/rebalance-columns",
      permanent: true,
    },
    {
      source: "/ready-to-use-datasets",
      destination: "/datasets",
      permanent: true,
    },
    {
      source: "/whats-new-in-mostly-ai",
      destination: "/whats-new",
      permanent: true,
    },
    {
      source: "/data-augmentation/data-augmentation-section",
      destination: "/synthetic-datasets",
      permanent: true,
    },
    {
      source: "/mostly-ai-how-does-it-help-your-team-and-business",
      destination: "/",
      permanent: true,
    },
    {
      source: "/administration/technical-specifications",
      destination: "/install/architecture",
      permanent: true,
    },
    {
      source: "/guides/provisioning/data-formatting-requirements",
      destination: "/generators/prepare-data/csv-requirements",
      permanent: true,
    },
    {
      source: "/concepts/home-page",
      destination: "/quick-start",
      permanent: true,
    },
    {
      source: "/get-started/synthesize-cloud-storage",
      destination: "/quick-start",
      permanent: true,
    },
    {
      source: "/guides/synthesize-complex-database-relationships",
      destination: "/generators/configure/set-table-relationships",
      permanent: true,
    },
    {
      source: "/guides/create-a-catalog-database",
      destination: "/generators/train",
      permanent: true,
    },
    {
      source: "/guides/create-a-catalog-datasets",
      destination: "/generators/train",
      permanent: true,
    },
    {
      source: "/guides/mock-data-catalog",
      destination: "/synthetic-datasets",
      permanent: true,
    },
    {
      source: "/administration/installation-guide",
      destination: "/install/deploy",
      permanent: true,
    },
    {
      source: "/administration/installation-command-line-reference",
      destination: "/install/deploy",
      permanent: true,
    },
    {
      source: "/guides/launch-a-job",
      destination: "/quick-start",
      permanent: true,
    },
    {
      source: "/guides/provisioning/provision-your-data",
      destination: "/generators/prepare-data",
      permanent: true,
    },
    {
      source: "/data-augmentation/event-time-series-data",
      destination: "/generators/configure/configure-time-series",
      permanent: true,
    },
    {
      source: "/guides/catalogs/catalogs",
      destination: "/generators/train",
      permanent: true,
    },
    {
      source: "/administration/troubleshooting",
      destination: "/administration/users-groups",
      permanent: true,
    },
    {
      source: "/tutorials/privacy-secure-behavioral-customer-data",
      destination: "/tutorials",
      permanent: true,
    },
    {
      source: "/guides/job-progress",
      destination: "/guides/synthetic-datasets",
      permanent: true,
    },
    {
      source: "/databases/create-data-catalog-8-1-relating-your-tables",
      destination: "/generators/configure/set-table-relationships",
      permanent: true,
    },
    {
      source: "/datasets/encoding-types-text",
      destination: "/generators/configure/set-encoding-types",
      permanent: true,
    },
    {
      source: "/qa-report/reading-the-qa-report",
      destination: "/guides/qa-report",
      permanent: true,
    },
    {
      source: "/connectors/cloud-storage.adoc",
      destination: "/connectors/create#cloud-storage-connectors",
      permanent: true,
    },
    {
      source: "/connectors/databases",
      destination: "/guides/connectors/databases",
      permanent: true,
    },
    {
      source: "/install/deploy/requirements",
      destination: "/install/requirements",
      permanent: true,
    },
    {
      source: "/datasets/us-census-na.csv.gz",
      destination: "/datasets/us-census-na.csv.gz",
      permanent: true,
    },
    {
      source: "/datasets/baseball.zip",
      destination: "/datasets/baseball.zip",
      permanent: true,
    },
    {
      source: "/datasets/insurance_claims.csv.gz",
      destination: "/datasets/insurance_claims.csv.gz",
      permanent: true,
    },
    {
      source: "/concepts/best-practices",
      destination: "/best-practices",
      permanent: true,
    },
    {
      source: "/guides/jobs",
      destination: "/synthetic-datasets",
      permanent: true,
    },
    {
      source: "/guides/jobs/configure",
      destination: "/synthetic-datasets",
      permanent: true,
    },
    {
      source: "/guides/jobs/mock-data",
      destination: "/synthetic-datasets",
      permanent: true,
    },
    {
      source: "/guides/jobs/encoding-types",
      destination: "/generators/configure/set-encoding-types",
      permanent: true,
    },
    {
      source: "/mostly-ai-how-it-works",
      destination: "/",
      permanent: true,
    },
    {
      source: "/quickstart",
      destination: "/quick-start",
      permanent: true,
    },
    {
      source: "/datasets/quick-job-7-configuring-the-training-parameters",
      destination: "/generators",
      permanent: true,
    },
    {
      source: "/datasets/encoding-types-categorical",
      destination: "/generators/configure/set-encoding-types",
      permanent: true,
    },
    {
      source: "/databases/create-data-catalog-9-configuring-database-columns",
      destination: "/generators/configure/add-data",
      permanent: true,
    },
    {
      source: "/guides/connect-to-bigquery",
      destination: "/connectors/create/bigquery",
      permanent: true,
    },
    {
      source: "/advanced-features/generating-data-from-readily-trained-models",
      destination: "/synthetic-datasets/seeded-generation",
      permanent: true,
    },
    {
      source: "/databases/create-data-catalog-databases",
      destination: "/generators/configure/set-table-relationships",
      permanent: true,
    },
    {
      source: "/resources/technical-specifications",
      destination: "/install/requirements",
      permanent: true,
    },
    {
      source: "/guides/encoding-types-catalog",
      destination: "/generators/configure/set-encoding-types",
      permanent: true,
    },
    {
      source: "/guides/ready-to-use-datasets",
      destination: "/datasets",
      permanent: true,
    },
    {
      source: "/resources/third-party-software-list",
      destination: "/",
      permanent: true,
    },
    {
      source:
        "/datasets/quick-job-4-setting-number-of-training-generated-subjects",
      destination: "/synthetic-datasets",
      permanent: true,
    },
    {
      source: "/install/helm-charts",
      destination: "/install/deploy/helm-chart",
      permanent: true,
    },
    {
      source: "/datasets/encoding-types-itt",
      destination: "/generators/configure/set-encoding-types",
      permanent: true,
    },
    {
      source:
        "/datasets/create-data-catalog-8-setting-number-training-generated-subjects",
      destination: "/synthetic-datasets",
      permanent: true,
    },
    {
      source: "/datasets/create-data-catalog-3-create-new-data-catalog",
      destination: "/generators",
      permanent: true,
    },
    {
      source: "/tutorials/create-a-realistic-and-secure-test-database",
      destination: "/tutorials",
      permanent: true,
    },
    {
      source: "/databases/create-data-catalog-4-connecting-database",
      destination: "/connectors",
      permanent: true,
    },
    {
      source: "/datasets/create-data-catalog-5-linking-your-tables",
      destination: "/generators/configure/set-table-relationships",
      permanent: true,
    },
    {
      source: "/datasets/quick-job-9-downloading-synthetic-data",
      destination: "/quick-start/data-consumers#step-2-download-synthetic-data",
      permanent: true,
    },
    {
      source: "/datasets/quick-job-5-linking-your-tables",
      destination: "/generators/configure/set-table-relationships",
      permanent: true,
    },
    {
      source: "/datasets/create-data-catalog-4-connecting-dataset",
      destination: "/connectors",
      permanent: true,
    },
    {
      source: "/datasets/encoding-types-lat-long",
      destination: "/generators/configure/set-encoding-types",
      permanent: true,
    },
    {
      source: "/administration/managing-users-and-groups",
      destination: "/administration/users-groups",
      permanent: true,
    },
    {
      source: "/resources/preparing-your-data",
      destination: "/generators/prepare-data",
      permanent: true,
    },
    {
      source: "/provisioning/csv-file-requirements",
      destination: "/generators/prepare-data/csv-requirements",
      permanent: true,
    },
    {
      source: "/datasets/quick-job-8-launching-your-job",
      destination: "/quick-start",
      permanent: true,
    },
    {
      source: "/datasets/quick-job-1-preparing-your-dataset",
      destination: "/generators/prepare-data",
      permanent: true,
    },
    {
      source: "/datasets/quick-job-3-exploring-the-synthetization-settings",
      destination: "/generators",
      permanent: true,
    },
    {
      source: "/resources/installation-guide",
      destination: "/install/deploy",
      permanent: true,
    },
    {
      source: "/resources/csv-file-requirements",
      destination: "/generators/prepare-data/csv-requirements",
      permanent: true,
    },
    {
      source: "/datasets/quick-jobs-full",
      destination: "/datasets",
      permanent: true,
    },
    {
      source: "/resources/operations-manual",
      destination: "/",
      permanent: true,
    },
    {
      source: "/advanced-settings/global-run-settings",
      destination: "/",
      permanent: true,
    },
    {
      source: "/datasets/create-data-catalog-2-creating-data-connector",
      destination: "/connectors",
      permanent: true,
    },
    {
      source: "/install/deploy/troubleshoot-openshift",
      destination: "/install/troubleshoot/openshift",
      permanent: true,
    },
    {
      source: "/datasets/quick-job-2-uploading-your-dataset",
      destination: "/generators/configure/add-data",
      permanent: true,
    },
    {
      source: "/install/custom-config",
      destination: "/install/config",
      permanent: true,
    },
    {
      source: "/install/custom-config/configure-compute",
      destination: "/install/config/compute-resources",
      permanent: true,
    },
    {
      source: "/install/custom-config/external-postgresql-db",
      destination: "/install/config/external-postgresql-db",
      permanent: true,
    },
    {
      source: "/install/custom-config/internal-image-repo",
      destination: "/install/config/internal-image-repo",
      permanent: true,
    },
    {
      source: "/install/custom-config/domain-ssl-cert",
      destination: "/install/config/domain-tls-cert",
      permanent: true,
    },
    {
      source: "/data-augmentation/data-rebalancing",
      destination: "/synthetic-datasets/rebalance-columns",
      permanent: true,
    },
    {
      source: "/data-augmentation/generation-mood",
      destination: "/synthetic-datasets/set-size-temp",
      permanent: true,
    },
    {
      source: "/data-augmentation/smart-imputation",
      destination: "/synthetic-datasets/data-imputation",
      permanent: true,
    },
    {
      source: "/get-started",
      destination: "/quick-start",
      permanent: true,
    },
    {
      source: "/get-started/download-synthetic-data",
      destination: "/quick-start/data-consumers#step-2-download-synthetic-data",
      permanent: true,
    },
    {
      source: "/get-started/home-page",
      destination: "/quick-start",
      permanent: true,
    },
    {
      source: "/get-started/preview-synthetic-data",
      destination: "/quick-start",
      permanent: true,
    },
    {
      source: "/get-started/synthesize-cloud-bucket",
      destination: "/quick-start",
      permanent: true,
    },
    {
      source: "/get-started/synthesize-database",
      destination: "/quick-start",
      permanent: true,
    },
    {
      source: "/get-started/synthesize-sample-dataset",
      destination: "/quick-start",
      permanent: true,
    },
    {
      source: "/get-started/synthesize-uploaded-files",
      destination: "/quick-start",
      permanent: true,
    },
    {
      source: "/glossary",
      destination: "/generators/tabular-synthetic-data",
      permanent: true,
    },
    {
      source: "/guides/catalogs/configure",
      destination: "/generators",
      permanent: true,
    },
    {
      source: "/guides/catalogs/create",
      destination: "/generators/train",
      permanent: true,
    },
    {
      source: "/guides/connectors",
      destination: "/connectors",
      permanent: true,
    },
    {
      source: "/guides/connectors/cloud-storage",
      destination: "/connectors/create#cloud-storage-connectors",
      permanent: true,
    },
    {
      source: "/guides/connectors/cloud-storage/aws",
      destination: "/connectors/create/aws",
      permanent: true,
    },
    {
      source: "/guides/connectors/cloud-storage/azure",
      destination: "/connectors/create/azure",
      permanent: true,
    },
    {
      source: "/guides/connectors/cloud-storage/google-cloud",
      destination: "/connectors/create/google-cloud",
      permanent: true,
    },
    {
      source: "/guides/connectors/data-destination",
      destination: "/connectors/use/data-destination",
      permanent: true,
    },
    {
      source: "/guides/connectors/data-source",
      destination: "/connectors/use/data-source",
      permanent: true,
    },
    {
      source: "/guides/connectors/databases",
      destination: "/connectors/create#database-connectors",
      permanent: true,
    },
    {
      source: "/guides/connectors/databases/bigquery",
      destination: "/connectors/create/bigquery",
      permanent: true,
    },
    {
      source: "/guides/connectors/databases/databricks",
      destination: "/connectors/create/databricks",
      permanent: true,
    },
    {
      source: "/guides/connectors/databases/mariadb",
      destination: "/connectors/create/mariadb",
      permanent: true,
    },
    {
      source: "/guides/connectors/databases/mysql",
      destination: "/connectors/create/mysql",
      permanent: true,
    },
    {
      source: "/guides/connectors/databases/oracle",
      destination: "/connectors/create/oracle",
      permanent: true,
    },
    {
      source: "/guides/connectors/databases/postgresql",
      destination: "/connectors/create/postgresql",
      permanent: true,
    },
    {
      source: "/guides/connectors/databases/snowflake",
      destination: "/connectors/create/snowflake",
      permanent: true,
    },
    {
      source: "/guides/connectors/databases/sql-server",
      destination: "/connectors/create/sql-server",
      permanent: true,
    },
    {
      source: "/guides/connectors/local-db",
      destination: "/connectors/use/local-db",
      permanent: true,
    },
    {
      source: "/guides/generate-more-data",
      destination: "/synthetic-datasets/seeded-generation",
      permanent: true,
    },
    {
      source: "/guides/prepare-data",
      destination: "/generators/prepare-data",
      permanent: true,
    },
    {
      source: "/guides/prepare-data/csv-requirements",
      destination: "/generators/prepare-data/csv-requirements",
      permanent: true,
    },
    {
      source: "/guides/prepare-data/subject-linked-requirements",
      destination: "/generators/prepare-data/subject-linked-requirements",
      permanent: true,
    },
    {
      source: "/guides/qa-report",
      destination: "/generators/evaluate-quality",
      permanent: true,
    },
    {
      source: "/guides/rare-values",
      destination: "/generators/rare-values",
      permanent: true,
    },
    {
      source: "/guides/synthetic-datasets",
      destination: "/synthetic-datasets",
      permanent: true,
    },
    {
      source: "/guides/synthetic-datasets/configure",
      destination: "/synthetic-datasets",
      permanent: true,
    },
    {
      source: "/guides/synthetic-datasets/encoding-types",
      destination: "/generators/configure/set-encoding-types",
      permanent: true,
    },
    {
      source: "/guides/synthetic-datasets/mock-data",
      destination: "/synthetic-datasets",
      permanent: true,
    },
    {
      source: "/install/support",
      destination: "/support",
      permanent: true,
    },
    {
      source: "/synthetic-datasets/fill-nulls-imputation",
      destination: "/synthetic-datasets/data-imputation",
      permanent: true,
    },
    {
      source: "/api-key",
      destination: "/python-sdk#get-an-api-key",
      permanent: true,
    },
    {
      source: "/synthetic-datasets/generate-more-data",
      destination: "/synthetic-datasets/seeded-generation",
      permanent: true,
    },
    {
      source: "/connectors/create/aws",
      destination: "/connectors/create/s3",
      permanent: true,
    },
    {
      source: "/synthetic-datasets/live-probing",
      destination: "/generators/live-probing",
      permanent: true,
    },
    {
      source: "/generators/add-data",
      destination: "/generators/configure/add-data",
      permanent: true,
    },
    {
      source: "/generators/configure-time-series",
      destination: "/generators/configure/configure-time-series",
      permanent: true,
    },
    {
      source: "/generators/enable-flexible-generation",
      destination: "/generators/configure/enable-flexible-generation",
      permanent: true,
    },
    {
      source: "/generators/fine-tune-privacy-mechanisms",
      destination: "/generators/configure/fine-tune-privacy-mechanisms",
      permanent: true,
    },
    {
      source: "/generators/improve-model-accuracy",
      destination: "/generators/configure/improve-model-accuracy",
      permanent: true,
    },
    {
      source: "/generators/set-column-types",
      destination: "/generators/configure/set-encoding-types",
      permanent: true,
    },
    {
      source: "/generators/set-table-relationships",
      destination: "/generators/configure/set-table-relationships",
      permanent: true,
    },
    {
      source: "/generators/set-table-relationships/two-table",
      destination: "/generators/configure/set-table-relationships/two-table",
      permanent: true,
    },
    {
      source: "/generators/set-table-relationships/multi-table",
      destination: "/generators/configure/set-table-relationships/multi-table",
      permanent: true,
    },
    {
      source: "/generators/set-table-relationships/relationship-diagram",
      destination:
        "/generators/configure/set-table-relationships/relationship-diagram",
      permanent: true,
    },
    {
      source: "/generators/set-table-relationships/manage-pks",
      destination: "/generators/configure/set-table-relationships/manage-pks",
      permanent: true,
    },
    {
      source: "/generators/speed-up-training",
      destination: "/generators/configure/speed-up-training",
      permanent: true,
    },
    {
      source: "/administration/license",
      destination: "/install/deploy",
      permanent: true,
    },
    {
      source: "/generators/configure/set-column-types",
      destination: "/generators/configure/set-encoding-types",
      permanent: true,
    },
    {
      source: "/python-client",
      destination: "/python-sdk",
      permanent: true,
    },
    {
      source: "/generators/share",
      destination: "/generators/export-import",
      permanent: true,
    },
    {
      source: "/public-private-assets",
      destination: "/public-private-resources",
      permanent: true,
    },
    {
      source: "/organizations/manage-assets",
      destination: "/organizations/manage-resources",
      permanent: true,
    },
    {
      source: "/install/config/domain-ssl-cert",
      destination: "/install/config/domain-tls-cert",
      permanent: true,
    },
  ],
});
