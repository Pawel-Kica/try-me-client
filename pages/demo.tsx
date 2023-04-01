import { AuthenticatedUser, DemoSignInArgs, demoSignInQuery, loginUserQuery } from '../helpers/gql/gql-queries'
import { gqlRequest } from '../helpers/gql/gql-request'
import { useState } from 'react'
import { Variables } from 'graphql-request'
import { useMutation } from 'react-query'
import { setLocalStorageItem, setStorageAuthToken } from '../helpers/localStorage'

export default function Test() {
    const [username, setUsername] = useState<string>('')
    const [res, setRes] = useState<AuthenticatedUser>()

    const handler = async () => {
        const response = await gqlRequest<AuthenticatedUser>(demoSignInQuery, { username })
        alert(JSON.stringify(response))

        setRes(response)
        setStorageAuthToken(response.authToken)
    }

    return (
        <div>
            Enter your username
            <input type="text" className="b-2 p-2 bg-green-300" value={username} onChange={(e) => setUsername(e.target.value)} />
            <button onClick={handler}>Authenticated</button>
            <div className="mt-2">Response: {JSON.stringify(res)}</div>
        </div>
    )
}

// const demoSignInMutation = useMutation({
//     mutationFn: async (args: DemoSignInArgs) => gqlRequest<AuthenticatedUser>(demoSignInQuery, args),
//     onSuccess: (res) => {
//         setStorageAuthToken(res.authToken)
//     },
// })
