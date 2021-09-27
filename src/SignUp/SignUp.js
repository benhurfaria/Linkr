import {
    H1, H2, PageTitle, SignUpPage,
    BackToLogin, Button,
    Input, Form, SignUpForm
} from './style_SignUp'
import { Link, useHistory } from "react-router-dom";
import { useState, useContext, useEffect} from 'react';
import {SignedUser} from '../services/contexts/SignedUser'
import { signUp, getStoredUser } from '../services/api/Api';


export default function SignUp() {
    const {setSignedUser} = useContext(SignedUser);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [pictureUrl, setPictureUrl] = useState('');
    const [disabled, setDisabled] = useState(false);
    const history = useHistory();
    useEffect(()=>{
        const user= getStoredUser();
        user ? history.push("/timeline") : history.push('/signup')
    }, [history])
    function SendSignUpData(e) {
        e.preventDefault();
        setDisabled(true);

        if (email === '' || password === '' || username === '' || pictureUrl === '') {
            alert('Preencha todos os campos do cadastro');
        }
        if(password.length < 6){
            alert("Senha muito pequena, a senha deve ter pelo menos 6 caracteres")
            setDisabled(false)
        }else{
            const body = {
                email,
                password,
                username,
                pictureUrl
            }
            const promise = signUp(body, setDisabled)
            promise.then(res => {
                setDisabled(false)
                const user = { id:res.data.user.id,
                               username:res.data.user.username,
                               email:res.data.user.email,
                               avatar:res.data.user.avatar,
                               token:res.data.token }
                setSignedUser(user);
                history.push('/')
            })
        }
        
       
    }

    return (
        <SignUpPage>
            <PageTitle>
                <H1>linkr</H1>
                <H2>save, share and discover<br />
                    the best links on the web</H2>
            </PageTitle>
            <SignUpForm>
                <Form onSubmit={SendSignUpData}>
                    <Input type='email' placeholder=' e-mail' value={email} onChange={e => setEmail(e.target.value)} disabled={disabled}></Input>
                    <Input type='password' placeholder=' password' value={password} onChange={e => setPassword(e.target.value)} disabled={disabled}></Input>
                    <Input type='text' placeholder=' username' value={username} onChange={e => setUsername(e.target.value)} disabled={disabled}></Input>
                    <Input type='text' placeholder=' picture url' value={pictureUrl} onChange={e => setPictureUrl(e.target.value)} disabled={disabled}></Input>
                    <Button type='submit' disabled={disabled} >Sign Up</Button>
                </Form>
                <Link to='/'>
                    <BackToLogin>Switch back to log in</BackToLogin>
                </Link>
            </SignUpForm>
        </SignUpPage>
    );
}
