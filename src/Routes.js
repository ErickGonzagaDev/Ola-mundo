// ***********************************
// |         Import Padrão           |
// ***********************************

import React from "react";

// ***********************************
// |    Import React-router-dom      |
// ***********************************

import { BrowserRouter, Routes, Route } from "react-router-dom";

// ***********************************
// |       Import Componentes        |
// ***********************************

import Inicio from "./Paginas/Inicio";
import SobreMim from "./Paginas/SobreMim";
import Menu from "./components/Menu";
import Rodape from "components/Rodape";
import PaginaPadrao from "components/PaginaPadrao";
import Post from "Paginas/Post";
import NaoEncontrada from "Paginas/NaoEncontrada";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Menu />

            <Routes>
                <Route path="/" element={<PaginaPadrao />}>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/sobremim" element={<SobreMim />} />
                </Route>

                <Route path="/posts/:id" element={<Post />} />
                <Route path="*" element={<NaoEncontrada />} />
            </Routes>

            <Rodape />
        </BrowserRouter>
    );
}

export default AppRoutes;
