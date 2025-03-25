import { Sidebar } from "../components/Sidebar";
import { CenterPane } from "../components/CenterPane";
import { Outlet } from "react-router";

export const Dashboard = ({ result }: {result: any }) => {
  return (
    <main>
      <Sidebar result={result}/>
      <CenterPane>
        <Outlet />
      </CenterPane>
    </main>
  );
};
