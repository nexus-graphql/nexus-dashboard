import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import DataCard from './DataCard';
import AddSourceButton from './AddSourceButton';

export default function DataSources() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100 h-screen">
        <Navbar name="Data Sources" />
        <DataCard name="Pet Store" type="Postgres" connection="Connection String" connectionDetails="postgres://postgres1234567" />
        <DataCard name="Space" type="GraphQL" connection="Endpoint" connectionDetails="http://spacex.com/graphql" />
        <AddSourceButton />
      </div>
    </>
  );
}
