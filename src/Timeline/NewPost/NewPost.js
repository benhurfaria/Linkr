import { NewPostFrame, NewPostForm, NewPostURL, NewPostComment, PostLeftPanel } from "./NewPost_style.js";
import { UserAvatar } from "../Timeline_style.js";
import { useState, useContext } from "react";
import { mandarPost } from '../../services/api/Api.js';
import { ContextPost } from "../../services/contexts/ContextPost.js";
import { LoggedUser } from "../../services/contexts/LoggedUser.js";

export default function NewPost() {
    const [urlLink, setUrlLink] = useState("");
    const [texto, setTexto] = useState("");
    const [status2, setStatus2] = useState({disable: "", cor: "", status: "Publicar"});
    const {postsArray, setPostsArray} = useContext(ContextPost);
    const { loggedUser } = useContext(LoggedUser);
    
    const token = loggedUser.token;

    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    };
   
    function Postagem(event){
        event.preventDefault();
        const body = {
            text: texto,
            link: urlLink
        };
        if(urlLink === "") return alert("preencha o link");
        
        if(status2.status === "Publicar"){
            setStatus2({disable: "unable", cor: "desabilitar", status:"Publicando..."});
            mandarPost(body, config, setUrlLink, setTexto, setStatus2, setPostsArray, postsArray);
        }
        
    }

    return (
        <NewPostFrame>
            <PostLeftPanel>
                <UserAvatar src={loggedUser.avatar} alt="old man meme" />
            </PostLeftPanel>
            <NewPostForm onSubmit={Postagem}>
                <h2> O que você tem pra favoritar hoje?</h2>

                <NewPostURL required type="url" placeholder="http://..." value={urlLink} onChange={e => setUrlLink(e.target.value)} disabled = {`${status2.disable}`}/>
                <NewPostComment type="text" placeholder="Comente aqui sobre sua publicação" value={texto} onChange={e => setTexto(e.target.value)} disabled={`${status2.disable}`}/>

                <button className={`${status2.cor}`} type="submit" > {status2.status} </button>
            </NewPostForm>
        </NewPostFrame>
    );
}