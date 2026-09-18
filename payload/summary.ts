import { ISummary } from '../component/resume/ISummary';

const summary: ISummary.Payload = {
  headline: 'Full-stack Engineer',
  tagline: '블록체인 인프라부터 웹 프론트엔드까지, 서비스 전체를 만드는 15년차 풀스택 개발자',
  intro: [
    '가비아에서 사내 통합 API·메시지 시스템을, 야놀자에서 여행 플랫폼 웹을 만들었고, 2021년부터는 Cosmos 생태계에서 Block Explorer(Mintscan) API 서버와 온체인 데이터 파이프라인을 초기 설계부터 구축·운영해 왔습니다.',
    '현재 CosmosLabs Korea 에서 Skip Go 서비스 개발을 리드하고 있습니다. 서비스가 오래 살아남도록 만드는 운영 가능한 설계를 중요하게 생각합니다.',
  ],
  stats: [
    { value: '15+', label: '년 경력' },
    { value: '5', label: '년 블록체인' },
    { value: '60+', label: 'Cosmos 체인 온보딩' },
    { value: 'Full-stack', label: 'Web · Backend · Smart Contract' },
  ],
  featured: [
    {
      title: 'Skip Go CCTP v2 크로스체인 브릿지',
      period: '2026 ~',
      where: 'CosmosLabs Korea',
      summary:
        'EVM ↔ Cosmos USDC 브릿지의 burn → relay → mint → forward 전체 플로우를 설계하고 컨트랙트·백엔드 개발을 리드.',
      tags: ['Solidity', 'Foundry', 'Go', 'CCTP', 'IBC'],
      highlight: true,
    },
    {
      title: 'Mintscan Block Explorer',
      period: '2021 ~ 2026',
      where: '스탬퍼',
      summary:
        'Cosmos 생태계 대표 Block Explorer 개발 및 운영. 데이터 수집부터 API·화면 기능까지 IBC·CosmWasm·EVM·거버넌스 탐색 기능을 만들고 60+ 체인을 온보딩.',
      tags: ['NestJS', 'Redis', 'MySQL', 'ElasticSearch', 'AWS'],
    },
    {
      title: '온체인 데이터 파이프라인',
      period: '2021 ~ 2024',
      where: '스탬퍼',
      summary:
        'IBC · CosmWasm State · EVM · NFT 데이터 수집기와 파트너용 통계 추출 스크립트를 개발하고 운영.',
      tags: ['Node.js', 'PostgreSQL', 'ElasticSearch', 'S3'],
    },
    {
      title: 'Mintscan Public API',
      period: '2023 ~ 2024',
      where: '스탬퍼',
      summary:
        '인증 · 크레딧 과금 · Tx Builder 를 갖춘 외부 개발자용 API 서비스를 모노레포로 구축하고 Blue/Green 무중단 배포 도입.',
      tags: ['NestJS', 'Docker', 'GitHub Actions', 'Nginx'],
    },
    {
      title: 'Kavascan',
      period: '2023 ~ 2024',
      where: '스탬퍼',
      summary: 'Kava EVM Block Explorer 를 화면(Next.js)부터 백엔드·수집 cron 까지 단독으로 개발. Sourcify 연동 컨트랙트 검증 지원.',
      tags: ['Next.js', 'viem', 'ElasticSearch'],
    },
    {
      title: '야놀자 신규 카테고리 웹 개발',
      period: '2019 ~ 2021',
      where: '야놀자',
      summary:
        'KTX · 항공권 · 해외숙소 · 맛집 줄서기 등 신규 상품 카테고리와 기획전·놀력 이벤트 웹을 개발. 외부 업체 데이터 연동 및 API 성능 개선.',
      tags: ['React', 'Next.js', 'MobX', 'TypeScript'],
    },
    {
      title: '사내 통합 API · 메시지 시스템',
      period: '2013 ~ 2019',
      where: '가비아',
      summary: 'OAuth 기반 전사 통합 API 시스템과 SMS · 알림톡 통합 발송 시스템을 설계·구축하고 SMS 호스팅 서비스를 운영.',
      tags: ['PHP', 'CodeIgniter', 'MySQL'],
    },
  ],
};

export default summary;
