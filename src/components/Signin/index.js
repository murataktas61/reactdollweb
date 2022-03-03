import React from 'react'
import { 
    Container, 
    FormButton, 
    FormContent,
    FormH1, 
    FormInput, 
    FormLabel, 
    FormWrap , 
    Icon , 
    Form , 
    Text 
} from './SigninElements'

const SignIn = () => {
  return (
      <>
        <Container>
            <FormWrap>
                <Icon to="/">dolla</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required></FormInput>
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required></FormInput>
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Forgot password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
      </>
  )
}

export default SignIn