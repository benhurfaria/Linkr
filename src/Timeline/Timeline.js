import React, { useState, useEffect, useContext } from "react";
import PostsList from "./PostsList/PostsList.js";
import { MainContainer, ContainerHeader, ContainerPosts } from "./Timeline_style.js";
import Hashtags from '../Hashtags/Hashtags'
import InfiniteScroll from "react-infinite-scroller";

import Topbar from "../Topbar/Topbar.js";
import { LoggedUser } from '../services/contexts/LoggedUser.js';
import { ContextPost } from '../services/contexts/ContextPost.js';
import { getAllPosts, getStoredUser, getUserPosts } from "../services/api/Api.js";

import QueryString from "qs";

export default function Timeline({ subType }) {
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
                Authorization: `Bearer ${getStoredUser().token}`
            }
        };

        if (subType === "my posts") {
            const params = QueryString.stringify({ limit: 10 })
            setPostsArray([])
            getUserPosts(requestConfig, loggedUser.id, params)
                .then(updatePostsArray)
                .catch(() => alert("Houve uma falha ao obter os posts, por favor atualize a página"));
        }

        if (subType === "timeline") {
            const params = QueryString.stringify({ limit: 10 })
            setPostsArray([])
            getAllPosts(requestConfig, params)
                .then(updatePostsArray)
                .catch(() => alert("Houve uma falha ao obter os posts, por favor atualize a página"));
        }
    }, [loggedUser, subType,]);
    function getMorePost(params) {
        const strParams = QueryString.stringify(params)
        const requestConfig = {
            headers: {
                Authorization: `Bearer ${getStoredUser().token}`
            }
        };
        if(subType === "timeline"){
        getAllPosts(requestConfig, strParams)
            .then(updatePostsArray)
            .catch(() => alert("Houve uma falha ao obter os posts, por favor atualize a página"));
        }
        if(subType === "my posts"){
            getUserPosts(requestConfig, loggedUser.id, params)
                .then(updatePostsArray)
                .catch(() => alert("Houve uma falha ao obter os posts, por favor atualize a página"));
        }

    }

    return (

        <>
            <ContextPost.Provider value={{ postsArray, setPostsArray }}>
                <Topbar />

                <MainContainer  >
                    
                    <InfiniteScroll pageStart={1}
                                    loadMore={() => getMorePost({ limit: postsArray.length + 10 })}
                                    hasMore={true || false}
                                    loader={<div className="loader" key={0}>Loading ...</div>}
                                    threshold={0}
                                             
                    >

                        <ContainerHeader>
                            <h1>{`${subType}`}</h1>
                        </ContainerHeader>
                        <ContainerPosts>

                            <PostsList showList={postsLoaded} avatar={loggedUser.avatar} postsArray={postsArray} render={subType} />

                            <Hashtags />
                        </ContainerPosts>

                    </InfiniteScroll>
                </MainContainer>

            </ContextPost.Provider>
        </>

    );
}