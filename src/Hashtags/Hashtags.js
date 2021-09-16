import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react/cjs/react.development";
import { getHashtag } from "../services/api/Api";
import { LoggedUser } from "../services/contexts/LoggedUser";
import {Sharp, SharpList} from './style_Hashtags'

export default function Hashtags() {
    const [hashtags, setHashtags]= useState([])
    const { loggedUser } = useContext(LoggedUser)
    
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
        
            <SharpList>
                  {hashtags.map(hashtag => <Link to={`/hashtag/${hashtag.name}`} >
                                                        <Sharp># {hashtag.name}</Sharp>
                                                   </Link>)}  
            </SharpList>
        
    );
}

