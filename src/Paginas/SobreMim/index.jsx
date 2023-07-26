// ***********************************
// |         Import Padrão           |
// ***********************************

import React from "react";

// ***********************************
// |          Import Css             |
// ***********************************

import styles from "./SobreMim.module.css";

// ***********************************
// |         Import Imagens          |
// ***********************************

import fotoCapa from "assets/sobre_mim_capa.png";

// ***********************************
// |         Import Componentes           |
// ***********************************

import PostModelo from "components/PostModelo";

const SobreMim = () => {
    return (
        <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim">
            <h3 className={styles.subtitulo}>Olá, eu sou o Erick!</h3>

            <img
                src="https://github.com/erickgonzagadev.png"
                alt="Foto do Erick"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                asperiores ratione ut minima voluptatem enim aspernatur
                excepturi possimus. Magni sunt vitae quibusdam qui veritatis
                reprehenderit soluta commodi sequi culpa. Dolores.
            </p>
            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                asperiores ratione ut minima voluptatem enim aspernatur
                excepturi possimus. Magni sunt vitae quibusdam qui veritatis
                reprehenderit soluta commodi sequi culpa. Dolores.
            </p>
            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                asperiores ratione ut minima voluptatem enim aspernatur
                excepturi possimus. Magni sunt vitae quibusdam qui veritatis
                reprehenderit soluta commodi sequi culpa. Dolores.
            </p>
            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                asperiores ratione ut minima voluptatem enim aspernatur
                excepturi possimus. Magni sunt vitae quibusdam qui veritatis
                reprehenderit soluta commodi sequi culpa. Dolores.
            </p>
            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                asperiores ratione ut minima voluptatem enim aspernatur
                excepturi possimus. Magni sunt vitae quibusdam qui veritatis
                reprehenderit soluta commodi sequi culpa. Dolores.
            </p>
            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                asperiores ratione ut minima voluptatem enim aspernatur
                excepturi possimus. Magni sunt vitae quibusdam qui veritatis
                reprehenderit soluta commodi sequi culpa. Dolores.
            </p>
        </PostModelo>
    );
};

export default SobreMim;
