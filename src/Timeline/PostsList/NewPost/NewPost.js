import { NewPostFrame, NewPostForm, NewPostURL, NewPostComment, PostLeftPanel, NewPostFooter, GeoLocation, LocationPin } from "./NewPost_style.js";


import { UserAvatar } from "../../Timeline_style.js"
import { useState, useContext } from "react";
import { mandarPost } from '../../../services/api/Api.js';
import { ContextPost } from "../../../services/contexts/ContextPost.js";
import { LoggedUser } from "../../../services/contexts/LoggedUser.js";

export default function NewPost() {
    const [urlLink, setUrlLink] = useState("");
    const [texto, setTexto] = useState("");
    const [geoLocationActive, setGeoLocationActive] = useState(false);
    const [status2, setStatus2] = useState({ disable: "", cor: "", status: "Publicar" });
    const { postsArray, setPostsArray } = useContext(ContextPost);
    const { loggedUser } = useContext(LoggedUser);

    const token = loggedUser.token;

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };


    function Postagem(event) {
        event.preventDefault();
        const body = {
            text: texto,
            link: urlLink
        };
        if (urlLink === "") return alert("preencha o link");

        if (status2.status === "Publicar") {
            setStatus2({ disable: "unable", cor: "desabilitar", status: "Publicando..." });
            mandarPost(body, config, setUrlLink, setTexto, setStatus2, setPostsArray, postsArray);
        }

    }

    /*
    function enableGeoLocation() {
        setGeoLocationActive(!geoLocationActive);
    }
    */

    function printPosition(receivedPosition) {
        console.log("receivedPosition: ", receivedPosition);
    }

    function positionAccessDenied() {
        alert('positionAccessDenied');
    }

    function permissionGranted(response) {
        const geoLocationSettings = {
            enableHighAccurracy: false, maximumAge: 30 * 1000, timeout: 20 * 1000
        };

        if (response.state === 'granted') {
            console.log("geoqueryresponse: " + response.state);
        }
        else if (response.state === 'prompt') {
            console.log("geoqueryresponse: " + response.state);
            navigator.geolocation.getCurrentPosition(printPosition, positionAccessDenied, geoLocationSettings);
        }
        else if (response.state === 'denied') {
            console.log(response.state);
        }
        response.onchange(console.log);
    }


    function askForGeoLocation() {
        if (!('geolocation' in navigator)) {
            alert("Geolocation not available in this browser");
        }
        else {
            navigator.permissions.query({ name: 'geolocation' })
                .then(permissionGranted)
                .catch(() => console.log("wait for user/browser permission to obtain geoposition"));
        }
    }

    return (
        <NewPostFrame>
            <PostLeftPanel>
                <UserAvatar src={`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/users/529/avatar`} alt="old man meme" />
            </PostLeftPanel>
            <NewPostForm onSubmit={Postagem}>
                <h2> O que você tem pra favoritar hoje?</h2>

                <NewPostURL required type="url" placeholder="http://..." value={urlLink} onChange={e => setUrlLink(e.target.value)} disabled={`${status2.disable}`} />
                <NewPostComment type="text" placeholder="Comente aqui sobre sua publicação" value={texto} onChange={e => setTexto(e.target.value)} disabled={`${status2.disable}`} />


                <NewPostFooter>
                    <GeoLocation onClick={askForGeoLocation} status={geoLocationActive}>
                        <LocationPin />
                        {geoLocationActive ?
                            <h1>Localização ativada</h1>
                            :
                            <h1>Localização desativada</h1>}
                    </GeoLocation>

                    <button className={`${status2.cor}`} type="submit" > {status2.status} </button>
                </NewPostFooter>

            </NewPostForm>
        </NewPostFrame>
    );
}