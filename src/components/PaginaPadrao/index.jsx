// ***********************************
// |         Import Padrão           |
// ***********************************
import React from "react";

// ***********************************
// |         Import Componetes       |
// ***********************************

import Banner from "components/Banner";
import { Outlet } from "react-router-dom";

const PaginaPadrao = () => {
    return (
        <main>
            <Banner />

            <Outlet/>
        </main>
    );
};

export default PaginaPadrao;
