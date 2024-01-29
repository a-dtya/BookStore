import React, { useState } from "react";
import ClientZone from "./ClientZone/ClientZone";
import { createContext } from "react";

export const ClientActivePageCntxt = createContext();

function CLientZoneRouter() {
  const [clientActivePage, setClientActivePage] = useState("profile");
  function updatePage(activePage) {
    setClientActivePage(activePage);
  }
  return (
    <div className="wrapper">
      <ClientActivePageCntxt.Provider value={{ clientActivePage, updatePage }}>
        <ClientZone />
      </ClientActivePageCntxt.Provider>
    </div>
  );
}
export default CLientZoneRouter;
