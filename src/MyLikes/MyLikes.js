import React, { useState, useEffect, useContext} from "react";

import PostsList from "../Timeline/PostsList/PostsList";
import Hashtags from '../Hashtags/Hashtags'
import Topbar from "../Topbar/Topbar.js";
import { MainContainer, ContainerHeader, ContainerPosts } from "../Timeline/Timeline_style.js";

import { LoggedUser } from '../services/contexts/LoggedUser.js';
import { ContextPost } from '../services/contexts/ContextPost.js';
import { getMyLikes, getStoredUser } from "../services/api/Api.js";


export default function MyLikes() {
    const { loggedUser } = useContext(LoggedUser);
    const [postsArray, setPostsArray] = useState([]);
    const [postsLoaded, setPostsLoaded] = useState(false);
    const [postTipo, setPostTipo] = useState(false);
        
    function updatePostsArray(response) {
        if (!response.data.posts.length) {
            setPostTipo(false);
            return;
        }
        setPostsArray(response.data.posts);
        setPostTipo(true);
        setPostsLoaded(true);
    };

    useEffect(() => {
        const requestConfig = {
            headers: {
                Authorization: `Bearer ${getStoredUser().token}`
            }
        };
        getMyLikes(requestConfig)
            .then(updatePostsArray)
            .catch(() => alert("Houve uma falha ao obter os posts, por favor atualize a página"));
    },[loggedUser.token]);
    
    return (
        <>
            <ContextPost.Provider value={{ postsArray, setPostsArray }}>
                <Topbar />            
                <MainContainer>
                    <ContainerHeader>
                        <h1>my likes</h1>
                    </ContainerHeader>
                    <ContainerPosts>
                        <PostsList showList={postsLoaded} avatar={loggedUser.avatar} postsArray={postsArray} render="my likes" postTipo={postTipo} />
                        <Hashtags />
                    </ContainerPosts>
                </MainContainer>
            </ContextPost.Provider>
        </>
    );
}