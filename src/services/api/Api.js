import axios from "axios";

function signUp(body, setDisabled) {
    const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr/sign-up", body);
    promise.catch(err => {
        setDisabled(false);
        if (err.response.status === 403) {
            alert("Email já cadsatrado!")
        };
        if(err.response.status === 400){
            alert('Dados inseridos são invalídos!');
        };
    })
    return promise;
}
;
function login(body, setDisabled) {
    const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr/sign-in', body);
    promise.catch(err => {
        setDisabled(false)
        if (err.response.status === 401) {
            alert('Usuário/senha incorretos');
        }
        if (err.response.status === 400) {
            alert('Dados inseridos são invalídos!');
        }
        if (err.response.status === 403) {
            alert("Usuario não encontrado!");
        }
    })
    return promise;
};

function getHashtag( config){
    const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr/hashtags/trending", config);
    return promise;
};

export { signUp, login, getHashtag }