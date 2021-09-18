import axios from 'axios';

import React, { useState, useEffect, useContext } from "react";
import { IoIosArrowDown } from "react-icons/io";

import { LoggedUser } from '../services/contexts/LoggedUser';
import PostsList from "./PostsList/PostsList.js";
import { TimelineHeader, DropdownMenu, UserAvatar, MainContainer, ContainerPosts } from "./Timeline_style.js";
import Hashtags from '../Hashtags/Hashtags'
import Topbar from "../Topbar/Topbar.js";

import { ContextPost } from '../services/contexts/ContextPost.js';

// { email: "ruffles@mail.com", password: "potato" };

const POSTS_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr/posts/";

export default function Timeline() {
    const { loggedUser } = useContext(LoggedUser);
    const [allPostsArray, setAllPostsArray] = useState([]);
    const [postsLoaded, setPostsLoaded] = useState(false);
    
    function updatePostsArray(response) {
        if (response.data.posts.length < 1) {
            alert("Nenhum post encontrado");
            return;
        }
        setAllPostsArray(response.data.posts);
        setPostsLoaded(true);
    };

    useEffect(() => {
        const requestConfig = {
            headers: { Authorization: `Bearer ${loggedUser.token}` }
        };

        const allPostsPromise = axios.get(POSTS_URL, requestConfig);
        allPostsPromise.then(updatePostsArray);
        allPostsPromise.catch(() => alert("Houve uma falha ao obter os posts, por favor atualize a página"));
    }, [loggedUser]);

    return (
        <>
            <ContextPost.Provider value={{ allPostsArray, setAllPostsArray }}>
                <Topbar/>
                <MainContainer>
                    <ContainerPosts>
                        <PostsList showList={postsLoaded} avatar={loggedUser.avatar} allPostsArray={allPostsArray} />
                        <Hashtags />
                    </ContainerPosts>
                </MainContainer>
            </ContextPost.Provider>
        </>
    );
}