import React from 'react';
import {
  Form,
  FormButton,
  FormContent,
  FormH1,
  Container,
  Icon,
  Text,
  FormInput,
  FormLabel,
  FormWrap,
} from './SignInElements';

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Tourism</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign In to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot password?</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
