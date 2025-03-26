import { ListItem, useTheme, styled } from "@mui/material";

import { Link } from "react-router";

const CustomizedListItem = styled(ListItem)`
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  border-radius: 6px;
  &:hover {
    background-color: rgba(28, 30, 40, 0.6);
  }
`;

export const SingleLevel = ({
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
  const theme = useTheme();
  const handleClick = () => {
    setSelectedItem(item.slug);
  };
  return (
    <Link to={item.slug} onClick={() => handleClick()} style={{textDecoration: 'none', color: theme.palette.primary.main}}>
      <CustomizedListItem
        style={
          selectedItem === item.slug
            ? { backgroundColor: theme.palette.sideBarHighlight.main }
            : {}
        }
        onClick={() => handleClick()}
      >
        {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
        <p>{item.text}</p>
      </CustomizedListItem>
    </Link>
  );
};
