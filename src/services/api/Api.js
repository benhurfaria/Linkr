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

function mandarPost(body, config, setUrlLink, setTexto, setStatus2, setPostsArray, postsArray){
    axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr/posts", body, config)
            .then(res =>{

                setUrlLink("");
                setTexto("");
                setStatus2({disable:"", cor: "", status: "Publicar"});
                setPostsArray([res.data.post, ...postsArray]);
            })
            .catch(err =>{

                alert("Houve um erro ao publicar seu link");
                setUrlLink("");
                setTexto("");
                setStatus2({disable:"", cor: "", status: "Publicar"});
            });
    
};

function login(body, setDisabled) {
    const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr/sign-in', body);
    promise.catch(err => {
        setDisabled(false)
        if (err.response.status === 401) {
           
            alert('Dados inseridos são invalídos!');
        }
        if (err.response.status === 400) {
            alert('Usuário/senha incorretos');
        }
        if (err.response.status === 403) {
            alert('Usuário/senha incorretos');
        }
    })
    return promise;
};

function getHashtag( config){
    const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr/hashtags/trending", config);
    return promise;
};


function giveLike(postId, config, body){
    
    const Url = `https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr/posts/${postId}/like`;
    const promise = axios.post(Url,body, config);
    return promise;
};

function dislike(postId, config, body){
   
    const Url = `https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr/posts/${postId}/dislike`;
   
    const promise = axios.post(Url, body, config);
    return promise;
};

function getUserPosts(configHeader, userID) {
    const USERPOSTS_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr/users/";

    const appendedURL = USERPOSTS_URL + `${userID}/posts`;

    const userPostsPromise = axios.get(appendedURL, configHeader);


    return userPostsPromise;    
}

function getAllPosts(configHeader) {
    const POSTS_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr/posts/";

    const allPostsPromise = axios.get(POSTS_URL, configHeader);

    return allPostsPromise;
}



export { signUp, login, getHashtag, mandarPost, getUserPosts, getAllPosts,  giveLike, dislike }