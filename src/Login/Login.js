import {
    H1, H2, PageTitle, LoginPage,
    BackToSignUp, Button, Input,
    Form, LoginForm
} from './style_Login';
import { Link, useHistory } from "react-router-dom";

import { useState, useContext, useEffect } from 'react';
import { login, storeUser, getStoredUser } from '../services/api/Api'

import { LoggedUser } from '../services/contexts/LoggedUser';


export default function Login() {
    const { setLoggedUser } = useContext(LoggedUser);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisabled] = useState(false);
    const history = useHistory();
    useEffect(()=>{
        const user= getStoredUser();
        user ? history.push("/timeline") : history.push('/')
    }, [history])
    function SendLoginData(e) {
        e.preventDefault();
        setDisabled(true);
        if (email === '' || password === '') {
            alert('Preencha todos os campos do login');
            setDisabled(false);
        } else {
            const body = {
                email,
                password
            };
            const promise = login(body, setDisabled);
            promise.then(res => {
                setDisabled(false);
                const user = {
                    id: res.data.user.id,
                    username: res.data.user.username,
                    email: res.data.user.email,
                    avatar: res.data.user.avatar,
                    token: res.data.token
                };

                storeUser(user)

                setLoggedUser(user);
                history.push('/timeline');
            })
        }

    }

    return (
        <LoginPage>
            <PageTitle>
                <H1>linkr</H1>
                <H2>save, share and discover<br />
                    the best links on the web</H2>
            </PageTitle>
            <LoginForm>
                <Form onSubmit={SendLoginData}>
                    <Input type='email' placeholder=' e-mail' value={email} onChange={e => setEmail(e.target.value)} disabled={disabled}></Input>
                    <Input type='password' placeholder=' password' value={password} onChange={e => setPassword(e.target.value)} disabled={disabled}></Input>
                    <Button type='submit' disabled={disabled} >Login</Button>
                </Form>
                <Link to='/signup'>
                    <BackToSignUp>First time? Create an account!</BackToSignUp>
                </Link>
            </LoginForm>
        </LoginPage>
    );
}