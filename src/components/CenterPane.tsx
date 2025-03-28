import styled from "@emotion/styled";

const CenterPaneContainer = styled.div`
  position: relative;
  left: 280px;
  padding: 120px 0px;
  display: flex;
  justify-content: center;
  width: 1200px;
`;
export const CenterPane = ({ children }: { children: any }) => {
  return <CenterPaneContainer>{children}</CenterPaneContainer>;
};
