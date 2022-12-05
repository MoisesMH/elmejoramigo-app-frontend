import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CardList from "./components/CardList";
import Logout from "./components/Logout";
import Navbar from "./components/navbar/Navbar";
import NavbarSide from "./components/NavbarSide/NavbarSide";
import { UserStateContext } from "./contexts/auth.context";
import ShowNavSideProvider from "./contexts/toggleNavbar.context";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./utils/PrivateRoute";

function MascotasApp() {
    const user = useContext(UserStateContext)
    const linksRight = Object.keys(user).length > 0 ? [
        {
            name: "Cerrar Sesion",
            to: "/logout"
        },
    ] : [
        {
            name: "Iniciar Sesion",
            to: "/login"
        },
        {
            name: "Registrarse",
            to: "/signup"
        }
    ]
    return (
        <>
            <ShowNavSideProvider>
                <Navbar
                    linksRight={linksRight}
                />
                <NavbarSide />
            </ShowNavSideProvider>

            {/* { */}
                {/* Object.keys(user).length > 0 ? */}
                    <Routes>
                        <Route element={<PrivateRoute />}>
                            <Route path="/mascotas" element={<h1>Ver mascotas.</h1>} />
                            <Route path="/settings" element={<h1>Hi! I'm settings.</h1>} />
                            <Route path="/logout" element={<Logout />} />
                        </Route>
                        <Route path="/" element="" />
                        <Route path="/home" element={<Navigate to="/" />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Register />} />
                        <Route path="/adopta" element={<CardList />} />
                        <Route path="/adopta/:id" element="" />
                    </Routes>
                {/* : <h1>Loading...</h1> */}
            {/* } */}
        </>
    )
}

export default MascotasApp;