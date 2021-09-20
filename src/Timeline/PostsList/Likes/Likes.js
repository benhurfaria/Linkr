import { useEffect,  useState } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip'
import { useContext } from 'react';
import { LoggedUser } from '../../../services/contexts/LoggedUser';
import { giveLike, dislike } from '../../../services/api/Api';
//import { LikeObj, Liked,NotLiked, Button, Counter} from './style_Likes'

export default function Likes({ likes, id }) {
    
    const [liked, setLiked] = useState(false)
    const { loggedUser } = useContext(LoggedUser);
    const [likesCounter, setLikesCounter] = useState(likes.length);
    const [likesTip, setLikesTip] = useState([])
    useEffect(() => {
       
            likes.map(like => likesTip.push({ userId: like["user.id"], username: like["user.username"] }))
        likesTip.forEach(like => {
            if (like.id === loggedUser.id) {
                setLiked(true)
            }
        })
        
        
    }, [likes,  loggedUser])

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
            const promise = giveLike(postId, config, body)
            promise.then(res => {
                setLikesTip(res.data.post.likes)
                //console.log(likesTip)
                setLikesCounter(res.data.post.likes.length)
            })
            console.log(likesTip, id)

        } else {
            setLiked(false)
            //setLikesCounter(likesCounter-1)
            const promise = dislike(postId, config, body)
            promise.then(res => {
                setLikesTip(res.data.post.likes)
                //console.log(likesTip)
                setLikesCounter(res.data.post.likes.length)
            })
            console.log(likesTip, id)
        }
    }

    function peoplesLikes() {
        switch (likesTip.length) {
            case 0:
                return undefined;
            case 1:
                return `${likesTip[0].username}`;
            case 2:
                return `${likesTip[0].username}, ${likesTip[1].username}`;
            default:
                return `${likesTip[0].username}, ${likesTip[1].username} e mais ${likesTip.length - 2} 
                    pessoa${likesTip.length === 3 ? '' : "s"} curti${likesTip.length === 3 ? 'u' : "ram"}`;
        }
    }
    return (
        <>

            <LikeObj data-tip='' data-for={`${id}`}>
                <Button key={id} type='button' onClick={like} >
                    {liked ? <Liked ><BsHeartFill /> </Liked> : <NotLiked ><BsHeart /></NotLiked>}
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
`
const LikeObj = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #171717;
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
    background-color: #171717;
    height: 30px;
    width: 60px;
`
const Counter = styled.div`
    color: #ffffff;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
`