import { IProject } from '../component/project/IProject';

const WHERE = {
  COSMOSLABS: 'CosmosLabs Korea',
  STAMPER: '스탬퍼',
  YANOLJA: '야놀자',
  GABIA: '가비아',
};

const clkSkipGo: IProject.Item = {
  title: 'Skip Go CCTP v2 크로스체인 브릿지 개발 및 운영',
  startedAt: '2026-06',
  where: WHERE.COSMOSLABS,
  descriptions: [
    { content: 'CCTP v2 브릿지 전체 플로우(burn → relay → mint → forward) 설계 및 컨트랙트·백엔드 개발 리드' },
    {
      content: 'EVM ↔ Cosmos USDC 브릿지 컨트랙트 개발 (Solidity / Foundry) — Relayer, Forwarder Factory, 멀티홉 Transit 컨트랙트',
    },
    { content: '릴레이 PoC·E2E 검증 CLI 및 백엔드(solve, relayer) CCTP v2 처리·모니터링 개발 (Go)' },
    { content: 'Injective EVM ICS20(IBC transfer) Precompile 기여 (Go)' },
    { content: 'Skip Go API 스로틀링·라우팅 정책·RPC 엔드포인트 운영' },
  ],
};

const clkVerifyApi: IProject.Item = {
  title: 'EVM 컨트랙트 검증 API 및 Explorer 운영',
  startedAt: '2026-06',
  where: WHERE.COSMOSLABS,
  descriptions: [
    { content: 'Etherscan 스타일 검증 API 개발 및 검증 우회 취약점 수정 (NestJS)' },
    { content: 'Mintscan / Kavascan 이관 및 AWS SSO 전환' },
  ],
};

const stamperSkipSolve: IProject.Item = {
  title: 'Skip Go 백엔드(solve) 기여',
  startedAt: '2026-03',
  endedAt: '2026-05',
  where: WHERE.STAMPER,
  descriptions: [
    { content: 'EVM → Cosmos Axelar 라우팅 및 메시지 빌더 개선, gRPC 에러 코드 정리 (Go)' },
    { content: 'Osmosis 등 체인 gRPC 엔드포인트 장애 대응' },
  ],
};

const stamperGno: IProject.Item = {
  title: 'Gno 기반 예측 시장(Prediction Market) 개발',
  startedAt: '2025-03',
  endedAt: '2026-05',
  where: WHERE.STAMPER,
  descriptions: [{ content: 'Gno 스마트 컨트랙트 기반 예측 시장 서비스 설계 및 개발' }],
};

const stamperEthStaking: IProject.Item = {
  title: 'Ethereum Staking 서비스 개발',
  startedAt: '2024-10',
  endedAt: '2026-05',
  where: WHERE.STAMPER,
  descriptions: [{ content: 'Ethereum 스테이킹 서비스 백엔드 개발' }],
};

const stamperKavascan: IProject.Item = {
  title: 'Kavascan (Kava EVM Block Explorer) 개발',
  startedAt: '2023-09',
  endedAt: '2024-07',
  where: WHERE.STAMPER,
  descriptions: [
    { content: 'Next.js 기반 Kava EVM Explorer 프론트엔드·백엔드 단독 개발 및 디자인 시스템 적용, 모바일 대응' },
    {
      content: 'Block / Transaction / Address / Token / Contract 상세 페이지 및 Internal Tx, Token Transfer, Top Accounts 구현',
    },
    { content: 'ERC20 / ERC721 토큰·잔고·Holder 수집 및 Proxy Contract 크롤링 cron 개발 (pm2)' },
    { content: 'Sourcify 연동 Contract Verify, Read / Write Contract(지갑 연결) 기능 개발' },
    { content: 'AWS Elastic Beanstalk 배포 및 Kava Testnet Explorer 구축' },
  ],
};

