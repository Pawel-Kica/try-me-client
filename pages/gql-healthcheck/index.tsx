import { useQuery } from 'react-query'
import { use, useEffect } from 'react'
import { HealthCheck } from '../../helpers/gql/gql-queries'

function GqlHealthCheck() {
    const { data, status } = useQuery<HealthCheck>({
        queryKey: 'healtcheck_gql',
        queryFn: async () => true,
        // gqlRequest(healthcheckQuery),
    })

    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold text-sc bg-pr">Result: </h1>
            <div>{JSON.stringify(data)}</div>

            <h3>
                Status: <span>{status}</span>
            </h3>
        </div>
    )
}

export default GqlHealthCheck
