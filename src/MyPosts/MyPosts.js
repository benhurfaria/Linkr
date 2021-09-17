import axios from "axios";

import React, { useState, useEffect, useContext } from "react";
import { IoIosArrowDown } from "react-icons/io";

import { LoggedUser } from '../services/contexts/LoggedUser';
import PostsList from "../Timeline/PostsList/PostsList.js";
import { TimelineHeader, DropdownMenu, UserAvatar, MainContainer, ContainerPosts } from "../Timeline/Timeline_style.js";
import Hashtags from '../Hashtags/Hashtags'

import { ContextPost } from '../services/contexts/ContextPost.js';

const USERPOSTS_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr/users/";

export default function MyPosts() {
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

        const appendedURL = USERPOSTS_URL + `${loggedUser.id}/posts`;

        const userPostsPromise = axios.get(appendedURL, requestConfig);
        userPostsPromise.then(updatePostsArray);
        userPostsPromise.catch(() => alert("Houve uma falha ao obter os posts, por favor atualize a página"));
    }, [loggedUser]);

    return (
        <ContextPost.Provider value={{ postsArray, setPostsArray }}>
                <TimelineHeader>
                    <h1>linkr</h1>

                    <DropdownMenu>
                        <IoIosArrowDown />
                        <UserAvatar src={loggedUser.avatar} />
                    </DropdownMenu>
                </TimelineHeader>
                <MainContainer>
                    <ContainerPosts>
                        <PostsList showList={postsLoaded} avatar={loggedUser.avatar} postsArray={postsArray} />
                        <Hashtags />
                    </ContainerPosts>
                </MainContainer>
            </ContextPost.Provider>
    );
}