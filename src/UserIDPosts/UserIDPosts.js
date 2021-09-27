import { useParams } from "react-router";
import Follow from "../Follow/Follow";


export default function UserIDPosts(){
    const IDParam = useParams();
    return (
        <Follow id={IDParam}/>
    );
}