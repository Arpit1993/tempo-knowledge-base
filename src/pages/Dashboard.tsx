import { Sidebar } from "../components/Sidebar";
import { CenterPane } from "../components/CenterPane";
import { NavLinks, Result } from "../types";
import { Outlet } from "react-router";

export const Dashboard = ({ result, navLinks }: { result: Result, navLinks: [NavLinks] }) => {
  return (
    <main>
      <Sidebar
        result={result}
        navLinks={navLinks}
      />
      <CenterPane>
        <Outlet />
      </CenterPane>
    </main>
  );
};
