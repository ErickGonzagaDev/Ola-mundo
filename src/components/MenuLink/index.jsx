// ***********************************
// |         Import Padrão           |
// ***********************************

import React from "react";

// ***********************************
// |          Import Css             |
// ***********************************

import styles from "./MenuLink.module.css"

// ***********************************
// |    Import React-router-dom      |
// ***********************************

import { Link, useLocation } from "react-router-dom";

const MenuLink =({children,to})=>{
    const localizacao = useLocation(); //hook do react-router-dom
    return(
        <Link
        className={`${styles.link} ${
            localizacao.pathname === to ? styles.linkDestacado : ""
        }`}
        to={to}
    >
        {children}
    </Link>
    )
}

export default MenuLink