import styled from "styled-components";
import {
    H1, H2, PageTitle, SignUpPage,
    BackToLogin, Button,
    Input, Form, SignUpForm
} from './SignUpStyle'

import { Link } from "react-router-dom";


export default function SignUp() {
    return (
        <SignUpPage>
            <PageTitle>
                <H1>linkr</H1>
                <H2>save, share and discover<br />
                    the best links on the web</H2>
            </PageTitle>
            <SignUpForm>
                <Form>
                    <Input type='email' placeholder=' e-mail' required></Input>
                    <Input type='password' placeholder=' password' required></Input>
                    <Input type='text' placeholder=' username' required></Input>
                    <Input type='text' placeholder=' picture url' required></Input>
                    <Button type='submit'>Sign Up</Button>
                </Form>
                <Link to='/login'>
                    <BackToLogin>Switch back tp log in</BackToLogin>
                </Link>
            </SignUpForm>
        </SignUpPage>
    );
}
