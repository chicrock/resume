export declare namespace ISummary {
  /** 요약형 메인 페이지 전용 데이터 */
  export interface Payload {
    /** 이름 아래 직함 */
    headline: string;
    /** 한 줄 소개 */
    tagline: string;
    /** 소개 문단 */
    intro: string[];
    /** 상단 숫자 하이라이트 */
    stats: Stat[];
    /** 대표 프로젝트 */
    featured: Featured[];
  }

  export interface Stat {
    value: string;
    label: string;
  }

  export interface Featured {
    title: string;
    period: string;
    where: string;
    summary: string;
    tags: string[];
    /** 강조 카드 (첫 번째 카드 등) */
    highlight?: boolean;
  }
}
