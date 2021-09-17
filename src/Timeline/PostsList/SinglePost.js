import { Link } from "react-router-dom";

import { UserAvatar } from "../Timeline_style.js";
import { PostLeftPanel } from "./NewPost/NewPost_style.js";
import { Post, PostContent, PostPreview, PreviewInfo, ThumbPreview } from "./PostsList_style.js";

import ReactHashtag from "react-hashtag";
import { IoIosHeart } from "react-icons/io";

export default function SinglePost({ post }) {
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
                <Link to={`/user/${user.id}`} >{user.username}</Link>
                <h2><ReactHashtag onHashtagClick={val => alert(val)}> e com texto normal dentro? #vai? {text} </ReactHashtag> </h2>

                <PostPreview>
                    <PreviewInfo>
                        <a href={link} target="_blank" rel="noreferrer noopener">
                            <h1> {linkTitle}</h1>

                            <h2>{linkDescription}</h2>

                            <h3>{link}</h3>

                        </a>
                    </PreviewInfo>
                    <ThumbPreview >
                        {
                            linkImage ?
                                <img src={linkImage} alt="thumbnail" />
                                :
                                <></>
                        }
                    </ThumbPreview>

                </PostPreview>

            </PostContent>

        </Post>
    );
};