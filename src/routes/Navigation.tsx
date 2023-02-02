import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { routes } from "./routes";
import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={ logo } alt="React Logo" />
            <ul>
              {/* <li>
              <NavLink to="/lazy1" className={ ({ isActive }) => isActive ? "nav-active" : "" }>Lazy 1</NavLink>
            </li>
            <li>
              <NavLink to="/lazy2" className={ ({ isActive }) => isActive ? "nav-active" : " "}>Lazy 2</NavLink>
            </li>
            <li>
              <NavLink to="/lazy3" className={ ({ isActive }) => isActive ? "nav-active" : " "}>Lazy 3</NavLink>
            </li> */}
            
              {
               
                routes.map(({ to, name }) => ( 
                  <li key={to}>
                    <NavLink to={to} 
                      className={ ({ isActive }) => isActive ? "nav-active" : "" }>{name}</NavLink>
                  </li>
                ))
              } 
            
            </ul>
          
          </nav>

          <Routes>
            {/* <Route path="lazy1" element={<LazyPage1 />}></Route>
          <Route path="lazy2" element={<LazyPage2 />}></Route>
          <Route path="lazy3" element={<LazyPage3 />}></Route> */}
            {
              routes.map(({ to, path, Component }) => (
                <Route 
                  key={to} 
                  path={path} 
                  element={ < Component />}>
                </Route>
              ))
            }
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
