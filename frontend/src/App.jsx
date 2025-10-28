import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";



function App() {
  const token = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
 
        <Route
          path="/dashboard"
          element={token ? <Dashboard /> : <Navigate to="/login" replace />}
        /> 
         <Route
          path="*"
          element={<Navigate to={token ? "/dashboard" : "/login"} replace />}
          /> 

            
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";

// const App = () => {
//   const token = localStorage.getItem("token");

//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route
//           path="/dashboard"
//           element={token ? <Dashboard /> : <Navigate to="/dashboard" />}
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
