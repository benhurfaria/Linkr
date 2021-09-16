import { NewPostFrame, NewPostForm, NewPostURL, NewPostComment, PostLeftPanel } from "./NewPost_style.js";
import { UserAvatar } from "./Timeline_style.js";
import { useState, useContext } from "react";
import { mandarPost } from '../services/api/Api';
import { ContextPost } from "../services/contexts/ContextPost.js";

export default function NewPost() {
    const [urlLink, setUrlLink] = useState("");
    const [texto, setTexto] = useState("");
    const [status, setStatus] = useState("Publicar");
    const [cor, setCor] = useState("");
    const [disable, setDisable] = useState("");
    const {userPostsArray, setUserPostsArray} = useContext(ContextPost);
    
    
    const config = {
        headers:{
            Authorization: `Bearer 1b939c76-c0bc-48ae-979c-d1f020d74be6`
        }
    };

    function Postagem(event){
        event.preventDefault();
        const body = {
            text: texto,
            link: urlLink
        };
        if(urlLink === "") return alert("preencha o link");
        
        if(status === "Publicar"){
            setStatus("Publicando...");
            setCor("desabilitar");
            setDisable("unable");
            mandarPost(body, config, setUrlLink, setTexto, setStatus, setCor, setDisable, setUserPostsArray, userPostsArray);
        }
        
    }

    return (
        <NewPostFrame>
            <PostLeftPanel>
                <UserAvatar src={`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/users/529/avatar`} alt="old man meme" />
            </PostLeftPanel>
            <NewPostForm onSubmit={Postagem}>
                <h2> O que você tem pra favoritar hoje?</h2>

                <NewPostURL required type="url" placeholder="http://..." value={urlLink} onChange={e => setUrlLink(e.target.value)} disabled = {`${disable}`}/>
                <NewPostComment type="text" placeholder="Comente aqui sobre sua publicação" value={texto} onChange={e => setTexto(e.target.value)} disabled={`${disable}`}/>

                <button className={`${cor}`} type="submit" > {status} </button>
            </NewPostForm>
        </NewPostFrame>
    );
}