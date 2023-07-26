// ***********************************
// |         Import Padrão           |
// ***********************************

import React from "react";

// ***********************************
// |    Import React-router-dom      |
// ***********************************

import { Route, Routes, useParams } from "react-router-dom";

// ***********************************
// |     Import React-Markdown       |
// ***********************************

import { ReactMarkdown } from "react-markdown/lib/react-markdown";

// ***********************************
// |          Import Css             |
// ***********************************
import "./Post.css";

// ***********************************
// |      Import Posts.json          |
// ***********************************

import posts from "json/posts.json";

// ***********************************
// |       Import Componentes        |
// ***********************************

import PostModelo from "components/PostModelo";
import NaoEncontrada from "Paginas/NaoEncontrada";
import PaginaPadrao from "components/PaginaPadrao";

const Post = () => {
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    });

    if (!post) {
        return <NaoEncontrada />;
    }

    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route
                    index
                    element={
                        <PostModelo
                            fotoCapa={`/assets/posts/${post.id}/capa.png`}
                            titulo={post.titulo}
                        >
                            <div className="post-markdown-container">
                                <ReactMarkdown>{post.texto}</ReactMarkdown>
                            </div>
                        </PostModelo> 
                    }
                />
            </Route>
        </Routes>
    );
};

export default Post;
