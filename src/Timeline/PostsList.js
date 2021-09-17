import NewPost from "./NewPost.js";

import { AllPostsList, Posts, StillLoading } from "./PostsList_style.js"
import Hashtags from "../Hashtags/Hashtags.js";
import SinglePost from "./SinglePost.js";

export default function PostsList({ showList, avatar, userPostsArray }) {
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
                <Posts userPostsArray={userPostsArray}>
                    {userPostsArray.map((userPost) =>
                        <SinglePost userPost={userPost} />)
                    }
                </Posts>
            </AllPostsList>
            <Hashtags />
        </>
    );
}