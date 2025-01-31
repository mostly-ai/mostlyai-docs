import nextra from 'nextra';

const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx'    
  })

module.exports = withNextra({
  basePath: '/docs',
  output: "export",
  images: {
    unoptimized: true
  }
})