const stamperPublicApi: IProject.Item = {
  title: 'Mintscan Public API 서비스 구축',
  startedAt: '2023-03',
  endedAt: '2024-04',
  where: WHERE.STAMPER,
  descriptions: [
    {
      content: 'NestJS 모노레포(API 서버 / 관리툴 / shared)로 외부 개발자용 온체인 데이터 API 서비스 설계·구축',
    },
    {
      content: '회원가입·이메일 인증·Cosmostation Extension 지갑 로그인, API 토큰 발급 및 크레딧 기반 사용량 제한(CreditGuard) 개발',
    },
    {
      content: 'Account / Validator / Proposal / Statistics / Prices API 및 ElasticSearch 기반 트랜잭션 조회 API 개발',
    },
    { content: 'Protobuf 기반 Tx Builder(Delegate, Authz, Wasm) 및 Broadcast API 개발' },
    { content: 'Docker Blue/Green 무중단 배포, GitHub Actions CI/CD, nginx SSL·slow HTTP DDoS 방어 설정' },
    { content: 'Next.js(MUI, Recoil) 관리툴 및 Try-API 기능이 포함된 API 문서 사이트 개발' },
  ],
};

const stamperCrawler: IProject.Item = {
  title: '온체인 데이터 수집 파이프라인 구축 및 운영',
  startedAt: '2021-10',
  endedAt: '2024-11',
  where: WHERE.STAMPER,
  descriptions: [
    { content: '60+ Cosmos 체인 대상 IBC 트랜잭션·Relayer 통계 수집기 개발 및 누락 트랜잭션 보정 스크립트 개발' },
    {
      content: 'CosmWasm 코드·컨트랙트·State(S3 스트림 처리), CW20 잔고 히스토리, CW721 NFT 수집 및 IPFS 이미지 캐싱(failover) 구현',
    },
    { content: 'EVM 체인(Evmos, Kava, Canto) 트랜잭션·Internal Tx·ERC20·4byte signature 수집기 개발' },
    { content: 'Richlist / Holders / Staking Reward / ICNS·Stargaze Nameservice 등 통계 데이터 수집' },
    { content: 'Messari, Mantra 등 외부 파트너 대상 체인 통계 데이터 추출 스크립트 개발' },
    { content: 'MySQL / PostgreSQL / ElasticSearch 스키마 설계 및 Slack 장애 알림 연동' },
  ],
};

const stamperMintscanApi: IProject.Item = {
  title: 'Mintscan Block Explorer 개발 및 운영',
  startedAt: '2021-10',
  endedAt: '2026-05',
  where: WHERE.STAMPER,
  descriptions: [
    { content: 'Cosmos 생태계 멀티체인 Block Explorer(Mintscan) 백엔드 설계·개발 및 운영' },
    { content: 'NestJS(Fastify) 기반 API 서버를 초기 설계부터 구축, Swagger 문서화 및 Redis 캐시 적용' },
    { content: 'IBC Relayer / IBC 대시보드·토큰 통계, Proposal·Validator 투표, Delegators, Block Consensus API 개발' },
    { content: 'CosmWasm(CW20 / CW721) 코드·컨트랙트·NFT API 및 IPFS 프록시 개발' },
    {
      content: 'EVM 컨트랙트·Internal Tx·ERC20·4byte signature API 및 Web3 프록시 개발 (Evmos, Kava, Canto)',
    },
    { content: 'Richlist / Holders, Assets(v1~v3), Gas Price, Nameservice(ICNS, Stargaze) API 개발' },
    { content: 'Throttler·크롤러 차단 미들웨어, SYN flooding 방어 등 트래픽 보호 로직 개발' },
    { content: 'ICS Consumer 체인 대응 및 60+ Cosmos 체인 온보딩, 2024년 US 리전 이전 및 레거시 정리, SonarQube 도입' },
    { content: 'AWS Elastic Beanstalk 배포 및 CloudWatch 모니터링' },
  ],
};

