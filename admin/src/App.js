import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import NewHotel from "./pages/newHotel/NewHotel";
import NewRoom from "./pages/newRoom/NewRoom";
import { userInputs, roomInputs, hotelInputs } from "./formsource";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { hotelColumns, roomsColumns, userColumns } from "./datatablesource";
function App() {
  const ProtectedRoutes = ({ children }) => {
    const { user } = useContext(AuthContext);
    if (!user) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <ProtectedRoutes>
                  <Home />
                </ProtectedRoutes>
              }
            />
            <Route path="users">
              <Route
                index
                element={
                  <ProtectedRoutes>
                    <List columns={userColumns} title="Users" />
                  </ProtectedRoutes>
                }
              />
              <Route
                path=":userId"
                element={
                  <ProtectedRoutes>
                    <Single />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoutes>
                    <New inputs={userInputs} title="Add New User" />
                  </ProtectedRoutes>
                }
              />
            </Route>
            <Route path="hotels">
              <Route
                index
                element={
                  <ProtectedRoutes>
                    <List columns={hotelColumns} title="Hotels" />
                  </ProtectedRoutes>
                }
              />
              <Route
                path=":hotelId"
                element={
                  <ProtectedRoutes>
                    <Single />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoutes>
                    <NewHotel inputs={hotelInputs} title="Add New Hotel" />
                  </ProtectedRoutes>
                }
              />
            </Route>
            <Route path="rooms">
              <Route
                index
                element={
                  <ProtectedRoutes>
                    <List columns={roomsColumns} title="Rooms" />
                  </ProtectedRoutes>
                }
              />
              <Route
                path=":roomId"
                element={
                  <ProtectedRoutes>
                    <Single />
                  </ProtectedRoutes>
                }
              />
              <Route
                path="new"
                element={
                  <ProtectedRoutes>
                    <NewRoom inputs={roomInputs} title="Add New Room" />
                  </ProtectedRoutes>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
