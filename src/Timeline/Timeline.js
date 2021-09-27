import React, { useState, useEffect, useContext } from "react";
import PostsList from "./PostsList/PostsList.js";
import { MainContainer, ContainerHeader, ContainerPosts, LoaderPosition } from "./Timeline_style.js";
import Hashtags from '../Hashtags/Hashtags'
import InfiniteScroll from "react-infinite-scroller";
import Loader from "react-loader-spinner";
import Topbar from "../Topbar/Topbar.js";
import { LoggedUser } from '../services/contexts/LoggedUser.js';
import { ContextPost } from '../services/contexts/ContextPost.js';
import { getAllPosts, getStoredUser, getUserPosts, getMyLikes } from "../services/api/Api.js";

import QueryString from "qs";


export default function Timeline({ subType }) {
    const { loggedUser } = useContext(LoggedUser);
    const [postsArray, setPostsArray] = useState([]);
    const [postsLoaded, setPostsLoaded] = useState(false);
    const [loading, setLoading] = useState(true)
    const [postTipo, setPostTipo] = useState(false);

    function updatePostsArray(response) {
        if (response.data.posts.length < 1) {
            setPostTipo(false);
            return;
        }
        setPostsArray(response.data.posts);
        setPostTipo(true);
        setPostsLoaded(true);
        setLoading(true)
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
        if (subType === "my likes") {
            const params = QueryString.stringify({ limit: 10 })
            setPostsArray([]);
            getMyLikes(requestConfig, params)
            .then(updatePostsArray)
                .catch(() => alert("Houve uma falha ao obter os posts, por favor atualize a página"));
        }
    }, [loggedUser, subType,]);
    function getMorePost(params) {
        setLoading(false)
        const strParams = QueryString.stringify(params)
        const requestConfig = {
            headers: {
                Authorization: `Bearer ${getStoredUser().token}`
            }
        };
        if (subType === "timeline") {
            getAllPosts(requestConfig, strParams)
                .then(updatePostsArray)
                .catch(() => alert("Houve uma falha ao obter os posts, por favor atualize a página"));
        }
        if (subType === "my posts") {
            getUserPosts(requestConfig, loggedUser.id, strParams)
                .then(updatePostsArray)
                .catch(() => alert("Houve uma falha ao obter os posts, por favor atualize a página"));
        }
        if (subType === "my likes") {
            setPostsArray([]);
            getMyLikes(requestConfig, params)
            .then(updatePostsArray)
                .catch(() => alert("Houve uma falha ao obter os posts, por favor atualize a página"));
        }

    }
    function loadingPost() {
        return loading ? <></> : 
        <LoaderPosition><Loader type="TailSpin" color="#6d6d6d" height={60} width={60} />Loading more posts...</LoaderPosition>
    }

    return (
        <>
            <ContextPost.Provider value={{ postsArray, setPostsArray }}>
                <Topbar />


                <MainContainer style={{ height:"calc(max-content) ", overflowY: "auto"}} >
                    <ContainerHeader>
                        <h1>{`${subType}`}</h1>
                    </ContainerHeader>

                    <InfiniteScroll pageStart={0}
                        loadMore={() => getMorePost({ limit: postsArray.length + 10 })}
                        hasMore={true || false}
                        loader={loadingPost()}
                        threshold={10}
                        
                        >
                        <ContainerPosts>
                            <PostsList showList={postsLoaded} avatar={loggedUser.avatar} postsArray={postsArray} render={subType} postTipo={postTipo}/>
                            <Hashtags />
                        </ContainerPosts>
                    </InfiniteScroll>

                </MainContainer>
            </ContextPost.Provider>
        </>
    );
}

