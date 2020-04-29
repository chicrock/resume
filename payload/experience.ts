import { IExperience } from '../component/experience/IExperience';

const yanolja = {
  title: '야놀자',
  position: 'CX 개발실 / 웹개발자',
  startedAt: '2019-05',
  descriptions: [
    '국내/해외 숙박, 레저 예약 등 여가 서비스를 제공하는 회사',
    'KTX 웹 개발',
    '해외숙소 웹 개발',
    '놀력 이벤트 개발',
    '신규 기획전 웹 개발',
    '항공 카테고리 개발',
    'ISMS 심사 대응',
  ],
  skillKeywords: [
    'JavaScript',
    'TypeScript',
    'RectJS',
    'NextJS',
    'MobX',
    'Beanstalk',
    'CloudWatch',
    'PHP',
  ],
};

const gabia = {
  title: '가비아',
  position: '웹 개발자',
  startedAt: '2011-07',
  endedAt: '2019-05',
  descriptions: [
    '도메인, 인터넷 웹호스팅 회사',
    '사내 통합 개발 시스템 구축',
    'WWW 웹페이지 개편',
    '통합 API 시스템 구축',
    'SMS, 알림톡 등의 통합 메시시 시스템 구축 및 호스팅',
    'ISMS 심사 대응',
  ],
  skillKeywords: [
    'JavaScript',
    'JQuery',
    'VueJS',
    'NuxtJS',
    'Apache',
    'MySQL',
    'Oracle',
    'PHP',
    'CodeIgniter',
    'RESTful API',
  ],
};

const experience: IExperience.Payload = {
  disable: false,
  list: [yanolja, gabia],
};

export default experience;
