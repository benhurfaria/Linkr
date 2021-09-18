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
    const [likesCounter, setLikesCounter] = useState(0);
    const [likesTip, setLikesTip] = useState({})

    const postObj = {
        posts: [
            {
                id: 329,
                text: "PIMP IT BABY! #potato #abacatenaoehavocado #guacamoleismurder",
                link: "https://stackabuse.com/pimp-my-terminal-an-introduction-to-oh-my-zsh/",
                linkTitle: "Pimp my Terminal - An Introduction to \"Oh My Zsh\"",
                linkDescription: "In this introductory guide, we'll lay the foundations of using Oh My Zsh to pimp and customize your UNIX terminal.",
                linkImage: "",
                user: {
                    id: 4,
                    username: "ramiro",
                    avatar: "https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr/users/4/avatar"
                },
                likes: [
                    {
                        id: 573,
                        userId: 78,
                        postId: 329,
                        createdAt: "2021-09-17T22:22:17.817Z",
                        updatedAt: "2021-09-17T22:22:17.817Z",
                        userid: 78,
                        userusername: "Marcio Cunha"
                    }
                ],
                commentCount: 0,
                repostCount: 0
            }

        ]
    }



    function like() {
        const postId = 329;
        const body = ''
        const config = {
            headers: {
                Authorization: `Bearer ${loggedUser.token}`
            }
        };

        if (liked === false) {
            setLiked(true)


            const promise = giveLike(postId, config, body)

            promise.then(res => {
                setLikesTip(res.data.post.likes)
                // console.log(likesTip)
                setLikesCounter(res.data.post.likes.length)
            })




        } else {
            setLiked(false)
            //setLikesCounter(likesCounter-1)
            const promise = dislike(postId, config, body)
            promise.then(res => {
                setLikesTip(res.data.post.likes)
                //console.log(likesTip)
                setLikesCounter(res.data.post.likes.length)
            })
            likesTip.forEach(element => {
                console.log(element)
            });
        }
    }
    return (

        <>

            <LikeObj data-tip data-for='registerTip'>
                <Button type='button' onClick={like} >
                    {liked ? <Liked><BsHeartFill /> </Liked> : <NotLiked><BsHeart /></NotLiked>}
                </Button>
                <Counter>{likesCounter}</Counter>

            </LikeObj>
            <StyledTooltip id='registerTip' place='bottom' effect='solid' backgroundColor='rgba(255, 255, 255, 0.9)' textColor='#505050' >
                {liked ? likesTip.forEach(e => e.username) : ``}
                {/* {liked ? `${loggedUser.username} e outras ${likesTip.length - 1} pessoa(s) cutiram ` : `teste`} */}
            </StyledTooltip>
        </>
    );
}
const StyledTooltip = styled(ReactTooltip)`
  font-family: 'Lato', sans-serif;
  background-color: rgba(255, 255, 255, 0.9) ;
  color: #505050;
`
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