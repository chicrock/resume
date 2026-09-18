import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class ResumeDocument extends Document {
  render() {
    return (
      <Html lang="ko-KR">
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="풀스택 개발자 정성락의 이력서 페이지입니다." />
          <meta
            name="keywords"
            content="개발자, 풀스택, 프론트엔드, 백엔드, Node.js, NestJS, TypeScript, Go, Solidity, React, Next.js, AWS, ElasticSearch, MySQL, Blockchain, Cosmos, IBC, CCTP, Ethereum, Injective, Skip Go, Mintscan, Gno"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Parisienne&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
