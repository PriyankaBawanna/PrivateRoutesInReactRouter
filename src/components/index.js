import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import MenuBar from "./MenuBar";
import Products from "./Products";
import Protected from "./Protected";
import Home from "./Home";
function RoutesPath() {
  const [isSignedIn, setIsSignedIn] = useState(null);
  const signIn = () => {
    setIsSignedIn(true);
  };
  const signOut = () => {
    setIsSignedIn(false);
  };
  return (
    <>
      <h2>Protected Route Example </h2>
      <BrowserRouter>
        <MenuBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Dashboard />
              </Protected>
            }
          />
          <Route
            path="/products"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Products />
              </Protected>
            }
          />
        </Routes>
        {isSignedIn ? (
          <div>
            <button onClick={signOut}>sign Out</button>
          </div>
        ) : (
          <div>
            <button onClick={signIn}>sign In</button>
          </div>
        )}
      </BrowserRouter>
    </>
  );
}
export default RoutesPath;
