import { Link, useHistory } from "react-router-dom";

import { UserAvatar } from "../../Topbar/style_topbar.js";
import { PostLeftPanel } from "./NewPost/NewPost_style.js";
import PlayerTube from "./PlayerTube";

import { Post, PostContent, PostPreview, PreviewInfo, ThumbPreview, ModalScreen } from "./PostsList_style.js";

import ReactHashtag from "react-hashtag";
import { BsPencil } from 'react-icons/bs';
import { IoIosTrash } from "react-icons/io";
import Likes from "./Likes/Likes.js";
import Modal from "react-modal";
import { useEffect, useRef, useState, useContext } from "react";
import { mudarDescricaoPost, apagarPost} from "../../services/api/Api.js";
import { LoggedUser } from '../../services/contexts/LoggedUser.js';
import { ContextPost } from '../../services/contexts/ContextPost.js';

export default function SinglePost({ post }) {
    const { id, likes, text, link, linkTitle, linkDescription, linkImage, user } = post;

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [texto, setTexto] = useState(text);
    const [edit, setEdit] = useState(false);
    const [inputHabilitado , setInputHabilitado] = useState(false);
    const [textoSucesso , setTextoSucesso] = useState(text);
    const { loggedUser } = useContext(LoggedUser);
    const { postsArray, setPostsArray } = useContext(ContextPost);
    const refInput = useRef();

    useEffect (()=>{
        if(edit) refInput.current.focus();
    }, [edit]);
    
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
        apagarPost(config, id, setIsModalVisible, setPostsArray, postsArray)
            .then(res => {
                setIsModalVisible(false);
                const posts = postsArray.filter((arr) => arr.id !== id);
                setPostsArray( posts);
            })
            .catch(err =>{
                alert("Não foi possivel excluir esse post")
                setIsModalVisible(false);
            });
    }

    function editPost(event){
        setInputHabilitado(true);
        event.preventDefault();
        const {textDescription } = event.target.elements;
        mudarDescricaoPost(id, {"text": textDescription.value}, config, setInputHabilitado, setEdit, setTexto, text,edit, setTextoSucesso);
    }
    function escKey(event){
        if(event.key === "Escape"){
            setEdit(!edit);
            setTexto(text);
        }
    }
    function mudaParaEdicao(){
        setEdit(!edit);
        setTexto(textoSucesso); 
    }
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
                {edit && loggedUser.username === user.username ?
                    <form onSubmit={editPost}>
                        <input type="text" name="textDescription" value={texto} ref={refInput} onChange={event => setTexto(event.target.value)} disabled={inputHabilitado} onKeyDown={event => escKey(event)}>
                        </input>
                    </form>
                  : 
                    <h2><ReactHashtag onHashtagClick={goToHashtag}>
                        {textoSucesso}
                    </ReactHashtag></h2>
                }

                <PostPreview className={link.includes("youtube.com") ? "" : "altura"}>
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
                        { linkImage && <img src={linkImage} alt="thumbnail" /> }
                    </ThumbPreview>
                    </>
                    }
                </PostPreview>

            </PostContent>

            {loggedUser.username === user.username &&
                (<>
                <BsPencil className="pencil" onClick={mudaParaEdicao}/>
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
                </>)}
        </Post >
    );

};
