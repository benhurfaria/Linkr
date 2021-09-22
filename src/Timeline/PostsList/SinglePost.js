import { Link, useHistory } from "react-router-dom";
import { UserAvatar } from "../Timeline_style.js";
import { PostLeftPanel } from "../NewPost/NewPost_style.js";
import { Post, PostContent, PostPreview, PreviewInfo, ThumbPreview, ModalScreen } from "./PostsList_style.js";
import Modal from "react-modal";
import { useState, useContext } from "react";
import ReactHashtag from "react-hashtag";
import { IoIosTrash } from "react-icons/io";
import Likes from "./Likes/Likes.js";
import {apagarPost} from '../../services/api/Api';
import { LoggedUser } from '../../services/contexts/LoggedUser.js';
import { ContextPost } from '../../services/contexts/ContextPost.js';
export default function SinglePost({ post }) {
    const { id, likes, text, link, linkTitle, linkDescription, linkImage, user } = post;
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { loggedUser } = useContext(LoggedUser);
    const { postsArray, setPostsArray } = useContext(ContextPost);

    const history = useHistory();
    
    function goToHashtag(hashtag) {
        const filteredHashtag = hashtag.substring(1);
        history.push("/hashtag/" + filteredHashtag);
    }

    const config = {
        headers: {
            Authorization: `Bearer ${loggedUser.token}`
        }
    };

    function removerPost(){
        apagarPost(config, id, setIsModalVisible, setPostsArray, postsArray);
    }
    if(loggedUser.username === user.username){
        return(
            <Post key={id}>
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
            <IoIosTrash className="trash" onClick={()=> setIsModalVisible(true)}/>
                <Modal isOpen={isModalVisible} className="modal">
                    <ModalScreen>
                        <h1>Tem certeza que deseja excluir essa publicação?</h1>
                        <div>
                            <div className="naoexcluir" onClick={() => setIsModalVisible(false)}>
                                Não, voltar
                            </div>
                            <div className="excluir" onClick={() => removerPost()}>
                                Sim, excluir
                            </div>
                        </div>
                    </ModalScreen>
                </Modal>
            </Post >
        );
    }else{
    return (
        
        <Post key={id}>
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
                
        </Post >
        
    );
    }
};

/*{
                (loggedUser.username === user.username) ?
                <>
                <IoIosTrash className="trash" onClick={()=> setIsModalVisible(true)}/>
                <Modal isOpen={isModalVisible} className="modal">
                    <ModalScreen>
                        <h1>Tem certeza que deseja excluir essa publicação?</h1>
                        <div>
                            <div className="naoexcluir" onClick={() => setIsModalVisible(false)}>
                                Não, voltar
                            </div>
                            <div className="excluir" onClick={() => removerPost()}>
                                Sim, excluir
                            </div>
                        </div>
                    </ModalScreen>
                </Modal> </>: ""

            }       */