const yanoljaRestaurant: IProject.Item = {
  title: '야놀자 맛집 줄서기 카테고리 추가',
  startedAt: '2020-11',
  endedAt: '2021-05',
  where: WHERE.YANOLJA,
  descriptions: [
    { content: '야놀자 앱에 맛집 상품 카테고리 추가' },
    { content: '앱내에서 맛집 줄서기 기능 및 쿠폰 사용 기능 추가' },
    { content: '외부 업체와의 데이터 연동 및 협업' },
    { content: '백엔드 API 퍼포먼스 측정 및 개선' },
  ],
};

const yanoljaContents: IProject.Item = {
  title: '야놀자 콘텐츠 제작툴 개발',
  startedAt: '2020-09',
  endedAt: '2020-09',
  where: WHERE.YANOLJA,
  descriptions: [
    { content: '콘텐츠 제작툴 개발을 통해 마케팅에서 콘텐츠 생성 가능하도록 시스템 개발' },
    { content: '야놀자 웹에서 툴에 사용될 모듈 개발 및 발행 자동화' },
  ],
};

const yanoljaSustain: IProject.Item = {
  title: '야놀자 통합웹 유지보수',
  startedAt: '2020-07',
  endedAt: '2020-08',
  where: WHERE.YANOLJA,
  descriptions: [
    { content: '공정위 지적으로 인한 상품 페이지 내 판매의뢰자 정보 노출' },
    { content: '웹 내 이미지 갤러리 내 마우스 우클릭 방지' },
  ],
};

const yanoljaRouletteEvent: IProject.Item = {
  title: '야놀자 놀력 이벤트 페이지 개선',
  startedAt: '2020-06',
  endedAt: '2020-06',
  where: WHERE.YANOLJA,
  descriptions: [
    { content: '2020년 놀력 페이지 개선' },
    { content: '포인트 이외의 경품 응모 기능 추가' },
    { content: '룰렛 개발을 통한 고객 참여 증진 및 경험 증진' },
    { content: '로티 애니메이션 사용을 통한 다이나믹한 콘텐츠 제공' },
  ],
};

const yanoljaKTX: IProject.Item = {
  title: '야놀자 KTX 카테고리 추가',
  startedAt: '2020-04',
  endedAt: '2020-05',
  where: WHERE.YANOLJA,
  descriptions: [
    { content: '야놀자 웹에서 KTX 상품 카테고리 추가' },
    { content: '검색홈 개발 및 검색 기능 구현' },
    { content: '예약내역 페이지 PC 대응' },
  ],
};

const yanoljaGlobalPlace: IProject.Item = {
  title: '야놀자 해외숙소 카테고리 추가',
  startedAt: '2020-01',
  endedAt: '2020-03',
  where: WHERE.YANOLJA,
  descriptions: [
    {
      content: '야놀자 웹에서 해외숙소 상품 카테고리 추가',
    },
    { content: '해외숙소 검색 / 큐레이션 / 기획전 개발' },
  ],
};

const yanoljaNolEvent: IProject.Item = {
  title: '야놀자 놀력 이벤트 개발',
  startedAt: '2019-10',
  endedAt: '2019-12',
  where: WHERE.YANOLJA,
  descriptions: [
    { content: '2020년 놀력 포인트 지급 이벤트 개발' },
    { content: 'QR코드 스캔을 통한 진입 고객에 대해 매일 랜덤 야놀자 포인트 지급' },
  ],
};

const yanoljaExhibition: IProject.Item = {
  title: '신규 기획전 개발',
  startedAt: '2019-08',
  endedAt: '2019-10',
  where: WHERE.YANOLJA,
  descriptions: [
    { content: '기존 기획전 개편을 통한 운영 자율화와 고객 경험 증대' },
    {
      content: '크로스 카테고리 경험 증대를 통한 마케팅 활동 지원',
    },
    {
      content:
        '국내 숙소, 호텔, 펜션, 레저 등, 야놀자에서 제공하는 모든 영역의 상품들을 기획전으로 묶어 표현',
    },
  ],
};

