import { gql } from 'graphql-request'
import { QueryEntity, gqlRequest } from './gql-request'

const userString = gql`
user_id
username
first_name
last_name
email
`
export interface User {
    user_id: string
    username: string
    email: string
    first_name: string
    last_name: string
}

export interface AuthenticatedUser {
    authToken: string
}

export interface CreateUserArgs {
    username: string
    first_name: string
    last_name: string
    email: string
    password: string
}

export const createUserQuery: QueryEntity = {
    name: 'create_user',
    query: gql`
        mutation ($username: String!, $email: String!, $password: String!, $first_name: String!, $last_name: String!) {
            create_user(username: $username, email: $email, password: $password, first_name: $first_name, last_name: $last_name) {
                authToken
                ${userString}
            }
        }
    `,
}

export const loginUserQuery: QueryEntity = {
    name: 'login_user',
    query: gql`
        mutation ($username: String, $email: String, $password: String!) {
            login_user(username: $username, email: $email, password: $password) {
                ${userString}
                authToken
            }
        }
    `,
}

export const demoSignInQuery: QueryEntity = {
    name: 'demo_signin',
    query: gql`
        mutation ($username: String!) {
            demo_signin(username: $username) {
                authToken
                ${userString}
            }
        }
    `,
}
export interface DemoSignInArgs {
    username: string
}

export const healthcheckQuery: QueryEntity = {
    name: 'healthcheck',
    query: gql`
        query {
            healthcheck
        }
    `,
}

export type HealthCheck = boolean
