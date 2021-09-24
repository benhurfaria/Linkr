import React, { useState, useEffect, useContext} from "react";
import PostsList from "./PostsList/PostsList.js";
import { MainContainer, ContainerHeader, ContainerPosts } from "./Timeline_style.js";
import Hashtags from '../Hashtags/Hashtags'

import Topbar from "../Topbar/Topbar.js";
import { LoggedUser } from '../services/contexts/LoggedUser.js';
import { ContextPost } from '../services/contexts/ContextPost.js';
<<<<<<< HEAD
import { getAllPosts } from "../services/api/Api.js";
=======
import { getAllPosts, getStoredUser, getUserPosts, getMyLikes } from "../services/api/Api.js";
>>>>>>> main

export default function Timeline({ subType }) {
    const { loggedUser} = useContext(LoggedUser);
    const [postsArray, setPostsArray] = useState([]);
    const [postsLoaded, setPostsLoaded] = useState(false);
    const [postTipo, setPostTipo] = useState(false);


    function updatePostsArray(response) {
        if (response.data.posts.length < 1) {
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

        getAllPosts(requestConfig)
            .then(updatePostsArray)
            .catch(() => alert("Houve uma falha ao obter os posts, por favor atualize a página"));
    }, [loggedUser])

    return (

        <>
            <ContextPost.Provider value={{ postsArray, setPostsArray }}>
                <Topbar />
                <MainContainer>
                    <ContainerHeader>
                        <h1>timeline</h1>
                    </ContainerHeader>
                    <ContainerPosts>
                        <PostsList showList={postsLoaded} avatar={loggedUser.avatar} postsArray={postsArray} render="timeline"/>
                        <PostsList showList={postsLoaded} avatar={loggedUser.avatar} postsArray={postsArray} render={subType} postTipo={postTipo}/>
                        <Hashtags />
                    </ContainerPosts>
                </MainContainer>
            </ContextPost.Provider>
        </>

    );
}