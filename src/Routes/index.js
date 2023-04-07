import React, { Suspense } from "react";
import {
  userRoutes,
  authRoutes,
  initialRoutes,
  adminRoutes,
} from "./allRoutes";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

/* Layout */
import CommonLayout from "../Layout/CommonLayout/index";
import AuthLayout from "../Layout/AuthLayout";

import AdminAuthLayout from "../adminPanel/Layout/AdminAuthLayout";

const Index = () => {
  const availableAuthRoutesPath = authRoutes.map((r) => r["path"]);
  const availablePublicRoutesPaths = userRoutes.map((r) => r["path"]);
  const availableAdminRoutesPaths = adminRoutes.map((r) => r["path"]);

  const Loader = () => {
    return (
      <div id="preloader">
        <div id="status">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      <Router>
        <Suspense fallback={Loader()}>
          {/* <Switch> */}
          {/* <Route path="/" component={SignUp} /> */}
          <Route path={availableAuthRoutesPath}>
            <AuthLayout>
              {authRoutes.map((route, idx) => (
                <Route
                  path={route.path}
                  component={route.component}
                  key={idx}
                  exact={true}
                />
              ))}
            </AuthLayout>
          </Route>

          <Route path={availableAdminRoutesPaths}>
            <AdminAuthLayout>
              {adminRoutes.map((route, idx) => (
                <Route
                  path={route.path}
                  component={route.component}
                  key={idx}
                  exact={true}
                />
              ))}
            </AdminAuthLayout>
          </Route>

          <Route path={availablePublicRoutesPaths}>
            <CommonLayout>
              {userRoutes.map((route, idx) => (
                <Route
                  path={route.path}
                  component={route.component}
                  key={idx}
                  exact={true}
                />
              ))}
            </CommonLayout>
          </Route>
          {/* </Switch> */}
        </Suspense>
      </Router>
    </React.Fragment>
  );
};

export default Index;

// import React, { lazy, Suspense } from "react";
// import { userRoutes, authRoutes, initialRoutes } from "./allRoutes";
// import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

// /* Layout */
// import CommonLayout from "../Layout/CommonLayout/index";
// import AuthLayout from "../Layout/AuthLayout";
// import SignUp from "../pages/ExtraPages/SignUp";

// const Index = () => {
//   const availableAuthRoutesPath = authRoutes.map((r) => r["path"]);
//   const availablePublicRoutesPaths = userRoutes.map((r) => r["path"]);

//   const Loader = () => {
//     return (
//       <div id="preloader">
//         <div id="status">
//           <ul>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//             <li></li>
//           </ul>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <React.Fragment>
//       <Router>
//         <Suspense fallback={Loader()}>
//           <Routes>
//             <Route path={availableAuthRoutesPath} element={<AuthLayout />}>
//               {authRoutes.map((route, idx) => (
//                 <Route
//                   path={route.path}
//                   element={lazy(() => import(`${route.component}`))}
//                   key={idx}
//                 />
//               ))}
//             </Route>

//             <Route path={availablePublicRoutesPaths} element={<CommonLayout />}>
//               {userRoutes.map((route, idx) => (
//                 <Route
//                   path={route.path}
//                   element={lazy(() => import(`${route.component}`))}
//                   key={idx}
//                 />
//               ))}
//             </Route>
//           </Routes>
//         </Suspense>
//       </Router>
//     </React.Fragment>
//   );
// };

// export default Index;
