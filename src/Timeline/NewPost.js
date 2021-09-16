import { NewPostFrame, NewPostForm, NewPostURL, NewPostComment, PostLeftPanel } from "./NewPost_style.js";
import { UserAvatar } from "./Timeline_style.js";

export default function NewPost(avatar) {

    return (
        <NewPostFrame>
            <PostLeftPanel>
                <UserAvatar src={avatar} alt="old man meme" />
            </PostLeftPanel>
            <NewPostForm>
                <h2> O que você tem pra favoritar hoje?</h2>

                <NewPostURL type="url" placeholder="http://..." />
                <NewPostComment type="text" placeholder="Comente aqui sobre sua publicação" />

                <button> Publicar </button>
            </NewPostForm>

        </NewPostFrame>
    );
}