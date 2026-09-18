import Payload from '../../payload';
import { IExperience } from '../experience/IExperience';
import { ISummary } from './ISummary';
import styles from './Resume.module.css';
import {
  Chips,
  EducationSection,
  Footer,
  Hero,
  Page,
  Section,
  SkillSection,
  duration,
  formatRange,
} from './shared';

const { summary, experience } = Payload;

export function Summary() {
  return (
    <Page>
      <Hero />
      <Stats stats={summary.stats} />

      <Section title="소개">
        <div className={styles.intro}>
          {summary.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Section>

      <Section title="대표 프로젝트" link={{ href: '/detail/#project', text: '전체 프로젝트 보기 →' }}>
        <div className={styles.grid}>
          {summary.featured.map((item) => (
            <FeaturedCard key={item.title} item={item} />
          ))}
        </div>
      </Section>

      <Section title="경력" link={{ href: '/detail/#experience', text: '상세 이력 보기 →' }}>
        <div className={styles.timeline}>
          {experience.list.map((job) => (
            <Job key={job.title} job={job} />
          ))}
        </div>
      </Section>

      <SkillSection />
      <EducationSection />
      <Footer />
    </Page>
  );
}

function Stats({ stats }: { stats: ISummary.Stat[] }) {
  return (
    <div className={styles.stats}>
      {stats.map((s) => (
        <div key={s.label} className={styles.stat}>
          <span className={styles.statValue}>{s.value}</span>
          <span className={styles.statLabel}>{s.label}</span>
        </div>
      ))}
    </div>
  );
}

function FeaturedCard({ item }: { item: ISummary.Featured }) {
  return (
    <article className={`${styles.card} ${item.highlight ? styles.cardHighlight : ''}`}>
      <div className={styles.cardMeta}>
        {item.where} · {item.period}
      </div>
      <h3 className={styles.cardTitle}>{item.title}</h3>
      <p className={styles.cardSummary}>{item.summary}</p>
      <Chips items={item.tags} />
    </article>
  );
}

function Job({ job }: { job: IExperience.Item }) {
  // 첫 줄은 회사 소개라 요약에서는 제외하고 핵심 3개만
  const highlights = job.descriptions.slice(1, 4);

  return (
    <div className={`${styles.job} ${job.endedAt ? '' : styles.jobCurrent}`}>
      <div className={styles.jobHead}>
        <h3 className={styles.jobTitle}>{job.title}</h3>
        <span className={styles.jobPosition}>{job.position}</span>
        <span className={styles.jobPeriod}>
          {formatRange(job.startedAt, job.endedAt)} · {duration(job.startedAt, job.endedAt)}
        </span>
      </div>
      <ul className={styles.jobList}>
        {highlights.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
      {job.skillKeywords ? <Chips items={job.skillKeywords} /> : null}
    </div>
  );
}
