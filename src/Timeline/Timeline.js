import React, { useState, useEffect, useContext } from "react";
import PostsList from "./PostsList/PostsList.js";
import { MainContainer, ContainerHeader, ContainerPosts} from "./Timeline_style.js";
import Hashtags from '../Hashtags/Hashtags'

import Topbar from "../Topbar/Topbar.js";
import { LoggedUser } from '../services/contexts/LoggedUser.js';
import { ContextPost } from '../services/contexts/ContextPost.js';
import { getAllPosts, getUserPosts } from "../services/api/Api.js";

export default function Timeline({subType}) {
    const { loggedUser } = useContext(LoggedUser);
    const [postsArray, setPostsArray] = useState([]);
    const [postsLoaded, setPostsLoaded] = useState(false);

    function updatePostsArray(response) {
        if (response.data.posts.length < 1) {
            alert("Nenhum post encontrado");
            return;
        }
        setPostsArray(response.data.posts);
        setPostsLoaded(true);
    };


    useEffect(() => {
        const requestConfig = {
            headers: {
                Authorization: `Bearer ${loggedUser.token}`
            }
        };

        if (subType === "my posts") {
            getUserPosts(requestConfig, loggedUser.id)
                .then(updatePostsArray)
                .catch(() => alert("Houve uma falha ao obter os posts, por favor atualize a página"));
        }

        if (subType === "timeline") {
            getAllPosts(requestConfig)
                .then(updatePostsArray)
                .catch(() => alert("Houve uma falha ao obter os posts, por favor atualize a página"));
        }
    }, [loggedUser, subType]);

    return (

        <>
            <ContextPost.Provider value={{ postsArray, setPostsArray }}>
                <Topbar/>
                <MainContainer>
                    <ContainerHeader>
                        <h1>{`${subType}`}</h1>
                    </ContainerHeader>
                    <ContainerPosts>
                        <PostsList showList={postsLoaded} avatar={loggedUser.avatar} postsArray={postsArray} render={subType} />
                        <Hashtags />
                    </ContainerPosts>
                </MainContainer>
            </ContextPost.Provider>
        </>

    );
}