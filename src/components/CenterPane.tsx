import styled from "@emotion/styled";

const CenterPaneContainer = styled.div`
  position: relative;
  left: 280px;
  padding: 120px;
  width: 700px;
`;
export const CenterPane = ({ children }: { children: any }) => {
  return <CenterPaneContainer>{children}</CenterPaneContainer>;
};
