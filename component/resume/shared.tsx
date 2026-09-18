import Link from 'next/link';
import { DateTime } from 'luxon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Payload from '../../payload';
import Util from '../common/Util';
import { IProfile } from '../profile/IProfile';
import styles from './Resume.module.css';

const { profile, summary, skill, education, footer } = Payload;

/** 요약/상세 페이지 공통 레이아웃 */
export function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.page}>
      <div className={styles.container}>{children}</div>
    </div>
  );
}

export function Hero({ tagline }: { tagline?: string }) {
  return (
    <header className={styles.hero}>
      <img className={styles.avatar} src={profile.image} alt={profile.name.title} />
      <div>
        <span className={styles.eyebrow}>{summary.headline}</span>
        <h1 className={styles.name}>
          {profile.name.title}
          {profile.name.small ? <small>{profile.name.small}</small> : null}
        </h1>
        <p className={styles.tagline}>{tagline ?? summary.tagline}</p>
        <div className={styles.contacts}>
          {profile.contact.map((c) => (
            <Contact key={c.title || c.link} contact={c} />
          ))}
        </div>
      </div>
    </header>
  );
}

function Contact({ contact }: { contact: IProfile.Contact }) {
  const inner = (
    <>
      <FontAwesomeIcon icon={contact.icon} />
      {contact.title || contact.link}
    </>
  );
  if (contact.link) {
    return (
      <a className={styles.contact} href={contact.link} target="_blank" rel="noreferrer noopener">
        {inner}
      </a>
    );
  }
  return <span className={styles.contact}>{inner}</span>;
}

export function Section({
  id,
  title,
  link,
  children,
}: {
  id?: string;
  title: string;
  link?: { href: string; text: string };
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.sectionHead}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        {link ? (
          <Link href={link.href} className={styles.sectionLink}>
            {link.text}
          </Link>
        ) : null}
      </div>
      {children}
    </section>
  );
}

export function Chips({ items, className }: { items: string[]; className?: string }) {
  return (
    <div className={`${styles.chips} ${className ?? ''}`}>
      {items.map((item) => (
        <span key={item} className={styles.chip}>
          {item}
        </span>
      ))}
    </div>
  );
}

export function SkillSection() {
  return (
    <Section id="skill" title="기술">
      {skill.skills.map((group) => (
        <div key={group.category} className={styles.skillRow}>
          <div className={styles.skillCategory}>{group.category}</div>
          <Chips items={group.items.map((item) => item.title)} />
        </div>
      ))}
    </Section>
  );
}

export function EducationSection() {
  return (
    <Section id="education" title="학력">
      {education.list.map((edu) => (
        <div key={edu.title} className={styles.edu}>
          <div>
            <strong>{edu.title}</strong> <span className={styles.eduSub}>{edu.subTitle}</span>
          </div>
          <span className={styles.eduSub}>{formatRange(edu.startedAt, edu.endedAt)}</span>
        </div>
      ))}
    </Section>
  );
}

export function Footer() {
  return (
    <footer className={styles.footer}>
      Built with <a href="https://nextjs.org/">Next.js</a> v{footer.nextVersion} ·{' '}
      <a href="https://github.com/uyu423/resume-nextjs">resume-nextjs</a>
    </footer>
  );
}

export function formatRange(startedAt: string, endedAt?: string) {
  const F = Util.LUXON_DATE_FORMAT;
  const from = DateTime.fromFormat(startedAt, F.YYYY_LL).toFormat(F.YYYY_DOT_LL);
  const to = endedAt ? DateTime.fromFormat(endedAt, F.YYYY_LL).toFormat(F.YYYY_DOT_LL) : '현재';
  return `${from} ~ ${to}`;
}

export function duration(startedAt: string, endedAt?: string) {
  const F = Util.LUXON_DATE_FORMAT;
  return Util.getFormattingDuration(
    DateTime.fromFormat(startedAt, F.YYYY_LL),
    endedAt ? DateTime.fromFormat(endedAt, F.YYYY_LL) : undefined,
  );
}
