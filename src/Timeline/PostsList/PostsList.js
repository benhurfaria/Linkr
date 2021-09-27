import NewPost from "./NewPost/NewPost.js";
import SinglePost from "./SinglePost.js";

import { AllPostsList, Posts, StillLoading } from "./PostsList_style.js"


export default function PostsList({ showList, avatar, postsArray, render, postTipo}) {
    
    
    if (showList === false ) {
            return(
                <AllPostsList>
                    <StillLoading > <h1>Loading...</h1></StillLoading>
                </AllPostsList>
            );
    }
    else {
        if (render === "timeline") {
            return (
                <>
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
        if (render === "my posts") {

            return (
                <>
                    {
                    postTipo ?
                        <AllPostsList>
                            <Posts postsArray={postsArray}>
                                {postsArray.map((post) =>
                                    <SinglePost post={post} key={post.id} />)
                                }
                            </Posts>
                        </AllPostsList> : 
                        <AllPostsList>
                            <StillLoading > <h1>Você não fez posts</h1></StillLoading>
                        </AllPostsList>
                    }
                </>
            );
        }
        if (render === "userID posts") {
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
        if (render === "hashtag posts") {
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
        if(render === "my likes"){
            return (
                <>
                    {
                        postTipo ?
                        <AllPostsList>
                            <Posts postsArray={postsArray}>
                                {
                                postsArray.map((post) =>
                                    <SinglePost post={post} key={post.id} />)
                                }
                            </Posts>
                        </AllPostsList> :
                        <AllPostsList>
                            <StillLoading > <h1>Você não deu likes</h1></StillLoading>
                        </AllPostsList>
                    }
                </>
            );
        }
    }

}