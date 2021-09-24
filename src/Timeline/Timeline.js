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
        setLoading(true)
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
        if (subType === "my posts") {
            const params = QueryString.stringify({ limit: 1 })
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

    }, [loggedUser, subType]);

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
            getUserPosts(requestConfig, loggedUser.id, params)
                .then(updatePostsArray)
                .catch(() => alert("Houve uma falha ao obter os posts, por favor atualize a página"));
        }


    }
    function loadingPost() {
        return loading ? <></> : <LoaderPosition><Loader type="TailSpin" color="#00BFFF" height={80} width={80} /></LoaderPosition>
    }

    return (
        <>
            <ContextPost.Provider value={{ postsArray, setPostsArray }}>
                <Topbar />
<<<<<<< HEAD
                <MainContainer style={{ height:"5000px ", overflowY: "auto"}} >
=======
                <MainContainer style={{ height: "max-content", overflow: "auto" }} >
>>>>>>> fix/Likes
                    <ContainerHeader>
                        <h1>{`${subType}`}</h1>
                    </ContainerHeader>

                    <InfiniteScroll pageStart={0}
                        loadMore={() => getMorePost({ limit: postsArray.length + 1 })}
                        hasMore={true || false}
                        loader={loadingPost()}
                        useWindow={false}
                        
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

