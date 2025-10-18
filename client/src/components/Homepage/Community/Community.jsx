import React from "react";
import { Route } from "react-router-dom";
import Forums from "./Forums/Forums";

export const CommunityRoutes = () => (
    <>
        <Route path="/community/forums" element={<Forums />} />
    </>
);
