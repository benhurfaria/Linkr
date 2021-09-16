

import React, { useState } from "react";


import PostsList from "./PostsList.js";

import { MainContainer, ContainerPosts} from "./Timeline_style.js";
import { ContextPost } from '../services/contexts/ContextPost.js';



export default function Timeline() {
    const [userPostsArray, setUserPostsArray] = useState([""]);

    
    return (
        <ContextPost.Provider value={{userPostsArray, setUserPostsArray}}>
            

            <MainContainer>
                

                <ContainerPosts>

                    <PostsList />

                    
                </ContainerPosts>

            </MainContainer>
        </ContextPost.Provider>
    );
}