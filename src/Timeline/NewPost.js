import { NewPostFrame, NewPostForm, NewPostURL, NewPostComment } from "./style_NewPost.js";
import { UserAvatar } from "./style_Timeline.js";
import oldManMeme from "../assets/images/oldman_meme.png";


export default function NewPost() {

    const testComment =
    `Muito irado esse link falando de #javascript
outra linha \n mais uma \ntexto grande sentenças longas e compridas`;

    return (
        <NewPostFrame>
            <UserAvatar src={oldManMeme} alt="old man meme" />

            <NewPostForm>
                <h2> O que você tem pra favoritar hoje?</h2>

                <NewPostURL type="url" placeholder="http://..." />
                <NewPostComment type="text" value={testComment} />

                <button> Publicar </button>
            </NewPostForm>

        </NewPostFrame>
    );
}