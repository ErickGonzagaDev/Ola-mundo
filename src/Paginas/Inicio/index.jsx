// ***********************************
// |         Import Padrão           |
// ***********************************

import React from "react";

// ***********************************
// |          Import Css             |
// ***********************************

import styles from "./Inicio.module.css"

// ***********************************
// |       Import Posts.json         |
// ***********************************

import posts from "../../json/posts.json"

// ***********************************
// |      Import Componentes         |
// ***********************************
import PostCard from "components/PostCard";

const Inicio = () => {
    return (

            <ul className={styles.posts}>
                {posts.map((post)=>{
                    return(
                        <li key={post.id}
                        
                        >
                            <PostCard post={post}/>
                        </li>
                    )
                })}
            </ul>

    );
};

export default Inicio;
