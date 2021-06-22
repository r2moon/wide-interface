import styled from "styled-components";

type FlexContainerProps = {
  direction?: "row" | "column";
  alignItems?:
    | "baseline"
    | "center"
    | "end"
    | "flex-end"
    | "flex-start"
    | "inherit"
    | "initial"
    | "normal"
    | "revert"
    | "self-end"
    | "self-start"
    | "start"
    | "stretch"
    | "unset";
  justifyContent?:
    | "center"
    | "end"
    | "flex-end"
    | "flex-start"
    | "inherit"
    | "initial"
    | "left"
    | "normal"
    | "revert"
    | "right"
    | "space-around"
    | "space-between"
    | "space-evenly"
    | "start"
    | "stretch"
    | "unset";
  position?:
    | "absolute"
    | "fixed"
    | "inherit"
    | "initial"
    | "relative"
    | "revert"
    | "static"
    | "sticky"
    | "unset";
  border?: string;
  background?: string;
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
};

const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  border: ${({ border }) => border};
  background: ${({ background }) => background};
  position: ${({ position }) => position};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
`;

export default FlexContainer;
