import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { Summary } from '../component/resume/Summary';
import { ViewSwitch } from '../component/resume/ViewSwitch';
import Payload from '../payload';

export default function SummaryPage() {
  return (
    <>
      { }
      <NextSeo {...Payload._global.seo} />
      <Head>
        <title>{Payload._global.headTitle}</title>
        <link rel="shortcut icon" href={Payload._global.favicon} />
      </Head>
      <ViewSwitch current="summary" />
      <Summary />
    </>
  );
}
