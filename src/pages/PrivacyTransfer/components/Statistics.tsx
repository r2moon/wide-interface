import styled from "styled-components";
import { FlexContainer } from "components";

const StyledLabel = styled.div`
  color: ${({ theme }) => theme.colors.text2};
  font-size: 24px;
  margin-bottom: 7px;
`;

const StyledText = styled.div`
  color: ${({ theme }) => theme.colors.text2};
  font-size: 16px;
`;

const StyledGroup = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

type StyledStatisticsItemProps = {
  hasBorder?: boolean;
};
const StyledStatisticsItem = styled.div<StyledStatisticsItemProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 28px;
  border-radius: 14px;
  border: 1px solid;
  border-color: ${({ theme, hasBorder }) =>
    hasBorder ? theme.colors.primary : "transparent"};
  padding-left: 10px;
`;

const templates = [
  {
    id: 13450,
    label: "8 minutes ago",
  },
  {
    id: 13450,
    label: "8 minutes ago",
  },
  {
    id: 13450,
    label: "8 minutes ago",
  },
  {
    id: 13450,
    label: "8 minutes ago",
  },
  {
    id: 13450,
    label: "8 minutes ago",
  },
];
const Statistics = () => (
  <FlexContainer direction="column" alignItems="flex-start" margin="45px 65px">
    <StyledGroup>
      <StyledLabel>Anonymity set</StyledLabel>
      <StyledText>
        <b>13450</b> equal user deposits
      </StyledText>
    </StyledGroup>
    <StyledLabel>Last deposits</StyledLabel>
    <FlexContainer width="100%">
      <FlexContainer width="50%" direction="column" margin="0 10px 0 0">
        {templates.map((template, i) => (
          <StyledStatisticsItem hasBorder={i % 2 === 0}>
            <div>{template.label}</div>
          </StyledStatisticsItem>
        ))}
      </FlexContainer>
      <FlexContainer width="50%" direction="column" margin="0 0 0 10px">
        {templates.map((template, i) => (
          <StyledStatisticsItem hasBorder={i % 2 === 0}>
            <div>{template.label}</div>
          </StyledStatisticsItem>
        ))}
      </FlexContainer>
    </FlexContainer>
  </FlexContainer>
);

export default Statistics;
