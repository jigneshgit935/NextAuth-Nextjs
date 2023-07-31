import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { users } from '../../../../helpers/constants'
const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'jignesh',
            credentials: {
                email: { label: 'Email', placeholder: "Enter Email" },
                password: { label: 'Password', placeholder: "Enter Password" },
            },
            async authorize(credentials) {
                if (!credentials || !credentials.email || credentials.password)
                    return null;
                const user = users.find((item) => item.email === credentials.email);
                if (user?.password === credentials.password) {
                    return user;
                }
                return null;
            },
        })
    ]
}


const handler = NextAuth(authOptions)


export { handler as GET, handler as POST }