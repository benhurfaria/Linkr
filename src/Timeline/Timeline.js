import React, { useState } from "react";
import PostsList from "./PostsList.js";

import { MainContainer, ContainerPosts } from "./Timeline_style.js";
import { ContextPost } from '../services/contexts/ContextPost.js';
import Hashtags from '../Hashtags/Hashtags'
import Topbar from "../Topbar/Topbar.js";

export default function Timeline() {
    const [userPostsArray, setUserPostsArray] = useState([""]);

    return (
        <ContextPost.Provider value={{ userPostsArray, setUserPostsArray }}>
            <Topbar/>
            <MainContainer>
                <ContainerPosts>
                   <PostsList />
                   <Hashtags />
                </ContainerPosts>
            </MainContainer>
        </ContextPost.Provider>
    );
}