import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";

export default function Layout() {
    return (
        <>
            <NavBar />
        <Box sx={{margin: 5}}>
            <Outlet />
        </Box>
        </>
    );
}