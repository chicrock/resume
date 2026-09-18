import { IFooter } from '../component/footer/IFooter';
import { version, homepage } from '../package.json';
import { version as nextVersion } from 'next/package.json';

const footer: IFooter.Payload = {
  version,
  github: homepage,
  nextVersion,
};

export default footer;
