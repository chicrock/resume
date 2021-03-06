import Document, { Head, Main, NextScript } from 'next/document';

export default class ResumeDocument extends Document {
  render() {
    return (
      <html lang="ko-KR">
        <Head>
          {/* Step 5: Output the styles in the head  */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="웹 개발자 소개 페이지 입니다." />
          <meta
            name="keywords"
            content="웹, 개발자, 프론트엔드, JavaScript, JQuery, VueJS, NuxtJS, Apache, MySQL, Oracle, PHP, CodeIgniter, RESTful API, TypeScript, RectJS, NextJS, MobX, Beanstalk, CloudWatch"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,500,700|Parisienne&display=swap&subset=korean"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Parisienne&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
