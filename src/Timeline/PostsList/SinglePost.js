import { Link, useHistory } from "react-router-dom";
import { UserAvatar } from "../Timeline_style.js";
import { PostLeftPanel } from "../NewPost/NewPost_style.js";
import { Post, PostContent, PostPreview, PreviewInfo, ThumbPreview } from "./PostsList_style.js";
import PlayerTube from "./PlayerTube";
import ReactHashtag from "react-hashtag";
//import { IoIosHeart } from "react-icons/io";
import Likes from "./Likes/Likes.js";

export default function SinglePost({ post }) {
    const { id, likes, text, link, linkTitle, linkDescription, linkImage, user } = post;

    const history = useHistory();

    function goToHashtag(hashtag) {
        const filteredHashtag = hashtag.substring(1);
        history.push("/hashtag/" + filteredHashtag);
    }
    console.log(link);
    return (
        <Post key={id} className={link.includes("youtube.com") ? "ajustaAltura" : ""}>
            <PostLeftPanel>
                <Link to={`/user/${user.id}`} >
                    <UserAvatar src={user.avatar} />
                </Link>
                <h1><Likes key={id} likes={likes} id={id} /></h1>

            </PostLeftPanel>
            <PostContent>
                <Link to={`/user/${user.id}`} >{user.username}</Link>

                <h2><ReactHashtag onHashtagClick={goToHashtag}>
                    {text}
                </ReactHashtag></h2>

                {/* {link.includes("youtube.com")?
                <>
                <PlayerTube link={link}/>
                </>
                : */}

                <PostPreview>
                    {link.includes("youtube.com") ?
                        <>
                            <PlayerTube link={link} />
                        </> :
                    <>
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
                    </>
                    }
                </PostPreview>

            </PostContent>

        </Post >
    );
};