function peoplesLikes(likes, likesTip, liked, loggedUser) {
    if (likes.length === 0 && likesTip.length === 0) {
        return 'Seja o primeiro a curtir'
    }else{
       return generateTooltipString(likes, likesTip, liked, loggedUser)
    }
}

function generateTooltipString(likes, likesTip, liked, loggedUser) {
    let resultString = '';
    let usernamesList = getFirstThreeUsernames(likes, liked, loggedUser, likesTip)
    if (usernamesList.length > 3) usernamesList[2] = `mais ${usernamesList.length - 2}`;
    if(!usernamesList.length) return 'Seja o primeiro a curtir';
    usernamesList.forEach((username, index) => {
        if (index === 1) resultString += (usernamesList.length === 3) ? ", " : " e ";
        if (index === 2 && usernamesList.length === 3) resultString += " e ";
        resultString += username["user.username"];
    })

    resultString += (usernamesList.length === 1) ? " curtiu esse post" : " curtiram esse post";
    return resultString;
}
function getFirstThreeUsernames(likes, liked, loggedUser, likesTip) {
    let addedNames = 0;
    let firstThreeUsernames = [];
    if (likesTip.length) {
        if (liked) {
            likesTip = likesTip.filter(like => like.userId !== loggedUser.id);
            const loggedUserTooltipObject = { "user.username": "Você" };
            firstThreeUsernames.push(loggedUserTooltipObject);
            addedNames++;
        }
        let index = 0;
        likesTip = likesTip.filter(like => like.userId !== loggedUser.id);
        
        if(!likesTip.length) return firstThreeUsernames;
           
        do {
            let likesTip1 = likesTip.map(like => like = { "user.username": `${like.username}` })
            firstThreeUsernames.push(likesTip1[index]);
            addedNames++;
            index++;
        } while (addedNames <= 2 && index < likesTip1.length)

    } else {
        if (liked) {
            likes = likes.filter(like => like.userId !== loggedUser.id);
            const loggedUserTooltipObject = { "user.username": "Você" };
            firstThreeUsernames.push(loggedUserTooltipObject);
            addedNames++;
        }
        let index = 0;
        likes = likes.filter(like => like.userId !== loggedUser.id);
        do {
            if(!likes.length) return firstThreeUsernames;
            firstThreeUsernames.push(likes[index]);
            addedNames++;
            index++;
        } while (addedNames <= 2 && index < likes.length);
    }
    return firstThreeUsernames;
}

export { peoplesLikes }