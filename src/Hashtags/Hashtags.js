import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react/cjs/react.development";
import { getHashtag } from "../services/api/Api";
import { LoggedUser } from "../services/contexts/LoggedUser";
import {Sharp, SharpList} from './style_Hashtags'

export default function Hashtags() {
    const [hashtags, setHashtags]= useState([])
    const { loggedUser } = useContext(LoggedUser)
    //const token = loggedUser.token
    const token = '1b939c76-c0bc-48ae-979c-d1f020d74be6'
    useEffect(() => {
        
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = getHashtag(config);
        promise.then(res => {
            setHashtags(res.data.hashtags)
        })
    }, [token])

    return (
        
            <SharpList>
                  {hashtags.map((hashtag, index) => <Link to={`/hashtag/${hashtag.name}`} key={index}>
                                                        <Sharp key={hashtag.id}># {hashtag.name}</Sharp>
                                                   </Link>)}  
            </SharpList>
        
    );
}

