import Link from 'next/link';
import styles from './ViewSwitch.module.css';

export type ViewMode = 'summary' | 'detail';

/** 요약형(/) ↔ 상세형(/detail/) 페이지 전환 스위치 */
export function ViewSwitch({ current }: { current: ViewMode }) {
  const cls = (mode: ViewMode) => `${styles.item} ${current === mode ? styles.active : ''}`;
  return (
    <div className={styles.wrap}>
      <nav className={styles.switch} aria-label="보기 방식">
        <Link href="/" className={cls('summary')}>
          요약
        </Link>
        <Link href="/detail/" className={cls('detail')}>
          상세
        </Link>
      </nav>
    </div>
  );
}
