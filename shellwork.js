/* eslint-disable no-console */
const chalk = require('chalk');
const shelljs = require('shelljs');
const path = require('path');
const { homepage } = require('./package.json');

const OUT_DIR = path.join(__dirname, 'out');
const DOCS_DIR = path.join(__dirname, 'docs');

/**
 * * `next build`(output: export) 결과물인 out/ 을 GitHub Pages 소스인 docs/ 로 옮긴다.
 */
function moveOutToDocs() {
  shelljs.rm('-rf', DOCS_DIR);
  shelljs.mv(OUT_DIR, DOCS_DIR);
  console.log(chalk.yellow('shellwork: move out/ -> docs/ done.'));
}

/**
 * * judge `CNAME` file
 */
function judgeCnameCreation() {
  if (!homepage) {
    console.error('shellwork: The homepage field in package.json is required.');
    return;
  }

  // ! 아래 정규표현식에 걸리면 github pages 도메인으로 간주하고 CNAME 을 생성하지 않는다.
  const githubIoRegex = /.+\.github\.io\/.+/;

  if (githubIoRegex.test(homepage)) {
    console.log(
      chalk.yellow(
        `shellwork: The homepage field in package.json is '${homepage}'. Consider github pages hosting and don't generate docs/CNAME file.`,
      ),
    );
    return;
  }

  // * 위 정규표현식에 걸리지 않았을 경우 Custom Domain 으로 간주하고 docs/CNAME 을 생성한다.
  const url = new URL(homepage);

  console.log(
    chalk.yellow(
      `shellwork: The homepage field in package.json seems to have a custom domain. Create the '${url.hostname}' hostname in docs/CNAME.`,
    ),
  );

  shelljs.echo(url.hostname).to(path.join(DOCS_DIR, 'CNAME'));
}

/**
 * * create docs/.nojekyll empty file
 */
function createNojekyll() {
  shelljs.touch(path.join(DOCS_DIR, '.nojekyll'));
  console.log(chalk.yellow('shellwork: create docs/.nojekyll done.'));
}

moveOutToDocs();
createNojekyll();
judgeCnameCreation();
