import { useEffect, useState, useRef } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip'
import { useContext } from 'react';
import { LoggedUser } from '../../../services/contexts/LoggedUser';
import { giveLike, dislike } from '../../../services/api/Api';
import { LikeObj, Liked, NotLiked, Button, Counter } from './style_Likes'

export default function Likes({ likes, id }) {
    const t = useRef(false)
    const [liked, setLiked] = useState(false)
    const { loggedUser } = useContext(LoggedUser);
    const [likesCounter, setLikesCounter] = useState(likes.length);
    const [likesTip, setLikesTip] = useState([])
    useEffect(() => {
        if (!t) {
            likes.map(like => setLikesTip( [{userId: like["user.id"],username: like["user.username"] }]))
        }
        likes.forEach(like => { if (like["user.id"] === loggedUser.id) setLiked(true) })
    }, [likes, loggedUser])

    function like() {
        const postId = id;
        const body = ''
        const config = {
            headers: {
                Authorization: `Bearer ${loggedUser.token}`
            }
        };
        if (liked === false) {
            setLiked(true)
            StyledTooltip.rebuild();
            const promise = giveLike(postId, config, body)
            promise.then(res => {
                setLikesTip(res.data.post.likes)
                setLikesCounter(res.data.post.likes.length)
                
            })


        } else {
            setLiked(false)
            StyledTooltip.rebuild();
            const promise = dislike(postId, config, body)
            promise.then(res => {
                setLikesTip(res.data.post.likes)
                setLikesCounter(res.data.post.likes.length)
                
            })

        }
    }

    function peoplesLikes() {
        
        
       
        
        if (likes.length !== 0 && likesTip.length === 0) {
            switch (likes.length) {
                case 0:
                    return undefined;
                case 1:
                    if (liked) {
                        return `Você curtiu`
                    } else {
                        return `${likes[0]["user.username"]} curtiu`;
                    }
                case 2:
                    if (liked) {
                        likes = likes.filter(like =>{return like["user.id"] !== loggedUser.id})
                        return `Você  e ${likes[0]["user.username"]} curtiram`;
                    } else {
                        return `${likes[0]["user.username"]} e ${likes[1]["user.username"]} curtiram`;
                    }
                default:
                    if (liked) {
                        likes = likes.filter(like =>{return like["user.id"] !== loggedUser.id})
                        return `Você, ${likes[0]["user.username"]} e mais ${likes.length} 
                    pessoa${likes.length === 3 ? '' : "s"} curti${likes.length === 3 ? 'u' : "ram"}`;
                    } else {
                        return `${likes[0]["user.username"]}, ${likes[1]["user.username"]} e mais ${likes.length - 2} 
                    pessoa${likes.length === 3 ? '' : "s"} curti${likes.length === 3 ? 'u' : "ram"}`;
                    }
            }
        } else {
            let likesTip1 = likesTip.filter(like =>{return like.userId !== loggedUser.id})
            
            switch (likesTip.length) {
                case 0:
                    return undefined;
                case 1:
                    if (liked) {
                        return `Você curtiu`
                    } else if(likesTip1.length === 1) {
                        return `${likesTip1[0].username} curtiu`;
                    }
                    break;
                case 2:
                    if (liked) {
                        return `Você  e ${likesTip1[0].username} curtiram`;
                    } else if(likesTip1.length === 2){
                        return `${likesTip1[0].username} e ${likesTip1[1].username} curtiram`;
                    }
                    break;
                default:
                    if (liked) {
                        return `Você, ${likesTip1[0].username} e mais ${likesTip.length - 2} 
                    pessoa${likesTip.length === 3 ? '' : "s"} curti${likesTip.length === 3 ? 'u' : "ram"}`;
                    } else if(likesTip1.length >=3 ){
                        return `${likesTip1[0].username}, ${likesTip1[1].username} e mais ${likesTip.length - 2} 
                    pessoa${likesTip.length === 3 ? '' : "s"} curti${likesTip.length === 3 ? 'u' : "ram"}`;
                    }
                    break;
            }
        }
    }

    function showHeart() {

        if (liked) {
            return <Liked ><BsHeartFill /> </Liked>
        } else {
            return <NotLiked ><BsHeart /></NotLiked>
        }
    }
    return (
        <>

            <LikeObj data-tip='' data-for={`${id}`}>
                <Button key={id} type='button' onClick={like} >
                    {showHeart()}

                </Button>
                <Counter>{likesCounter} likes</Counter>
            </LikeObj>
            <StyledTooltip id={`${id}`} place='bottom' effect='solid' backgroundColor='rgba(255, 255, 255, 0.9)' textColor='#505050' >
                {peoplesLikes()}
            </StyledTooltip>
        </>
    );
}

const StyledTooltip = styled(ReactTooltip)`
  font-family: 'Lato', sans-serif;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 200px;
 
`
// const LikeObj = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     background-color: #171717;
// `
// const NotLiked = styled.div`
//     font-size: 20px;
//     color: #ffffff; 
// `
// const Liked = styled.div`
//     color: #AC0000;
//     font-size: 20px;
// `
// const Button = styled.button`
//     margin: 0 10px 0 10px;
//     border: none;
//     background-color: #171717;
//     height: 30px;
//     width: 60px;
// `
// const Counter = styled.div`
//     color: #ffffff;
//     font-family: 'Lato', sans-serif;
//     font-size: 16px;
// `