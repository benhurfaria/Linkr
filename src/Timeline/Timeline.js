import axios from 'axios';

import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

import PostsList from "./PostsList.js";

import { TimelineHeader, DropdownMenu, UserAvatar, MainContainer, ContainerHeader, ContainerPosts, TrendingWords } from "./Timeline_style.js";
import { ContextPost } from '../services/contexts/ContextPost.js';

const USERS_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/users/";

const loggedUserInfo = {
    token: "1b939c76-c0bc-48ae-979c-d1f020d74be6",
    user: {
        id: 529,
        email: "ruffles@mail.com",
        username: "ramiro",
        avatar: "https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/users/529/avatar"
    }
};



export default function Timeline() {
    const [userPostsArray, setUserPostsArray] = useState([""]);

    useEffect(() => {
        const requestConfig = {
            headers: {Authorization: `Bearer ${loggedUserInfo.token}`}
        };
        
        const USER_POSTS_URL = USERS_URL + `${loggedUserInfo.user.id}/posts`;

        const userPostsPromise = axios.get(USER_POSTS_URL, requestConfig);
        userPostsPromise.then((response) => {setUserPostsArray(response.data.posts)});
        userPostsPromise.catch((error) => alert(error.message));
    }, []);
    
 
    


    return (
        <ContextPost.Provider value={{userPostsArray, setUserPostsArray}}>
            <TimelineHeader>
                <h1>linkr</h1>

                <DropdownMenu>
                    <IoIosArrowDown />
                    <UserAvatar src="https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/users/529/avatar" />
                </DropdownMenu>
            </TimelineHeader>

            <MainContainer>
                <ContainerHeader>
                    <h1>timeline</h1>
                </ContainerHeader>

                <ContainerPosts>

                    <PostsList />

                    <TrendingWords>
                        <h2> trending </h2>
                        <ul>
                            <li># hashtag 1</li>
                            <li># hashtag 2</li>
                            <li># hashtag 3</li>
                            <li># hashtag 4</li>
                        </ul>
                    </TrendingWords>
                </ContainerPosts>

            </MainContainer>
        </ContextPost.Provider>
    );
}