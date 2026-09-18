import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Backend',
  items: [
    { title: 'Node.js' },
    { title: 'TypeScript' },
    { title: 'NestJS' },
    { title: 'Go' },
    { title: 'Express' },
    { title: 'GraphQL' },
    { title: 'PHP' },
    { title: 'CodeIgniter' },
    { title: 'Apache' },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    { title: 'MySQL' },
    { title: 'PostgreSQL' },
    { title: 'ElasticSearch' },
    { title: 'Redis' },
    { title: 'Oracle' },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Frontend',
  items: [
    { title: 'JavaScript' },
    { title: 'TypeScript' },
    { title: 'React' },
    { title: 'Next.js' },
    { title: 'HTML/CSS' },
    { title: 'MUI' },
    { title: 'Vue.js' },
    { title: 'Nuxt.js' },
    { title: 'jQuery' },
  ],
};

const web3: ISkill.Skill = {
  category: 'Web3',
  items: [
    { title: 'Cosmos SDK' },
    { title: 'IBC / CCTP' },
    { title: 'Solidity' },
    { title: 'Foundry' },
    { title: 'CosmWasm' },
    { title: 'Gno' },
  ],
};

const infra: ISkill.Skill = {
  category: 'Infra / DevOps',
  items: [
    { title: 'AWS' },
    { title: 'Docker' },
    { title: 'Linux' },
    { title: 'Nginx' },
    { title: 'GitHub Actions' },
    { title: 'GitLab CI' },
    { title: 'Jenkins' },
    { title: 'Prometheus / Grafana' },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    { title: 'Git / GitHub' },
    { title: 'Jira' },
    { title: 'Confluence' },
    { title: 'VSCode' },
    { title: 'Vim' },
    { title: 'Flutter' },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, frontend, web3, infra, etc],
};

export default skill;
