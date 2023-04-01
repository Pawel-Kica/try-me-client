import { gql } from 'graphql-request';
import { QueryEntity } from './gql-request';

export const loginUserQuery: QueryEntity = {
    name: 'login_user',
    query: gql`
        mutation ($username: String, $email: String, $password: String!) {
            login_user(username: $username, email: $email, password: $password) {
                user_id
                authToken
            }
        }
    `,
};

export const healthcheckQuery: QueryEntity = {
    name: 'healthcheck',
    query: gql`
        query {
            healthcheck
        }
    `,
};

export type HealthCheck = boolean;
