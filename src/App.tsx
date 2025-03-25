import { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import { Dashboard } from "./pages/Dashboard";
import { LandingPage } from "./pages/LandingPage";
import { getOrganisation } from "./data";
import ErrorBoundary from "./components/ErrorBoundary";
import { flattenList, returnRoutes } from "./utils";
import { OrganisationType } from "./types";



function App() {
  const [organizationList, setOrganizationList] = useState<OrganisationType>({
    _id: "",
    title: "",
    availableLocales: [""],
    description: "",
    displayName: "",
    locale: "",
    navItems: [{ icon: { type: "", value: "" } }],
    searchPlaceholder: "",
  });
  const [result, setResult] = useState();
  const fetchAllOrganizations = async () => {
    try {
      const result = await getOrganisation();
      setOrganizationList(result.data);
      const res = flattenList(result.data.structure);
      setResult([...res]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAllOrganizations();
  }, []);
  let dynamicRoutes = returnRoutes(result);

  return (
    <>
      <ErrorBoundary>
        <Routes>
          <Route path="/" Component={() => <Dashboard result={result} />}>
            {dynamicRoutes?.map((route) => {
              return route;
            })}
            <Route index element={<LandingPage />} />
            <Route path="*" element={<div>No Article Found</div>} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;
