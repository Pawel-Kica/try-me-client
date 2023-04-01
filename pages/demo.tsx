import { AuthenticatedUser, DemoSignInArgs, demoSignInQuery, loginUserQuery } from '../helpers/gql/gql-queries'
import { gqlRequest } from '../helpers/gql/gql-request'
import { useState } from 'react'
import { Variables } from 'graphql-request'
import { useMutation } from 'react-query'
import { setLocalStorageItem, setStorageAuthToken } from '../helpers/localStorage'

export default function Test() {
    const [username, setUsername] = useState<string>('')

    const demoSignInMutation = useMutation({
        mutationFn: async (args: DemoSignInArgs) => gqlRequest<AuthenticatedUser>(demoSignInQuery, args),
        onSuccess: (res) => {
            setStorageAuthToken(res.authToken)
        },
    })

    return (
        <div>
            Enter your username
            <input type="text" className="b-2 p-2 bg-green-300" value={username} onChange={(e) => setUsername(e.target.value)} />
            <button onClick={() => demoSignInMutation.mutate({ username })}>Authenticated</button>
            <div className="mt-2">Response: {JSON.stringify(demoSignInMutation.data, null, 2)}</div>
        </div>
    )
}
