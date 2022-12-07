import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import routes from "./routes";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/home" element={<Navigate to="/janitor_mcp"></Navigate>}></Route>
        {routes &&
          routes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            );
          })}
      </Routes>
    </div>
  );
}

export default App;
