import { useEffect, useRef, useState } from "react";
import { setupScrollspy } from "../utils";
import styled from "@emotion/styled";

const CustomizedLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;
export const ScrollSpySection = () => {
  const [listOfLinks, setListOfLinks] = useState([]);
  const elementRef = useRef(null);
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
            <CustomizedLink href={`#${links.id}`}>
              {links.innerText}
            </CustomizedLink>
            <br />
          </>
        );
      })}
    </div>
  );
};
