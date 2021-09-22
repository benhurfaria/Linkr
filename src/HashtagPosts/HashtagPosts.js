import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

import PostsList from "../Timeline/PostsList/PostsList";
import Hashtags from '../Hashtags/Hashtags'
import { TimelineHeader, DropdownMenu, UserAvatar, MainContainer, ContainerHeader, ContainerPosts } from "../Timeline/Timeline_style.js";

import { LoggedUser } from '../services/contexts/LoggedUser.js';
import { ContextPost } from '../services/contexts/ContextPost.js';
import { getHashtagPosts  } from "../services/api/Api.js";


export default function HashtagPosts() {
    const { loggedUser } = useContext(LoggedUser);
    const [postsArray, setPostsArray] = useState([]);
    const [postsLoaded, setPostsLoaded] = useState(false);
    const hashtagParam = useParams();
    
    function updatePostsArray(response) {
        if (response.data.posts.length < 1) {
            alert("Nenhum post encontrado");
            return;
        }
        console.log(response.data);
        setPostsArray(response.data.posts);
        setPostsLoaded(true);
    };

    useEffect(() => {
        const requestConfig = {
            headers: {
                Authorization: `Bearer ${loggedUser.token}`
            }
        };
        getHashtagPosts(requestConfig, hashtagParam.hashtagid)
            .then(updatePostsArray)
            .catch(() => alert("Houve uma falha ao obter os posts, por favor atualize a página"));
    },[loggedUser.token, hashtagParam]);
    
    return (
        <>
            <ContextPost.Provider value={{ postsArray, setPostsArray }}>
                <TimelineHeader>
                    <h1>linkr</h1>

                    <DropdownMenu>
                        <IoIosArrowDown />
                        <Link to="/my-posts">
                            <UserAvatar src={loggedUser.avatar} />
                        </Link>
                    </DropdownMenu>
                </TimelineHeader>
                <MainContainer>
                    <ContainerHeader>
                        <h1>{`#${hashtagParam.hashtagid}`}</h1>
                    </ContainerHeader>
                    <ContainerPosts>
                        <PostsList showList={postsLoaded} avatar={loggedUser.avatar} postsArray={postsArray} render="hashtag posts" />
                        <Hashtags />
                    </ContainerPosts>
                </MainContainer>
            </ContextPost.Provider>
        </>
    );
}