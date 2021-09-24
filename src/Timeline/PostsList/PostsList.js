import NewPost from "../NewPost/NewPost.js";

import { AllPostsList, Posts, StillLoading } from "./PostsList_style.js"

import SinglePost from "./SinglePost.js";


<<<<<<< HEAD

export default function PostsList({ showList, avatar, postsArray, render }) {

   
    if (showList === false) {
        return (
            <AllPostsList>
                <StillLoading > <h1>loading....</h1></StillLoading>
            </AllPostsList>
        );
=======
export default function PostsList({ showList, avatar, postsArray, render, postTipo}) {
    
    
    if (showList === false ) {
            return(
                <AllPostsList>
                    <StillLoading > <h1>Loading...</h1></StillLoading>
                </AllPostsList>
            );
>>>>>>> main
    }
    else {
        if (render === "my posts") {

            return (
                <>
<<<<<<< HEAD
                    <AllPostsList>
                        <Posts postsArray={postsArray}>

                            {postsArray.map((post) =>
                                
                                <SinglePost post={post} key={post.repostCount===0? post.id:post.repostId} />)
                            }
                        </Posts>
                    </AllPostsList>
=======
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
>>>>>>> main
                </>
            );
        }
        if (render === "timeline") {
            return (
                <>
                    
                    <AllPostsList>
                        
                            <NewPost avatar={avatar} />
                            <Posts postsArray={postsArray}>

                                {postsArray.map((post) =>
                                    <SinglePost post={post} key={post.repostCount===0? post.id:post.repostId} />)
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