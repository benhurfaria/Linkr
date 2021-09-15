import axios from "axios";

function signUp(body, setDisabled){
    const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/sign-up", body);
        promise.catch(err => {
            setDisabled(false)
            alert("Email já cadsatrado!")

        })
        return promise
}

export {signUp}