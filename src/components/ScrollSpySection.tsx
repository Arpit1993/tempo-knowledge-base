import { useEffect, useRef, useState } from "react";
import { setupScrollspy } from "../utils";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";

const CustomizedLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;
export const ScrollSpySection = () => {
  const [listOfLinks, setListOfLinks] = useState([]);
  const elementRef = useRef(null);

  const theme = useTheme();

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("[data-toc-id]"));
    setListOfLinks(sections);
  }, []);

  useEffect(() => {
    if (listOfLinks.length) {
      setupScrollspy(elementRef.current);
    }
  }, [listOfLinks]);
  return (
    <div style={{ position: "fixed", right: 10 }} ref={elementRef}>
      {listOfLinks.map((links) => {
        return (
          <>
            <CustomizedLink href={`#${links.id}`} style={{color: theme.palette.primary.main}}>
              {links.innerText}
            </CustomizedLink>
            <br />
          </>
        );
      })}
    </div>
  );
};
