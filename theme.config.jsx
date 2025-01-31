import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import AlgoliaSearch from 'utils/docsearch'

const searchConfig = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH === "true"
  ? { component: AlgoliaSearch }
  : {}; // Leave it empty to use the default search

export default {
    logo: (
      <div>
        <span className="mostlyai-logo">
          <a href="https://mostly.ai">
            <img 
              src="/docs/logo/MOSTLY.AI_logo_light_gradient.svg" 
              alt="MOSTLY AI Logo - gradient"
              width={175}
              height={30}
            />
          </a>
        </span>
        <span className="logo-separator">/</span>
        <span className="mostlyai-docs-logo">
          <a href="/docs">
          <img 
            src="/docs/logo/docs-logo.svg"
            alt="MOSTLY AI Docs logo"
            width={60}
            height={30}
          />
          </a>
        </span>
        <style jsx>{`
          .mostlyai-logo a img {
            display: inline-block;
            margin: 0;
            padding: 0;
            margin-right: 10px;
          }
          .mostlyai-docs-logo a img {
            display: inline-block;
            margin: 0;
            padding: 0;
            margin-left: 10px;
          }
          .mostlyai-logo a:hover {
            background: none;
          }
          .mostlyai-docs-logo a:hover {
            background: none;
          }
          .logo-separator {
            font-weight: 900;  
            color: lightgrey;
          }
        `}</style>
      </div>
    ),
    logoLink: false,
    feedback: {
      content: null
    },
    editLink: {
      content: null
    },
    sidebar: {
      defaultMenuCollapseLevel: 1
    },
    toc: {
      title: "ON THIS PAGE"
    },
    navigation: {
      prev: false,
      next: false
    },
    useNextSeoProps() {
      return {
        titleTemplate: '%s – MOSTLY AI Docs'
      }
    },
    head: () => {
      const { asPath } = useRouter()
      const { frontMatter } = useConfig()
      const url =
        'https://mostly.ai/docs' + `${asPath}`

      return (
        <>
          <link rel="icon" type="image/x-icon" href="/docs/favicon/MOSTLY-AI-Docs-favicon.svg" />
          <link rel="canonical" href={url} />
          <meta property="og:url" content={url} />
          <meta property="og:title" content={frontMatter.title || 'MOSTLY AI Documentation'} />
          <meta property="og:description" content={frontMatter.description || 'MOSTLY AI Documentation '}
          />
          <meta property="og:image" content="/docs/logo/mostly-ai-docs-social.png" />
          <meta name="twitter:title" content={frontMatter.title || 'MOSTLY AI Documentation'} />
          <meta name="twitter:description" content={frontMatter.description || 'MOSTLY AI Documentation'} />
          <meta name="twitter:image" content="/docs/logo/mostly-ai-docs-social.png" />
        </>
      )
    },
    footer: {
      component: null,
    },
    nextThemes: {
      defaultTheme: 'light'
    },
    gitTimestamp: null,
    darkMode: false,
    search: searchConfig
  }