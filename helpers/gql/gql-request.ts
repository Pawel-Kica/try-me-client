import { DocumentNode } from '@apollo/client'
import { GraphQLClient } from 'graphql-request'
import config from '../config'
import { storageAuth } from '../localStorage'

export const gqlClient = new GraphQLClient(config.API_ADDRESS + '/graphql' || '')

export interface QueryEntity {
    query: DocumentNode | string
    name?: string | string[]
    auth?: boolean
}

export async function gqlRequest<T>(
    query: QueryEntity,
    variables: Record<string, any> = {},
    headers: Record<string, any> = {},
): Promise<T> {
    try {
        let localHeaders = { ...headers }
        // Add automatically authentication headers
        if (query.auth) {
            localHeaders = { ...localHeaders, ...storageAuth() }
        }
        const res = await gqlClient.request(query.query, variables, localHeaders)
        if (typeof query.name === 'string') {
            //@ts-ignore
            return res[query.name]
        }
        return res as T
    } catch (e: any) {
        // Format error message
        let err_msg = e.message.slice(0, 150)
        const errors = e?.response?.errors
        if (errors) err_msg = errors[0].message

        throw new Error(err_msg)
    }
}
