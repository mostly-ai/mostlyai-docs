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
});