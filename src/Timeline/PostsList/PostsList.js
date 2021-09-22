import NewPost from "../NewPost/NewPost.js";

import { AllPostsList, Posts, StillLoading } from "./PostsList_style.js"

import SinglePost from "./SinglePost.js";


export default function PostsList({ showList, avatar, postsArray, render }) {
    

    if (showList === false) {
        return (
            <AllPostsList>
                <StillLoading > <h1>loading....</h1></StillLoading>
            </AllPostsList>
        );
    }

    else {
        if (render === "my posts") {
            return (
                <>
                    <AllPostsList>
                        <Posts postsArray={postsArray}>
                            {postsArray.map((post) =>
                                <SinglePost post={post} key={post.id} />)
                            }
                        </Posts>
                    </AllPostsList>
                </>
            );
        }
        if (render === "timeline") {
            return (
                <>
                    {console.log(postsArray)}
                    <AllPostsList>
                        <NewPost avatar={avatar} />
                        <Posts postsArray={postsArray}>
                            {postsArray.map((post) =>
                                <SinglePost post={post} key={post.id} />)
                            }
                        </Posts>
                    </AllPostsList>
                </>
            );
        }
    }

}