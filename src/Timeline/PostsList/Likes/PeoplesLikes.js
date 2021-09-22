function peoplesLikes(likes, likesTip, liked, loggedUser) {
        // console.log(loggedUser)
    if (likes.length !== 0 && likesTip.length === 0 ) {
        
        switch (likes.length) {
            case 0:
                return undefined;
            case 1:
                
                if (liked) {
                    likes = likes.filter(like =>{return like.userId !== loggedUser.id})
                    return `Você curtiu`
                } else {
                    
                    return `${likes[0]["user.username"]} curtiu`
                }
                
            case 2:
                if (liked) {
                    likes = likes.filter(like =>{return like.userId !== loggedUser.id})
                    return `Você  e ${likes[0]["user.username"]} curtiram`;
                } else {
                    return `${likes[0]["user.username"]} e ${likes[1]["user.username"]} curtiram`;
                }
            default:
                if (liked) {
                    likes = likes.filter(like =>{return like.userId !== loggedUser.id})
                    return `Você, ${likes[0]["user.username"]} e mais ${likes.length-1} 
                pessoa${likes.length === 3 ? '' : "s"} curtiram`;
                } else {
                    return `${likes[0]["user.username"]}, ${likes[1]["user.username"]} e mais ${likes.length - 2} 
                pessoa${likes.length === 3 ? '' : "s"} curtiram`;
                }
        }
    } else if(likesTip.length !==0) {
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
                pessoa${likesTip.length === 3 ? '' : "s"} curtiram`;
                } else if(likesTip1.length >=3 ){
                    return `${likesTip1[0].username}, ${likesTip1[1].username} e mais ${likesTip.length - 2} 
                pessoa${likesTip.length === 3 ? '' : "s"} curtiram`;
                }
                break;
        }
    }
}

export {peoplesLikes}