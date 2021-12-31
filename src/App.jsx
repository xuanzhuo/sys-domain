import React from "react";
import { Routes, Route, Outlet} from "react-router-dom";
import routerConfig from "./router";
export default function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
            {
                routerConfig.map((item,index)=>{
                    return (
                        <Route 
                            index={index === 0} 
                            key={item.path} 
                            path={item.path}
                            element={<item.element/>} 
                        />
                    )
                })
            }
        </Route>
    </Routes>
  );
}

function Layout() {
  return (
      <Outlet />
  );
}

