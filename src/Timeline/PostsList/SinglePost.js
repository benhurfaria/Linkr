import { Link, useHistory } from "react-router-dom";
import { UserAvatar } from "../Timeline_style.js";
import { PostLeftPanel } from "../NewPost/NewPost_style.js";
import { Post, PostContent, PostPreview, PreviewInfo, ThumbPreview } from "./PostsList_style.js";
import ReactHashtag from "react-hashtag";
import { BsPencil } from 'react-icons/bs'
import Likes from "./Likes/Likes.js";
import { useEffect, useRef, useState, useContext } from "react";
import { mudarDescricaoPost} from "../../services/api/Api.js";
import { LoggedUser } from '../../services/contexts/LoggedUser.js';
export default function SinglePost({ post }) {
    const { id, likes, text, link, linkTitle, linkDescription, linkImage, user } = post;
    
    const history = useHistory();
    const [texto, setTexto] = useState(text);
    const [edit, setEdit] = useState(false);
    const [inputHabilitado , setInputHabilitado] = useState(false);
    const [textoSucesso , setTextoSucesso] = useState(text);
    const { loggedUser } = useContext(LoggedUser);
    const refInput = useRef();

    useEffect (()=>{
        edit && refInput.current.focus();
    }, [edit]);

    function goToHashtag(hashtag) {
        const filteredHashtag = hashtag.substring(1);
        history.push("/hashtag/" + filteredHashtag);
    }

    const config={
        headers:{
            Authorization: `Bearer ${loggedUser.token}`
        }
    };

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
                {edit ?
                    <form onSubmit={editPost}>
                        <input type="text" name="textDescription" value={texto} ref={refInput} onChange={event => setTexto(event.target.value)} disabled={inputHabilitado} onKeyDown={event => escKey(event)}>
                        </input>
                    </form>
                  : 
                    <h2><ReactHashtag onHashtagClick={goToHashtag}>
                        {textoSucesso}
                    </ReactHashtag></h2>
                }
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
            <BsPencil className="pencil" onClick={()=> {
                setEdit(!edit);
                setTexto(textoSucesso);    
            }
            }/>
        </Post >
    );
};