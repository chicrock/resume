import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '세종대학교',
      subTitle: '디지털컨텐츠 전공 학사 졸업',
      startedAt: '2006-03',
      endedAt: '2012-02',
    },
    {
      title: '안동고등학교',
      subTitle: '이공계 졸업',
      startedAt: '2003-03',
      endedAt: '2006-02',
    },
  ],
};

export default education;
