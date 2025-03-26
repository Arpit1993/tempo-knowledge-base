import { Sidebar } from "../components/Sidebar";
import { CenterPane } from "../components/CenterPane";
import { ArticleSection } from "../pages/Article";
import { useState } from "react";
import { returnParent } from "../utils";
import { NavLinks, Result } from "../types";
import { Outlet } from "react-router";

export const Dashboard = ({ result, navLinks }: { result: Result, navLinks: [NavLinks] }) => {
  // if (!result) {
  //   return;
  // }
  // const [selectedItem, setSelectedItem] = useState("");
  // let searchQuery = selectedItem;
  // const parent = returnParent([...result], searchQuery, "");
  return (
    <main>
      <Sidebar
        result={result}
        // selectedItem={selectedItem}
        // setSelectedItem={setSelectedItem}
        // parent={parent}
        navLinks={navLinks}
      />
      <CenterPane>
        <Outlet />
        {/* <ArticleSection selectedItem={selectedItem} /> */}
      </CenterPane>
    </main>
  );
};
