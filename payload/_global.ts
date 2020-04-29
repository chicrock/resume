import { IGlobal } from '../component/common/IGlobal';
import favicon from '../asset/favicon.ico';
import profileImage from '../asset/profile.jpg';

const title = 'Web Developer';
const description = "Chicrock's Resume";

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: profileImage,
          width: 800,
          height: 600,
          alt: 'profile',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'SungRak',
        lastName: 'Jung',
        username: 'chicrock',
        gender: 'male',
      },
    },
  },
};
