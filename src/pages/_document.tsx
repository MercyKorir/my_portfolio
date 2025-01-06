import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const basePath = process.env.BASE_PATH || '';

  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href={`${basePath}/images/Logo.png`} />

        <meta name="description" content="Mercy Chelangat Web Portfolio" />
        <meta name="keywords" content="web, portfolio, nextjs, typescript" />
        <meta name="author" content="Mercy Chelangat" />

        <title>My Portfolio</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
