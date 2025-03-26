import { Sidebar } from "../components/Sidebar";
import { CenterPane } from "../components/CenterPane";
import { Outlet } from "react-router";
import { ArticleSection } from "../pages/Article";
import { useState } from "react";
import { returnParent } from "../utils";
import { Result } from "../types";

export const Dashboard = ({ result }: {result: Result }) => {
  if (!result) {
    return;
  }
  const [selectedItem, setSelectedItem] = useState('');
  let searchQuery = selectedItem;
  const parent = returnParent([...result], searchQuery, '');
  return (
    <main>
      <Sidebar result={result} selectedItem={selectedItem} setSelectedItem={setSelectedItem} parent={parent}/>
      <CenterPane>
        <ArticleSection selectedItem={selectedItem}/>
      </CenterPane>
    </main>
  );
};
