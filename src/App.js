import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import About from "./components/About";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import Success from "./components/Success";
import NotFound from "./components/NotFound";
import Projects from "./components/Projects";
import FeaturedProjects from "./components/FeaturedProjects";
import NewProjects from "./components/NewProjects.js";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import { AuthProvider } from "./components/auth";
import Login from "./components/Login";
import Logout from "./components/Logout";
import PrivateRoute from "./components/PrivateRoute";

const LazyAbout = React.lazy(() => import("./components/About"));

function App() {
  return (
    <AuthProvider className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/success" element={<Success />} />
        <Route path="/projects" element={<Projects />}>
          <Route index element={<NewProjects />} />
          <Route path="featured" element={<FeaturedProjects />} />
          <Route path="new" element={<NewProjects />} />
        </Route>
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        />
        <Route path="/users/:userId" element={<UserDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
