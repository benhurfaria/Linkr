import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import { getHashtag} from "../services/api/Api";
import { LoggedUser } from "../services/contexts/LoggedUser";
import { Sharp, SharpList, TrendingTitle, Border, Trending } from './style_Hashtags'

export default function Hashtags() {
    const [hashtags, setHashtags] = useState([])
    const {loggedUser } = useContext(LoggedUser)

    useEffect(() => {
       
        const config = {
            headers: {
                Authorization: `Bearer ${loggedUser.token}`
            }
        }

        const promise = getHashtag(config);
        promise.then(res => {
            setHashtags(res.data.hashtags)
        })
    }, [])

    return (
        < Trending >
            <TrendingTitle>trending</TrendingTitle>
            <Border></Border>
            <SharpList>
                {hashtags.map((hashtag, index) => <Link to={`/hashtag/${hashtag.name}`} key={index}>
                    <Sharp key={hashtag.id}># {hashtag.name}</Sharp>
                </Link>)}
            </SharpList>
        </ Trending >
    );
}

