import { DocumentNode } from '@apollo/client';
import { GraphQLClient, Variables } from 'graphql-request';
import { storageAuth } from '../localStorage';
import config from '../config';

export const gqlClient = new GraphQLClient(config.API_ADDRESS + '/graphql' || '');

export interface QueryEntity {
    query: DocumentNode | string;
    name?: string | string[];
    auth?: boolean;
}

export async function gqlRequest(query: QueryEntity, variables: Variables = {}, headers: Record<string, any> = {}) {
    try {
        let localHeaders = { ...headers };
        // Add automatically authentication headers
        if (query.auth) {
            localHeaders = { ...localHeaders, ...storageAuth() };
        }
        console.log(variables);
        const res = await gqlClient.request(query.query, variables, localHeaders);
        if (typeof query.name === 'string') {
            //@ts-ignore
            return res[query.name];
        }
        return res;
    } catch (e: any) {
        // Format error message
        let err_msg = e.message.slice(0, 150);
        const errors = e?.response?.errors;
        if (errors) err_msg = errors[0].message;

        throw new Error(err_msg);
    }
}
