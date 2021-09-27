import { LoggedUser } from "../services/contexts/LoggedUser";
import { useContext, useEffect, useState} from "react";
import { Button } from "./Follow_style.js";
import { getFollowers, followUser } from "../services/api/Api";

export default function Follow({id}){
    const {loggedUser} = useContext(LoggedUser);
    const [follow, setFollow] = useState(false);
    const [seguidores, setSeguidores] = useState([]);
    const config = {
        headers: {
            Authorization: `Bearer ${loggedUser.token}`
        }
    };
    function verifica(follower){
        if(id.id == follower) {
            return true;
        }
        return false;
    }


    useEffect(()=>{
        getFollowers(config)
            .then(res =>{
                setSeguidores(res.data.users);
                
                console.log(follow); 
            })
    }, []);

    function seguirUsuario(){
        followUser(id, "", config, setFollow, follow)
            .then(()=>{
                setFollow(!follow);
    
            }).catch(()=>{
                alert("não foi possivel seguir");
            });
            
    }

    return (
        <>
        <Button onClick={seguirUsuario} className={follow ? "seguido" : ""}>{
        follow ? "Unfollow" : "Follow"}</Button>
        </>
    );
}