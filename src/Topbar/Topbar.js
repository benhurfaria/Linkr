import {Top, DropdownMenu, UserAvatar, SideBar} from './style_topbar';
import { LoggedUser } from "../services/contexts/LoggedUser";
import { useContext, useState} from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Topbar(){
    const { loggedUser } = useContext(LoggedUser)
    const [seta, setSeta] = useState(false);
    
    
    function alteraSeta(){
        if(seta === false){
            setSeta(true);
        }else{
            setSeta(false);
        }
    }
    
    function limpaStorage(){
        localStorage.clear();
        window.location.href = '/';
        
    }

    return (
        <>
        <Top>
            <h1>linkr</h1>
            <DropdownMenu>
                {seta ?  <IoIosArrowUp onClick={alteraSeta} className="clicavel"/> : <IoIosArrowDown onClick={alteraSeta} className="clicavel"/>}
                <UserAvatar onClick={alteraSeta} src={loggedUser.avatar}/>
            </DropdownMenu>
        </Top>
        {
            seta ? 
            <SideBar>
                <Link to="/my-posts" className="decoration">
                    <h1>My posts</h1>
                </Link>
                <Link to="/my-likes" className="decoration">
                    <h1>My likes</h1>
                </Link>
                <h1 onClick={limpaStorage}>Logout</h1>
            </SideBar> : ""
        }
        </>
    );
};