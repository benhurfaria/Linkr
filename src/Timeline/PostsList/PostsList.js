import NewPost from "./NewPost/NewPost.js";

import { AllPostsList, Posts, StillLoading } from "./PostsList_style.js"
import { ContextPost } from "../../services/contexts/ContextPost.js";
import SinglePost from "./SinglePost.js";
import { useContext } from "react";

export default function PostsList({ showList, avatar }) {
    const {allPostsArray} = useContext(ContextPost);

    if (showList === false) {
        return (
            <AllPostsList>
                <StillLoading > <h1>loading....</h1></StillLoading>
            </AllPostsList>
        );
    }
    return (
        <>
            <AllPostsList>
                <NewPost avatar={avatar} />
                <Posts allPostsArray={allPostsArray}>
                    {allPostsArray.map((post) =>
                        <SinglePost post={post} />)
                    }
                </Posts>
            </AllPostsList>
        </>
    );
}