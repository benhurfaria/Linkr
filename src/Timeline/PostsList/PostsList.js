import NewPost from "./NewPost/NewPost.js";

import { AllPostsList, Posts, StillLoading } from "./PostsList_style.js"

import SinglePost from "./SinglePost.js";

export default function PostsList({ showList, avatar, allPostsArray }) {
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
                        <SinglePost key={post.id} post={post} />)
                    }
                </Posts>
            </AllPostsList>
        </>
    );
}