export function Favicon() {
  return (
    <>
      <link
        rel="icon"
        type="image/png"
        href="/static/favicons/favicon-96x96.png"
        sizes="96x96"
      />
      <link
        rel="icon"
        type="image/svg+xml"
        href="/static/favicons/favicon.svg"
      />
      <link rel="shortcut icon" href="/static/favicons/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/favicons/apple-touch-icon.png"
      />
      <meta name="apple-mobile-web-app-title" content="DHealth" />
      <link
        rel="manifest"
        crossOrigin="use-credentials"
        href="/static/favicons/site.webmanifest"
      />
    </>
  )
}
