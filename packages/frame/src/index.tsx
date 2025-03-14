import PropTypes from "prop-types";
import styled, { css } from "styled-components";

export interface FrameProps {
  ratio?: [number, number];
  position?: string;
}

const ratioStyles = css`
  aspect-ratio: var(--n) / var(--d);
  @supports not (aspect-ratio: 1/1) {
    padding-block-end: calc(var(--d) / var(--n) * 100%);
  }
`;

export const Frame = styled.div.attrs<FrameProps>(() => {
  return {
    "data-bedrock-frame": "",
  };
})<FrameProps>`
  --n: ${(props) =>
    props.ratio && props.ratio[0] && Number.isInteger(props.ratio[0])
      ? props.ratio[0]
      : 1};

  --d: ${(props) =>
    props.ratio && props.ratio[1] && Number.isInteger(props.ratio[1])
      ? props.ratio[1]
      : 1};

  box-sizing: border-box;
  display: block;
  inline-size: 100%;
  position: relative;

  ${(props) => props.ratio && ratioStyles}

  > * {
    overflow: hidden;
    position: absolute;

    inset-block-start: 0;
    inset-block-end: 0;
    inset-inline-start: 0;
    inset-inline-end: 0;

    inset-block: 0;
    inset-inline: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  > :is(img, video) {
    inline-size: 100%;
    block-size: 100%;
    size: 100%;

    object-fit: cover;
    object-position: ${(props) =>
      typeof props.position === "string" ? props.position : "50%"};
  }
`;

Frame.displayName = "Frame";

type TwoNumbers = (props: FrameProps, propName: string) => Error | undefined;

const twoNumbers: TwoNumbers = ({ ratio }, propName) => {
  if (ratio === undefined) return undefined;
  if (
    !Array.isArray(ratio) ||
    ratio.length !== 2 ||
    !ratio.every(Number.isInteger)
  ) {
    console.error(`${propName} needs to be an array of two numbers`);
  }
  return undefined;
};

Frame.propTypes = {
  //It's valid propType but can't get the type of Validator<[number, number]> to work
  ratio: twoNumbers as unknown as React.Validator<[number, number]>,
  position: PropTypes.string,
};
