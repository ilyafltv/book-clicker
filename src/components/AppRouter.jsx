import { Routes, Route } from "react-router-dom";
import Layout from "@components/Layout";
import { appRoutes } from "@router/router";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {appRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Route>
    </Routes>
  );
}
