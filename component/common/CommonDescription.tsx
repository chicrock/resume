import { CSSProperties, Fragment, PropsWithChildren } from 'react';

import { HrefTargetBlank } from '.';
import { IRow } from './IRow';

/** Description Recusion Generator */
export function CommonDescription({
  descriptions,
  option,
}: PropsWithChildren<{ descriptions: IRow.Description[]; option?: { padding?: boolean } }>) {
  return (
    <>
      {descriptions ? (
        <ul className={option?.padding ? 'pt-2' : ''}>
          {descriptions.map((description, descIndex) => {
            return (
              <Fragment key={descIndex.toString()}>
                <Description description={description} />
                {description.descriptions ? (
                  <DescriptionRecursion descriptions={description.descriptions} />
                ) : (
                  ''
                )}
              </Fragment>
            );
          })}
        </ul>
      ) : (
        ''
      )}
    </>
  );
}

// ul 태그 depth 표현을 위한 재귀
function DescriptionRecursion({
  descriptions,
}: PropsWithChildren<{ descriptions: IRow.Description[] }>) {
  return (
    <ul>
      {descriptions.map((description, index) => {
        return (
          <Fragment key={index.toString()}>
            <Description description={description} />
            {description.descriptions ? (
              <DescriptionRecursion descriptions={description.descriptions} />
            ) : (
              ''
            )}
          </Fragment>
        );
      })}
    </ul>
  );
}

function Description({ description }: PropsWithChildren<{ description: IRow.Description }>) {
  const { content, href, postImage, postHref, weight } = description;

  const component = (() => {
    if (href && postImage) {
      return (
        <li style={getFontWeight(weight)}>
          <HrefTargetBlank url={href} text={content} /> <img src={postImage} alt={postImage} />
        </li>
      );
    }
    if (href) {
      return (
        <li style={getFontWeight(weight)}>
          <HrefTargetBlank url={href} text={content} />
        </li>
      );
    }
    if (postHref && postImage) {
      return (
        <li style={getFontWeight(weight)}>
          {content} <HrefTargetBlank url={postHref} text={postHref} />{' '}
          <img src={postImage} alt={postImage} />
        </li>
      );
    }
    if (postHref) {
      return (
        <li style={getFontWeight(weight)}>
          {content} <HrefTargetBlank url={postHref} text={postHref} />
        </li>
      );
    }
    if (postImage) {
      return (
        <li style={getFontWeight(weight)}>
          {content} <img src={postImage} alt={postImage} />
        </li>
      );
    }
    return <li style={getFontWeight(weight)}>{content}</li>;
  })();

  return component;
}

function getFontWeight(weight?: IRow.Description['weight']): CSSProperties {
  if (!weight) {
    // style 에 fontWeight 범벅 되는것을 방지
    return {};
  }
  return {
    fontWeight: fontWeight[weight || 'DEFAULT'],
  };
}

// Noto Sans KR Weights: 300, 400, 500, 700
const fontWeight: Record<IRow.FontWeightType, number> = {
  DEFAULT: 300,
  LIGHT: 300,
  REGULAR: 300,
  MEDIUM: 500,
  // BOLD: 700,
  BOLD: 500,
};