const yanoljaFlight: IProject.Item = {
  title: '항공권 검색 카테고리 추가',
  startedAt: '2019-05',
  endedAt: '2019-08',
  where: WHERE.YANOLJA,
  descriptions: [
    { content: '야놀자 서비스 카테고리에 항공권 검색 기능 추가' },
    {
      content: 'Kayak API를 통한 항공권 검색 시스템 개발',
    },
    {
      content: '사용자 검색 페이지 개발',
    },
  ],
};

const yanoljaMaintain: IProject.Item = {
  title: '레거시 시스템에 대한 유지보수',
  startedAt: '2019-05',
  endedAt: '2019-12',
  where: WHERE.YANOLJA,
  descriptions: [
    { content: 'event, cast, help, member 사이트에 대한 유지보수' },
    {
      content: '레거시 시스템에 대한 ISMS 심사 대응',
    },
    {
      content: '레거시 시스템 셧다운 대응',
    },
  ],
};

const gabiaSMS: IProject.Item = {
  title: 'SMS 호스팅 서비스 개편 및 유지보수',
  startedAt: '2018-05',
  endedAt: '2019-03',
  where: WHERE.GABIA,
  descriptions: [
    {
      content: '서비스 브랜드화를 위한 기반 시스템 구축',
      descriptions: [
        { content: '메시지 발송 시스템 설계 및 구현' },
        { content: '관리페이지를 제외한 전체 서비스 API 개발' },
      ],
    },
    {
      content: 'Backend, Frontend 분리 작업 및 VueJS(NuxtJS) 도입',
      descriptions: [{ content: 'Frontend 프로젝트 설정 및 로그인 관련 페이지 개발' }],
    },
    {
      content: 'Gitlab Runner를 이용한 빌드 및 배포 자동화',
    },
    {
      content: '개편 후 메시지 발송 시스템 및 호스팅 서비스 유지보수',
      descriptions: [
        { content: '서비스 관리를 위한 내부 인트라넷 관리 사이트 개발' },
        { content: '메시지 벤더별 발송 비율 및 발송 건수 조절 시스템 개발' },
      ],
    },
  ],
};

const gabiaMessageSending: IProject.Item = {
  title: '사내 메시지 발송 시스템 통합 개발',
  startedAt: '2018-02',
  endedAt: '2018-04',
  where: WHERE.GABIA,
  descriptions: [
    {
      content: '각 서비스별 고객에게 발송되는 문자 발송 시스템 통합',
    },
    {
      content: '알림톡 발송 시스템 개발 및 메시지 발송 통합',
    },
  ],
};

const gabiaSMSSolution: IProject.Item = {
  title: '하이웍스 SMS 솔루션 개발 및 SMS호스팅 유지보수',
  startedAt: '2016-03',
  endedAt: '2018-01',
  where: WHERE.GABIA,
  descriptions: [
    {
      content: '가비아 하이웍스 솔루션 내 SMS 솔루션 개발',
    },
    {
      content: '하이웍스용 메시지 발송 시스템 구축',
    },
    {
      content: '알림톡 발송 서비스 개발',
    },
    {
      content: 'SMS 호스팅 서비스 유지보수',
    },
  ],
};

const gabiaWebCombine: IProject.Item = {
  title: '가비아 사이트 및 통합 시스템 유지보수',
  startedAt: '2014-07',
  endedAt: '2016-02',
  where: WHERE.GABIA,
  descriptions: [
    {
      content: '가비아 사이트 및 통합 API시스템 유지보수',
    },
    {
      content: '백오피스 유지보수 업무',
    },
    {
      content: '백오피스 GoogleOTP 도입',
    },
  ],
};

