import { gql } from 'graphql-request'
import { QueryEntity, gqlRequest } from './gql-request'

const userString = gql`
user_id
username
first_name
last_name
email
photo
`
export interface User {
    user_id: string
    username: string
    email: string
    first_name: string
    last_name: string
    photo: string
}

export interface AuthenticatedUser extends User {
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

export const userGroupsQuery: QueryEntity = {
    name: 'user_groups',
    query: gql`
        query {
            user_groups {
                group_id
                icon
                description
                title
                owner {
                    user_id
                }
                members {
                    user_id
                }
            }
        }
    `,
    auth: true,
}

export interface Group {
    group_id: string
    title: string
    description: string
    icon: string
}

export interface UserGroupsResult extends Group {
    owner: User
    members: User[]
}

export interface CreateGroupArgs {
    title: string
    descripstion: string
    members: string[]
}

export const createGroupQuery: QueryEntity = {
    name: 'create_group',
    query: gql`
        mutation ($title: String!, $description: String!, $members: [String!]!) {
            create_group(title: $title, description: $description, members: $members) {
                group_id
                title
                description
                invitation_id
                icon
            }
        }
    `,
}

export const userTasksQuery: QueryEntity = {
    name: 'user_tasks',
    query: gql`
        query {
            user_tasks {
                task_id
                title
                description
                max_points
                due_date
                created_by {
                    ${userString}
                }
                invited_users{
                    ${userString}
                }
            }
        }
    `,
}

export const createTaskQuery: QueryEntity = {
    name: 'create_task',
    query: gql`
        mutation (
            $title: String!
            $description: String!
            $due_date: String!
            $invited_users: [String!]!
            $max_points: Int!
            $group_id: String!
        ) {
            create_task(
                title: $title
                description: $description
                due_date: $due_date
                invited_users: $invited_users
                max_points: $max_points
                group_id: $group_id
            ) {
                task_id
                title
                description
                max_points
                due_date
                created_by {
                    ${userString}
                }
                invited_users{
                    ${userString}
                }
            }
        }
    `,
    auth: true,
}

export interface Task {
    task_id: string
    description: String
    due_date: string
    max_points: number
    created_by: User
    invited_users: User[]
}
