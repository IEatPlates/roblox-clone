"use server";

import { signIn, signUp } from "@/auth";
import NeonAdapter from "@auth/neon-adapter"
import { Pool } from "@neondatabase/serverless"

export async function authenticate(prevState, formData) {
    console.log(formData);
    try {
        await signIn("credentials", formData);
    } catch (error) {
        console.log(error);
        switch(error.type) {
            case "CredentialsSignin":
                return 'Invalid username or password';
            case "CredentialsSignin":
                    throw error;
            default:
                return 'An error occurred';
        }
        throw error;
    }
}
