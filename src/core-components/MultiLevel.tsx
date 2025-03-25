import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  useTheme,
} from "@mui/material";
import {
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import { MenuItem } from "./MenuItem";
import styled from "@emotion/styled";

const CustomizedListItem = styled(ListItem)`
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  border-radius: 6px;
  &:hover {
    background-color: rgba(28, 30, 40, 0.6);
  }
`;
export const MultiLevel = ({
  item,
  setSelectedItem,
  selectedItem,
  selectedParent,
}: {
  item: any;
  setSelectedItem: (argument: string) => void;
  selectedItem: string;
  selectedParent: string;
}) => {
  const { next: children } = item;
  const [open, setOpen] = useState(item.slug === selectedParent);
  const theme = useTheme();
  const handleClick = () => {
    setOpen((prev) => !prev);
  };


  return (
    <React.Fragment>
      <CustomizedListItem
        style={{
          color: theme.palette.primary.main,
        }}
        onClick={handleClick}
      >
        {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
        <ListItemText primary={item.text} />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </CustomizedListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children.map((child: any) => (
            <MenuItem
              key={item.slug}
              item={child}
              setSelectedItem={setSelectedItem}
              selectedItem={selectedItem}
              selectedParent={selectedParent}
            />
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
};
