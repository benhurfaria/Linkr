import axios from "axios";

function signUp(body, setDisabled) {
    const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/sign-up", body);
    promise.catch(err => {
        setDisabled(false)
        if (err.response.status === 403) {
            alert("Email já cadsatrado!")
        }
        if(err.response.status === 400){
            alert('Dados inseridos são invalídos!')
        }

    })
    return promise
}

function mandarPost(body, config, setUrlLink, setTexto, setStatus, setCor, setDisable, setUserPostsArray, userPostsArray){
    axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/posts", body, config)
            .then(res =>{
                setUrlLink("");
                setTexto("");
                setStatus("Publicar");
                setCor("");
                setDisable("");
                setUserPostsArray([res.data.post, ...userPostsArray]);
            })
            .catch(err =>{
                alert("Houve um erro ao publicar seu link");
                setUrlLink("");
                setTexto("");
                setStatus("Publicar");
                setCor("");
                setDisable("");
            });
    
}


function login(body, setDisabled) {
    const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/sign-in', body);
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
}


export { signUp, login, mandarPost }
