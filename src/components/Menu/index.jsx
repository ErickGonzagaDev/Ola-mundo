// ***********************************
// |         Import Padrão           |
// ***********************************

import React from "react";

// ***********************************
// |    Import React-router-dom      |
// ***********************************

import { Link,} from "react-router-dom";

// ***********************************
// |          Import Css             |
// ***********************************

import styles from "./Menu.module.css";

// ***********************************
// |       Import Componentes        |
// ***********************************

import MenuLink from "../MenuLink";

const Menu = () => {
    

    return (
        <header>
            <nav className={styles.navegacao}>

            <MenuLink to ="/">
                Início
            </MenuLink>

            <MenuLink to ="/sobremim">
                Sobre Mim
            </MenuLink>
                
            </nav>
        </header>
    );
};

export default Menu;
