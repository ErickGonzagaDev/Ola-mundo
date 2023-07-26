// ***********************************
// |         Import Padrão           |
// ***********************************

import React from "react";

// ***********************************
// |          Import Css             |
// ***********************************

import styles from "./Banner.module.css";

// ***********************************
// |         Import Imagens          |
// ***********************************

import circuloColorido from "assets/circulo_colorido.png";

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Ola, Mundo!</h1>

                <p className={styles.paragrafo}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Culpa aliquid exercitationem qui nesciunt? Illum laborum
                    consequatur molestias molestiae pariatur! Modi labore
                    suscipit numquam ratione quos doloremque quae fugit neque
                    iure.
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />

                <img
                    className={styles.minhaFoto}
                    src="https://github.com/erickgonzagadev.png"
                    alt="Foto do Erick Gonzaga"
                />
            </div>
        </div>
    );
};

export default Banner;
