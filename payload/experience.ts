import { IExperience } from '../component/experience/IExperience';

const cosmosLabsKorea: IExperience.Item = {
  title: 'CosmosLabs Korea',
  position: 'Backend 팀 / 팀장',
  startedAt: '2026-06',
  descriptions: [
    'Cosmos 생태계 인프라 및 Skip Go 크로스체인 브릿지를 개발하는 Cosmos Labs 의 한국 조직',
    'Skip Go CCTP v2 크로스체인 브릿지 전체 플로우 설계 및 개발 리드 — 컨트랙트(Solidity), 백엔드(Go)',
    'Injective EVM ICS20 Precompile 개발 지원',
    'EVM 컨트랙트 검증 API 개발 및 Mintscan 운영',
  ],
  skillKeywords: [
    'Go',
    'Solidity',
    'Foundry',
    'TypeScript',
    'NestJS',
    'Cosmos SDK',
    'IBC',
    'CCTP',
    'AWS',
  ],
};

const stamper: IExperience.Item = {
  title: '스탬퍼',
  position: 'Backend 서비스 개발팀 / 팀장',
  startedAt: '2021-07',
  endedAt: '2026-05',
  descriptions: [
    '블록체인 검증인(Validator) 노드 운영 및 Block Explorer 서비스를 제공하는 회사',
    'Backend 서비스 개발팀 리딩 및 서비스 아키텍처 설계',
    'Cosmos 생태계 블록체인 검증인 운영',
    'Mintscan Block Explorer 개발 및 운영 (60+ Cosmos 체인)',
    'Kavascan (Kava EVM Block Explorer) 개발 및 운영',
    'Mintscan Public API 서비스 구축 및 운영',
    '온체인 데이터 수집·가공 파이프라인 구축 및 운영',
    'Ethereum Staking 서비스 개발',
    'Gno 기반 예측 시장(Prediction Market) 개발',
    'ISMS 및 ISO 보안 인증 심사 대응',
  ],
  skillKeywords: [
    'TypeScript',
    'Node.js',
    'NestJS',
    'React',
    'Next.js',
    'AWS',
    'ElasticSearch',
    'MySQL',
    'PostgreSQL',
    'Redis',
    'Docker',
    'Solidity',
    'Gno',
  ],
};

const yanolja: IExperience.Item = {
  title: '야놀자',
  position: 'CX 개발실 / 웹개발자',
  startedAt: '2019-05',
  endedAt: '2021-07',
  descriptions: [
    '국내/해외 숙박, 레저 예약 등 여가 서비스를 제공하는 회사',
    'KTX / 항공권 / 해외숙소 / 맛집 줄서기 등 신규 카테고리 웹 개발',
    '놀력 이벤트 및 신규 기획전 웹 개발',
    '마케팅 콘텐츠 제작툴 개발',
    '레거시 시스템 유지보수 및 ISMS 심사 대응',
  ],
  skillKeywords: [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'MobX',
    'PHP',
    'AWS Beanstalk',
    'CloudWatch',
  ],
};

const gabia: IExperience.Item = {
  title: '가비아',
  position: '웹 개발자',
  startedAt: '2011-07',
  endedAt: '2019-05',
  descriptions: [
    '도메인, 인터넷 웹호스팅 회사',
    '사내 통합 개발 시스템(Redmine, SVN, Jenkins, Sonar) 구축',
    'WWW 웹페이지 개편 및 CodeIgniter 프레임워크 도입',
    'OAuth 기반 사내 통합 API 시스템 설계 및 구축',
    'SMS, 알림톡 등 통합 메시지 발송 시스템 구축 및 SMS 호스팅 서비스 운영',
    'ISMS 심사 대응',
  ],
  skillKeywords: [
    'PHP',
    'CodeIgniter',
    'JavaScript',
    'jQuery',
    'Vue.js',
    'Nuxt.js',
    'Apache',
    'MySQL',
    'Oracle',
    'RESTful API',
  ],
};

const experience: IExperience.Payload = {
  disable: false,
  list: [cosmosLabsKorea, stamper, yanolja, gabia],
};

export default experience;
