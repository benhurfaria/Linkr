import { Post } from "./PostsList_style.js";

export default function Postagem({ props }) {

    return (
        <Post>

            <h6>{props.id}</h6>
        </Post>
    );
};