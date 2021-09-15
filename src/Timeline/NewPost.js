import { NewPostFrame, NewPostForm, NewPostURL, NewPostComment, PostLeftPanel } from "./NewPost_style.js";
import { UserAvatar } from "./Timeline_style.js";



export default function NewPost() {

    return (
        <NewPostFrame>
            <PostLeftPanel>
                <UserAvatar src={`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/users/529/avatar`} alt="old man meme" />
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