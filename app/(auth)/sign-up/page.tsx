'use client'

import { AuthForm, AuthFormData } from "@/components/auth-form"
import { authClient } from "@/lib/auth-client";

export default function SignUpPage() {
const handleSignUp = async(data:AuthFormData) =>{
    const { data:signUpResponse, error } = await authClient.signUp.email({
    name: data.name as string, 
    email: data.email, 
    password: data.password, 
    role: data.role ?? "seeker",
    callbackURL: "/",
});
console.log('sign up response',signUpResponse,error)
if (error) {
  return error.message ?? "Could not create your account."
}
}

  return <AuthForm mode="sign-up" onSubmit={handleSignUp}/>
}
