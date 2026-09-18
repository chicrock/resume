import { IGlobal } from '../component/common/IGlobal';
import favicon from '../asset/favicon.ico';
import profileImage from '../asset/profile.jpg';
import { homepage } from '../package.json';

const title = '정성락 | Full-stack Developer';
const description = "15년차 풀스택 개발자 정성락의 이력서입니다. 웹 프론트엔드부터 백엔드, 블록체인 인프라와 크로스체인 브릿지까지 개발합니다.";

// OpenGraph 이미지는 절대 URL 이어야 미리보기가 정상 노출된다.
const ogImageUrl = new URL(profileImage.src, homepage).toString();

export const _global: IGlobal.Payload = {
  favicon: favicon.src,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      url: homepage,
      images: [
        {
          url: ogImageUrl,
          width: profileImage.width,
          height: profileImage.height,
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
