import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { Detail } from '../component/resume/Detail';
import { ViewSwitch } from '../component/resume/ViewSwitch';
import Payload from '../payload';

export default function DetailPage() {
  return (
    <>
      { }
      <NextSeo {...Payload._global.seo} title={`${Payload._global.headTitle} · 상세`} />
      <Head>
        <title>{`${Payload._global.headTitle} · 상세`}</title>
        <link rel="shortcut icon" href={Payload._global.favicon} />
      </Head>
      <ViewSwitch current="detail" />
      <Detail />
    </>
  );
}
