import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

export default [
  ...nextVitals,
  ...nextTs,
  {
    ignores: ['.next/**', 'out/**', 'docs/**', 'node_modules/**'],
  },
  {
    rules: {
      // payload 에서 <img> 로 정적 이미지를 그대로 쓴다.
      '@next/next/no-img-element': 'off',
      '@typescript-eslint/no-namespace': 'off',
    },
  },
];
