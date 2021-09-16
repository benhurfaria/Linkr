import { UserAvatar } from "./Timeline_style.js";
import { PostLeftPanel } from "./NewPost_style.js";
import { Post, PostContent, PostPreview, PreviewInfo } from "./PostsList_style.js";

import ReactHashtag from "react-hashtag";
import { IoIosHeart } from "react-icons/io";

export default function SinglePost({ userPost }) {
    const { id, likes, text, link, linkTitle, linkDescription, linkImage, user } = userPost;

    return (
        <Post key={id}>
            {console.log(userPost)}
            <PostLeftPanel>
                <UserAvatar src={user.avatar} />
                <h1><IoIosHeart /></h1>
                <h2> {likes.length} Likes</h2>
            </PostLeftPanel>
            <PostContent>
                {/* <ReactHashtag> */}
                <h1>{user.username}</h1>
                <h2>{text}</h2>
                <PostPreview>
                    <PreviewInfo>
                        <h1> {linkTitle}</h1>

                        <h2>{linkDescription}</h2>

                        <h3>{link}</h3>

                    </PreviewInfo>
                    {
                        ((linkImage === null) || (linkImage === "")) ? <></> : <img src={linkImage} alt="post preview miniature" />}

                </PostPreview>
            {/*</ReactHashtag>*/}
            </PostContent>

        </Post>
    );
};


