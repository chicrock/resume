import { faEnvelope, faPhone, faRss } from '@fortawesome/free-solid-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/profile.jpg';

const profile: IProfile.Payload = {
  disable: false,

  image,
  name: {
    title: '정성락',
    small: '(SungRak, Jung)',
  },
  contact: [
    {
      title: 'jungsungrak@gmail.com',
      link: 'mailto:jungsungrak@gmail.com',
      icon: faEnvelope,
    },
    {
      title: '+821089101799',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/chicrock',
      icon: faGithub,
    },
    {
      link: 'https://chicrock.tistory.com/',
      icon: faRss,
    },
  ],
  notice: {
    title: '연락은 이메일로 부탁드립니다 :)',
    icon: faBell,
  },
};

export default profile;
