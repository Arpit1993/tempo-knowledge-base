import styled from "@emotion/styled";
import { MenuItem } from "../core-components/MenuItem";
import { Input, Typography } from "@mui/material";
import { Result } from "../types";

const SidebarContainer = styled("aside")(({ theme }) => ({
  width: "280px",
  height: "inherit",
  position: "fixed",
  boxSizing: "border-box",
  borderRight: "1px solid #24283199",
  maxHeight: "100vh",
}));

const ArticleSideBarContainer = styled.div`
  max-height: 500px;
  overflow: scroll;
  padding: 0px 8px;
  margin-top: 16px;
`;

const SideBarHeaderContainer = styled.div`
  padding: 0px 8px;
`;

const CustomizedInput = styled(Input)`
  border: 1px solid #24283199;
  border-radius: 4px;
  background-color: #1c1f2880;
  margin-top: 8px;
  width: 100%;
  padding: 0px 4px;
  &::before {
    content: "";
    border-bottom: none;
  }
`;

const renderSideBar = (
  result,
  selectedItem,
  setSelectedItem,
  selectedParent
) => {
  return result.map((item) => {
    return (
      <MenuItem
        item={item}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        selectedParent={selectedParent}
      ></MenuItem>
    );
  });
};

export const Sidebar = ({
  result,
  selectedItem,
  setSelectedItem,
  parent,
}: {
  result: Result;
  selectedItem: string;
  setSelectedItem: (a: string) => void;
  parent: string;
}) => {
  

  return (
    <SidebarContainer>
      <SideBarHeaderContainer>
        <Typography fontWeight={600} textAlign={"center"}>
          TempoLabs
        </Typography>
        <CustomizedInput placeholder="Ask AI or search for articles"></CustomizedInput>
      </SideBarHeaderContainer>
      <ArticleSideBarContainer>
        {renderSideBar(result, selectedItem, setSelectedItem, parent)}
      </ArticleSideBarContainer>
    </SidebarContainer>
  );
};
