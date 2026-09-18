import Payload from '../../payload';
import { IRow } from '../common/IRow';
import { IExperience } from '../experience/IExperience';
import { IProject } from '../project/IProject';
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

const { experience, project } = Payload;

/** 상세형: 모든 경력·프로젝트를 리스트로 나열 */
export function Detail() {
  return (
    <Page>
      <Hero />

      <Section id="experience" title="경력">
        {experience.list.map((job) => (
          <Job key={job.title} job={job} />
        ))}
      </Section>

      <Section id="project" title="프로젝트">
        {project.list.map((item) => (
          <ProjectRow key={`${item.title}-${item.startedAt}`} item={item} />
        ))}
      </Section>

      <SkillSection />
      <EducationSection />
      <Footer />
    </Page>
  );
}

function Job({ job }: { job: IExperience.Item }) {
  const [company, ...tasks] = job.descriptions;
  return (
    <div className={styles.row}>
      <div className={styles.rowAside}>
        <div className={styles.rowPeriod}>{formatRange(job.startedAt, job.endedAt)}</div>
        <div className={styles.rowBadges}>
          {job.endedAt ? null : <span className={styles.badgeAccent}>재직 중</span>}
          <span className={styles.badge}>{duration(job.startedAt, job.endedAt)}</span>
        </div>
      </div>
      <div className={styles.rowBody}>
        <h3 className={styles.rowTitle}>{job.title}</h3>
        <div className={styles.rowSub}>
          {job.position} · {company}
        </div>
        <ul className={styles.rowList}>
          {tasks.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
        {job.skillKeywords ? <Chips items={job.skillKeywords} className={styles.rowChips} /> : null}
      </div>
    </div>
  );
}

function ProjectRow({ item }: { item: IProject.Item }) {
  return (
    <div className={styles.row}>
      <div className={styles.rowAside}>
        <div className={styles.rowPeriod}>{formatRange(item.startedAt, item.endedAt)}</div>
      </div>
      <div className={styles.rowBody}>
        <h3 className={styles.rowTitle}>{item.title}</h3>
        <div className={styles.rowSub}>{item.where}</div>
        <Descriptions items={item.descriptions} />
      </div>
    </div>
  );
}

// 중첩 descriptions 를 <ul> depth 로 표현
function Descriptions({ items }: { items: IRow.Description[] }) {
  return (
    <ul className={styles.rowList}>
      {items.map((d) => (
        <li key={d.content}>
          {d.href ? (
            <a href={d.href} target="_blank" rel="noreferrer noopener">
              {d.content}
            </a>
          ) : (
            d.content
          )}
          {d.descriptions ? <Descriptions items={d.descriptions} /> : null}
        </li>
      ))}
    </ul>
  );
}
