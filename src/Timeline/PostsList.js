import NewPost from "./NewPost.js";


import { AllPostsList, Posts } from "./PostsList_style.js"

import SinglePost from "./SinglePost.js";

export default function PostsList({ avatar, userPostsArray }) {
    return (
        <AllPostsList>
            <NewPost />

            <Posts userPostsArray={userPostsArray}>
                {userPostsArray.map((userPost) =>
                    <SinglePost userPost={userPost} />
                )
                };
            </Posts>
        </AllPostsList>
    );
}