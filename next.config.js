/* eslint-disable */
const { homepage } = require('./package.json');

// homepage 가 서브 경로(예: github.io/resume)면 basePath 로 사용한다.
const basePath = (() => {
  if (process.env.NODE_ENV !== 'production' || !homepage) return '';
  try {
    const { pathname } = new URL(homepage);
    return pathname === '/' ? '' : pathname.replace(/\/$/, '');
  } catch {
    return '';
  }
})();

/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  basePath,
  // 정적 export 는 이미지 최적화 서버가 없다.
  images: { unoptimized: true },
  reactStrictMode: true,
  // GitHub Pages 에서 /detail 같은 서브 경로를 디렉터리(index.html)로 서빙하기 위함
  trailingSlash: true,
};
