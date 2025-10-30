// import React from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";



// function App() {
//   const token = localStorage.getItem("token");
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/login" element={<Login />} />
 
//         <Route
//           path="/dashboard"
//           element={token ? <Dashboard /> : <Navigate to="/login" replace />}
//         /> 
//          <Route
//           path="*"
//           element={<Navigate to={token ? "/dashboard" : "/login"} replace />}
//           /> 

            
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;



// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
// import EventDetailsPage from "./pages/EventDetailsPage";
// import Login from "./pages/Login";

// function App() {
//   const isAuthenticated = !!localStorage.getItem("token");

//   return (
//     <Router>
//       <Routes>
//         {/* ✅ Login page */}
//         <Route path="/login" element={<Login />} />

//        {/* ✅ Default redirect */}
//          <Route
//           path="/"
//           element={<Navigate to={isAuthenticated ? "/admin/dashboard" : "/login"} />}
//         /> 

//         {/* ✅ Optional redirect to fix warning */}
//         <Route path="/dashboard" element={<Navigate to="/admin/dashboard" />} />

//         {/* ✅ Protected dashboard */}
//         <Route
//           path="/admin/dashboard"
//           element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
//         />

//         {/* ✅ Protected event details */}
//         <Route
//           path="/admin/events/:id"
//           element={isAuthenticated ? <EventDetailsPage /> : <Navigate to="/login" />}
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;




import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import EventDetailsPage from "./pages/EventDetailsPage";
import Login from "./pages/Login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    // Whenever token changes in localStorage, update state
    const handleStorageChange = () => {
      setIsAuthenticated(!!localStorage.getItem("token"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />

        <Route
          path="/"
          element={<Navigate to={isAuthenticated ? "/admin/dashboard" : "/login"} />}
        />

        <Route path="/dashboard" element={<Navigate to="/admin/dashboard" />} />

        <Route
          path="/admin/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />

        <Route
          path="/admin/events/:id"
          element={isAuthenticated ? <EventDetailsPage /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;