const gabiaWeb2ndImprove: IProject.Item = {
  title: 'WWW 2차 개편',
  startedAt: '2014-06',
  endedAt: '2014-07',
  where: WHERE.GABIA,
  descriptions: [
    {
      content: '가비아 사이트들 통합 API 시스템 적용',
    },
    {
      content: '백오피스 시스템에 통합 API 시스템 적용',
    },
  ],
};

const gabiaAPI: IProject.Item = {
  title: '사내 통합 API 개발',
  startedAt: '2013-12',
  endedAt: '2014-05',
  where: WHERE.GABIA,
  descriptions: [
    {
      content: '전사 서비스 공통으로 사용하는 통합 API에 대한 기능 구현',
    },
  ],
};

const gabiaCustomer: IProject.Item = {
  title: '고객센터 개편',
  startedAt: '2013-11',
  endedAt: '2013-12',
  where: WHERE.GABIA,
  descriptions: [
    {
      content: '가비아 고객센터 Codeigniter 프레임워크 도입',
    },
  ],
};

const gabiaGAPI: IProject.Item = {
  title: '통합 API 시스템 구축 및 도입',
  startedAt: '2013-09',
  endedAt: '2013-10',
  where: WHERE.GABIA,
  descriptions: [
    {
      content: 'OAuth를 통한 통신 인증 프로세스 개발',
    },
    {
      content: '내부 서비스용 공통 API 시스템 구축',
    },
    {
      content: 'API 시스템 설계, OAuth 인증 개발, API 개발 컨벤션 제작',
    },
  ],
};

const gabiaWebImprove: IProject.Item = {
  title: 'WWW 개편',
  startedAt: '2013-01',
  endedAt: '2013-08',
  where: WHERE.GABIA,
  descriptions: [
    {
      content: '가비아 메인 사이트 개편 작업',
    },
    {
      content: 'CodeIgniter 프레임워크 도입',
      descriptions: [{ content: 'CodeIgniter 내부 사용 규칙 제작' }],
    },
    {
      content: '자동 결제 시스템 개발 및 도입',
    },
  ],
};

const gabiaDevOps: IProject.Item = {
  title: '통합 개발 시스템 구축',
  startedAt: '2011-07',
  endedAt: '2012-12',
  where: WHERE.GABIA,
  descriptions: [
    {
      content: 'Redmine을 통한 업무 흐름 파악 및 이슈 추적 가능하도록 도입',
    },
    {
      content: 'SVN을 도입하여 소스 저장소 통합 및 버전관리',
    },
    {
      content: 'Jenkins, Sonar를 이용한 일일 코드 분석 및 메트릭 추출',
    },
    {
      content: '주간 업무보고 자동 추출 시스템 개발',
      descriptions: [{ content: 'Redmine 이슈를 기반으로 한 주간업무보고 자동화 시스템 개발' }],
    },
    {
      content: '개발자 포털을 만들어 이를 통한 전체 개발 프로세스 컨트롤 기능 개발',
    },
  ],
};

const project: IProject.Payload = {
  disable: false,
  list: [
    clkSkipGo,
    clkVerifyApi,
    stamperSkipSolve,
    stamperGno,
    stamperEthStaking,
    stamperKavascan,
    stamperPublicApi,
    stamperCrawler,
    stamperMintscanApi,
    yanoljaRestaurant,
    yanoljaContents,
    yanoljaSustain,
    yanoljaRouletteEvent,
    yanoljaKTX,
    yanoljaGlobalPlace,
    yanoljaNolEvent,
    yanoljaExhibition,
    yanoljaFlight,
    yanoljaMaintain,
    gabiaSMS,
    gabiaMessageSending,
    gabiaSMSSolution,
    gabiaWebCombine,
    gabiaWeb2ndImprove,
    gabiaAPI,
    gabiaCustomer,
    gabiaGAPI,
    gabiaWebImprove,
    gabiaDevOps,
  ],
};

export default project;
