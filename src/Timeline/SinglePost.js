import { Link } from "react-router-dom";
import { UserAvatar } from "./Timeline_style.js";
import { PostLeftPanel } from "./NewPost_style.js";
import { Post, PostContent, PostPreview, PreviewInfo } from "./PostsList_style.js";


import ReactHashtag from "react-hashtag";
import { IoIosHeart } from "react-icons/io";
import reactDom from "react-dom";

export default function SinglePost({ post }) {
    console.log(">>>>>>>>", post);
    const { id, likes, text, link, linkTitle, linkDescription, linkImage, user } = post;

    return (
        <Post key={id}>
            <PostLeftPanel>
                <Link to={`/user/${user.id}`} >
                    <UserAvatar src={user.avatar} />
                </Link>
                <h1><IoIosHeart /></h1>
                <h2> {likes.length} Likes</h2>
            </PostLeftPanel>
            <PostContent>
                {/* <ReactHashtag> */}

                <Link to={`/user/${user.id}`} >{user.username}</Link>

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
                {/* </ReactHashtag> */}
            </PostContent>

        </Post>
    );
};