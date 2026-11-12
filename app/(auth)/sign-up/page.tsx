'use client'

import { AuthForm, AuthFormData } from "@/components/auth-form"
import { authClient } from "@/lib/auth-client";

export default function SignUpPage() {
const handleSignUp = async(data:AuthFormData) =>{
    const { data:signUpResponse, error } = await authClient.signUp.email({
    name: data.name as string, 
    email: data.email, 
    password: data.password, 
    callbackURL: "/",
});
console.log('sign up response',signUpResponse,error)
}

  return <AuthForm mode="sign-up" onSubmit={handleSignUp}/>
}
