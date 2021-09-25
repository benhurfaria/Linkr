import React, { useState, useEffect, useContext, useParams } from "react";

import PostsList from "../Timeline/PostsList/PostsList";
import Hashtags from '../Hashtags/Hashtags'
import Topbar from "../Topbar/Topbar.js";
import { MainContainer, ContainerHeader, ContainerPosts } from "../Timeline/Timeline_style.js";

import { LoggedUser } from '../services/contexts/LoggedUser.js';
import { ContextPost } from '../services/contexts/ContextPost.js';
import { getUserPosts } from "../services/api/Api.js";


export default function UserIDPosts() {
    const { loggedUser } = useContext(LoggedUser);
    const [postsArray, setPostsArray] = useState([]);
    const [postsLoaded, setPostsLoaded] = useState(false);
    const IDParam = useParams();
    
    function updatePostsArray(response) {
        if (!response.data.posts.length) {
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
        getUserPosts(requestConfig, IDParam.id)
            .then(updatePostsArray)
            .catch(() => alert("Houve uma falha ao obter os posts, por favor atualize a página"));
    },[loggedUser.token, IDParam]);
    
    return (
        <>
            <ContextPost.Provider value={{ postsArray, setPostsArray }}>
                <Topbar />            
                <MainContainer>
                    <ContainerHeader>
                        <h1>{postsLoaded && `${postsArray[0].user.username}'s posts`}</h1>
                    </ContainerHeader>
                    <ContainerPosts>
                        <PostsList showList={postsLoaded} avatar={loggedUser.avatar} postsArray={postsArray} render="userID posts" />
                        <Hashtags />
                    </ContainerPosts>
                </MainContainer>
            </ContextPost.Provider>
        </>
    );
}