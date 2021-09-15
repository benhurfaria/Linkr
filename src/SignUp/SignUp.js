import {
    H1, H2, PageTitle, SignUpPage,
    BackToLogin, Button,
    Input, Form, SignUpForm
} from './SignUpStyle'
import { Link, useHistory } from "react-router-dom";
import { useState, useContext} from 'react';
import {SignedUser} from '../services/contexts/SignedUser'
import { signUp } from '../services/api/Api';


export default function SignUp() {
    const {signedUser, setSignedUser} = useContext(SignedUser);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [pictureUrl, setPictureUrl] = useState('');
    const [disabled, setDisabled] = useState(false);
    const history = useHistory();
    function SendSignUpData() {
        setDisabled(true);

        if (email === '' || password === '' || username === '' || pictureUrl === '') {
            alert('Preencha todos os campos do cadastro');
        }
        const body = {
            email,
            password,
            username,
            pictureUrl
        }
        const promise = signUp(body, setDisabled)
        promise.then(res => {
            setDisabled(false)
            setSignedUser({ id:res.data.user.id,
                              username:res.data.user.username,
                              email:res.data.user.email,
                              avatar:res.data.user.avatar,
                              token:res.data.token });
            history.push('/')
        })
    }


    return (
        <SignUpPage>
            <PageTitle>
                <H1>linkr</H1>
                <H2>save, share and discover<br />
                    the best links on the web</H2>
            </PageTitle>
            <SignUpForm>
                <Form >
                    <Input type='email' placeholder=' e-mail' value={email} onChange={e => setEmail(e.target.value)}></Input>
                    <Input type='password' placeholder=' password' value={password} onChange={e => setPassword(e.target.value)}></Input>
                    <Input type='text' placeholder=' username' value={username} onChange={e => setUsername(e.target.value)}></Input>
                    <Input type='text' placeholder=' picture url' value={pictureUrl} onChange={e => setPictureUrl(e.target.value)}></Input>
                    <Button type='button' disabled={disabled} onClick={SendSignUpData}>Sign Up</Button>
                </Form>
                <Link to='/'>
                    <BackToLogin>Switch back tp log in</BackToLogin>
                </Link>
            </SignUpForm>
        </SignUpPage>
    );
}
