import NewPost from "./NewPost.js";
import { AllPostsList} from "./PostsList_style.js"




export default function PostsList() {

    return (
        <AllPostsList>
            <NewPost />
        </AllPostsList>
    );
}