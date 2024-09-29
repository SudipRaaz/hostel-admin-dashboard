'use client';
import React from "react";
import SeatCard from "./seat-card";
import RightDrawer from "../Drawer/right-drawer";

const RightDrawerToggle = () => {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <div>
            <SeatCard toggleDrawer={toggleDrawer} /> {isDrawerOpen && <RightDrawer />}
            <RightDrawer children={<SeatCard />} />
        </div>
    );
};

export default RightDrawerToggle;