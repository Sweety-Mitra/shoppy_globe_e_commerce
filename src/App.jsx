import React, { Suspense } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="app-container">
      <Header />

      {/* Space under fixed header */}
      <div style={{ paddingTop: "20px" }}>
        <Suspense fallback={<div className="loading-block">Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
