import axios from 'axios';

import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

import PostsList from "./PostsList.js";

import { TimelineHeader, DropdownMenu, UserAvatar, MainContainer, ContainerHeader, ContainerPosts, TrendingWords } from "./Timeline_style.js";


const SIGNIN_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/sign-in";
const mockUserSignIn = { email: "ruffles@mail.com", password: "potato" };


export default function Timeline() {
    const [loggedUserInfo, setLoggedUserInfo] = useState(
        { token: "", user: { id: -1, email: "", username: "", avatar: "" } });
    
    const [userPostsURL, setUserPostsURL] = useState("");

    const [userPostsArray, setUserPostsArray] = useState([]);
    
    function updateUserInfo(received) {
        setLoggedUserInfo(received.data);
        setUserPostsURL(`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/users/${loggedUserInfo.user.id}/posts`);
    }

    useEffect(() => {
        const userInfoPromise = axios.post(SIGNIN_URL, mockUserSignIn);
        userInfoPromise.then(updateUserInfo);
        userInfoPromise.catch((error) => alert(error));

        console.log("end of getUserInfo");
    }, []);

    useEffect(() => {
        const userPostPromise = axios.post(userPostsURL, {Authorization: `Bearer ${loggedUserInfo.token}`});

        userPostPromise.then((response) => setUserPostsArray([...userPostsArray, response.data]));
        
        userPostPromise.catch(alert);
    }, []);
    
 
    console.log("after login user info:", loggedUserInfo);
    console.log("USER_ID:" + loggedUserInfo.user.id);
    console.log("posts from user:" )


    return (
        <>
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
        </>
    );
}