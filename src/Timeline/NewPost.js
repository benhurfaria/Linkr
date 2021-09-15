import { style_NewPost } from "./style_NewPost.js";

import { NewPostFrame } from "./style_NewPost.js";
import oldManMeme from "../assets/images/oldman_meme.png";


export default function NewPost() {

    return (
        <NewPostFrame>
                <img src={oldManMeme} alt="old man meme" />

                <form>
                    <h2> O que você tem pra favoritar hoje?</h2>

                    <input type="url" placeholder="http://..." />
                    <input type="text" placeholder="Muito irado...." />
                    <button>
                        Publicar
                    </button>
                </form>

            </NewPostFrame>
    );
}