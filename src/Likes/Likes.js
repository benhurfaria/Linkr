import { useState } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip'
import { useContext } from 'react';
import { LoggedUser } from '../services/contexts/LoggedUser';
import { giveLike, dislike } from '../services/api/Api';


export default function Likes() {
    const [liked, setLiked] = useState(false)
    const { loggedUser } = useContext(LoggedUser);
    //console.log(loggedUser)
    //console.log(loggedUser.token)
    const postObj = {
        posts: [
            {
                "id": 249,
                "text": "haha\n",
                "link": "https://g1.globo.com/ciencia-e-saude/viva-voce/noticia/2020/01/15/como-calcular-a-verdadeira-idade-do-seu-cachorro.ghtml",
                "linkTitle": "Como calcular a verdadeira idade do seu cachorro",
                "linkDescription": "No primeiro ano de vida, os filhotes crescem tão rapidamente que envelhecem o equivalente a 31 anos humanos.",
                "linkImage": "https://s2.glbimg.com/7tn_lc7d43PQAo-LyaBYZsAWhoc=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/U/e/NTegqdSe6SoBAoQDjKZA/cachorro.jpg",
                "user": {
                    "id": 66,
                    "username": "digdiego13",
                    "avatar": "https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr/users/66/avatar"
                },
                "likes": [],
                "commentCount": 0,
                "repostCount": 0
            }
        ]
    }

    const config = {
        headers: {
            Authorization: `Bearer ${loggedUser.token}`
        }
    };
    

    function like() {
        const postId = 66;
       
       
        if (liked === false) {
            setLiked(true)
            
           
            const promise = giveLike(postId, config)
            promise.then(res => console.log(res.data));




        } else {
            setLiked(false)
            const promise = dislike(postId, config)
            promise.then(res=> console.log(res.data))
        }
    }
    return (
        
        <>
        
            <LikeObj data-tip data-for='registerTip'>
                <Button type='button' onClick={like} >
                    {liked ? <Liked><BsHeartFill /> </Liked> : <NotLiked><BsHeart /></NotLiked>}
                </Button>
                <Counter>0</Counter>

            </LikeObj>
            <ReactTooltip id='registerTip'
                place='bottom'
                effect='solid' >
                Teste
            </ReactTooltip>
        </>
    );
}
const LikeObj = styled.div`
    display: flex;
    flex-direction: column;
    
    align-items: center;
    background-color: #151515;

`
const NotLiked = styled.div`
    font-size: 20px;
    color: #ffffff; 
`
const Liked = styled.div`
    color: #AC0000;
    font-size: 20px;
`
const Button = styled.button`
    margin: 0 10px 0 10px;
    border: none;
    background-color: #151515;
    height: 30px;
    width: 60px;
`
const Counter = styled.div`
    color: #ffffff;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
`