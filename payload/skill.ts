import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'PHP',
      level: 3,
    },
    {
      title: 'NodeJS',
      level: 2,
    },
    {
      title: 'TypeScript',
      level: 2,
    },
    {
      title: 'GraphQL',
      level: 1,
    },
    {
      title: 'Apache',
      level: 1,
    },
  ],
};

const framework: ISkill.Skill = {
  category: 'Framework',
  items: [
    {
      title: 'Codeigniter',
      level: 3,
    },
    {
      title: 'Express',
      level: 1,
    },
    {
      title: 'NestJS',
      level: 1,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MySQL',
      level: 2,
    },
    {
      title: 'Oracle',
      level: 1,
    },
    {
      title: 'Redis',
      level: 1,
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'Javascript',
      level: 2,
    },
    {
      title: 'jQuery',
      level: 2,
    },
    {
      title: 'TypeScript',
      level: 2,
    },
    {
      title: 'Next.js',
      level: 1,
    },
    {
      title: 'Nuxt.js',
      level: 1,
    },
    {
      title: 'Vue.js',
      level: 1,
    },
    {
      title: 'HTML/CSS',
      level: 2,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Linux',
    },
    {
      title: 'Vim',
    },
    {
      title: 'VSCode',
    },
    {
      title: 'Jira',
    },
    {
      title: 'Confluence',
    },
    {
      title: 'GitLab',
    },
    {
      title: 'Git / Github',
    },
    {
      title: 'Docker',
    },
    {
      title: 'Flutter',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, framework, database, frontend, etc],
  tooltip: '1: 기초 수준\n2: 중급 수준\n3: 고급 수준',
};

export default skill;
