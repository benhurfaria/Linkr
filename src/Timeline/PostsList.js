import NewPost from "./NewPost.js";
import { PostLeftPanel } from "./NewPost_style.js";
import { AllPostsList, Posts, Post, PostContent, PostPreview, PreviewInfo} from "./PostsList_style.js"

import { UserAvatar } from "./Timeline_style.js";

import { IoIosHeart } from "react-icons/io";

import logo_react from "../assets/images/preview_react.png";



export default function PostsList() {

    return (
        <AllPostsList>
            <NewPost />

            <Posts>
                <Post>
                    <PostLeftPanel>
                        <UserAvatar src={`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/users/529/avatar`} />
                        <IoIosHeart />
                        <h1>Likes</h1>
                    </PostLeftPanel>
                    <PostContent>
                        <h1>Juvenal Juvêncio</h1>
                        <h2>Muito maneiro esse tutorial de Material UI com React, deem uma olhada! #react #material</h2>
                        <PostPreview>
                            <PreviewInfo>
                                <h1> Como aplicar o Material UI em um projeto React </h1>

                                <h2>Hey! I have moved this tutorial to my personal blog. Same content, new location. Sorry about making you click through to another page.</h2>

                                <h3>https://medium.com/@pshrmn/a-simple-react-router</h3>

                            </PreviewInfo>
                            <img src={logo_react} alt="miniature preview" />

                        </PostPreview>
                    </PostContent>

                </Post>

                <Post>

                </Post>

                <Post>

                </Post>
            </Posts>
        </AllPostsList>


    );
}