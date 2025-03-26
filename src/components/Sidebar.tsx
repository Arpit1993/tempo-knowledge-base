import styled from "@emotion/styled";
import { MenuItem } from "../core-components/MenuItem";
import { Input, Link, Typography, useTheme } from "@mui/material";
import { NavLinks, Result } from "../types";
import { useColorMode } from "../theme/ThemeContext";
import { useEffect, useState } from "react";
import { LightModeIcon } from "./icons/LightMode";
import { DarkModeIcon } from "./icons/DarkMode";
import { returnParent } from "../utils";

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
  display: flex;
  justify-content: space-between;
  padding: 0px 8px;
`;

const CustomizedInputButton = styled("button")`
  border: 1px solid #24283199;
  border-radius: 4px;
  background-color: #1c1f2880;
  margin-top: 8px;
  width: 100%;
  padding: 8px;
`;

const CustomizedButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

const SidebarNavLinksContainer = styled.div`
  border-top: 1px solid #24283199;
  padding: 32px 0px;
`;

const LinkWrapper = styled("div")`
  text-align: left;
  padding: 8px 16px;
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
  // selectedItem,
  // setSelectedItem,
  // parent,
  navLinks,
}: {
  result: Result;
  // selectedItem: string;
  // setSelectedItem: (a: string) => void;
  // parent: string;
  navLinks: [NavLinks];
}) => {
  if (!result) {
    return;
  }
  const { toggleColorMode } = useColorMode();
  const [selectedItem, setSelectedItem] = useState(
    window.location.pathname.slice(1)
  );
  let searchQuery = window.location.pathname.slice(1);
  const parent = returnParent([...result], searchQuery, "");
  const [mode, setMode] = useState("dark");
  const handleClick = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
    toggleColorMode();
  };
  const theme = useTheme();

  console.log("navLinks: ", navLinks);
  return (
    <SidebarContainer>
      <SideBarHeaderContainer>
        <Typography fontWeight={600} textAlign={"center"}>
          TempoLabs
        </Typography>
        <CustomizedButton onClick={handleClick}>
          {mode === "dark" ? (
            <LightModeIcon
              width={25}
              height={25}
              fill={theme.palette.primary.main}
            />
          ) : (
            <DarkModeIcon
              width={25}
              height={25}
              fill={theme.palette.primary.main}
            />
          )}
        </CustomizedButton>
      </SideBarHeaderContainer>
      <CustomizedInputButton style={{ color: theme.palette.primary.main }}>
        "Ask AI or search for articles"
      </CustomizedInputButton>

      <ArticleSideBarContainer>
        {renderSideBar(result, selectedItem, setSelectedItem, parent)}
      </ArticleSideBarContainer>
      <SidebarNavLinksContainer>
        {navLinks.map((item) => {
          return (
            <>
              <LinkWrapper>
                <Link href={item.url} underline="none">
                  {item.title}
                </Link>
              </LinkWrapper>
            </>
          );
        })}
      </SidebarNavLinksContainer>
    </SidebarContainer>
  );
};
