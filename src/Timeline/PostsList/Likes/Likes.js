import { useEffect, useState, useRef } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip'
import { useContext } from 'react';
import { LoggedUser } from '../../../services/contexts/LoggedUser';
import { giveLike, dislike } from '../../../services/api/Api';
import { LikeObj, Liked, NotLiked, Button, Counter } from './style_Likes'
import { peoplesLikes } from './PeoplesLikes';
export default function Likes({ likes, id }) {
    const t = useRef(false)
    const [liked, setLiked] = useState(false)
    const { loggedUser } = useContext(LoggedUser);
    const [likesCounter, setLikesCounter] = useState(likes.length);
    const [likesTip, setLikesTip] = useState([])
    useEffect(() => {
        console.log(likes)
        if (!t) {
            likes.map(like => setLikesTip( [{userId: like.userId,username: like["user.username"] }]))
            
        }
        likes.forEach(like => { if (like.userId === loggedUser.id) setLiked(true) })
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
                {peoplesLikes(likes, likesTip, liked, loggedUser)}
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
