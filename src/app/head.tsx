export default function Head() {
  return (
    <>
      <link rel="manifest" href="/manifest.webmanifest" />
      <meta name="theme-color" content="#2563eb" media="(prefers-color-scheme: light)" />
      <meta name="theme-color" content="#1e3a8a" media="(prefers-color-scheme: dark)" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Dental Web Techs" />
      <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
    </>
  );
}
