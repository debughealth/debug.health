import Image from 'next/image'
import { useRouter } from 'next/router'
import { useConfig, useTheme } from 'nextra-theme-docs'

const x2 = 8
const x6 = 24

const Logo = () => {
  const { theme } = useTheme()

  return (
    <>
      <Image
        src="/static/logo/logo-64x64.png"
        alt="Debug Health"
        width={x6}
        height={x6}
        style={{
          marginRight: x2,
          filter: theme === 'dark' ? 'invert(1)' : 'none',
        }}
      />
      <h1>Debug Health</h1>
    </>
  )
}

export default {
  // github
  docsRepositoryBase: 'https://github.com/debughealth/debug.health/tree/main',

  // page head
  logo: <Logo />,
  project: {
    link: 'https://github.com/debughealth/debug.health',
  },
  chat: {
    link: 'https://discord.gg/yUtbNAZ3pp',
  },

  head() {
    const { title, frontMatter } = useConfig()

    const siteTitle = 'Debug Health'
    const siteDescription = [
      'A guide book for people who need to work long hours',
      'behind a desk in a healthy way.',
    ].join(' ')

    const pageTitle = frontMatter.title || title
    const pageDescription = frontMatter.description || siteDescription

    const url = 'https://debug.health'

    return (
      <>
        <title>{pageTitle || siteTitle}</title>
        <meta property="og:title" content={pageTitle || siteTitle} />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={url} />
        <meta
          property="og:image"
          content={`${url}/static/logo/logo-64x64.png`}
        />
        <meta property="og:image:width" content="64" />
        <meta property="og:image:height" content="64" />
      </>
    )
  },

  // sidebar
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },

  // footer
  footer: {
    content: `© ${new Date().getFullYear()} Debug Health`,
  },

  darkMode: true,
}
