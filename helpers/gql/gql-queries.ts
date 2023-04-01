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

export const taskString = gql`
    task_id
    description
    due_date
    max_points
    created_by{
        ${userString}
    }
    invited_users{
        ${userString}
    }
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

export interface CreateUserArgs extends User {}

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
    owner: User
    tasks: Task[]
    members: User[]
    invitation_id: string
}
export const groupString = gql`
    group_id
    title
    description
    icon
    owner{
        ${userString}
    }
    tasks{
        ${taskString}
    }
    members{
        ${userString}
    }
    invitation_id
`

export interface UserGroupsResult extends Group {}

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
                ${groupString}
            }
        }
    `,
}
export interface CreateGroupResult extends UserGroupsResult {}

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
                created_at
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
                ${taskString}
            }
        }
    `,
    auth: true,
}

export interface Task {
    task_id: string
    title: string
    description: String
    due_date: string
    max_points: number
    created_by: User
    created_at: string
    invited_users: User[]
    submissions: TaskSubmission[]
}

export interface TaskSubmission {
    task_submission_id: string
    task: Task
    user: User
    attachments: string[]
    description: string
    status: TaskSubmissionStatus
    received_points: number
    owner_comment: string
    created_at: string
}

export const taskSubmissionString = gql`
    task_submission_id
    task
    user{
        ${userString}
    }
    attachments
    description
    status
    received_points
    owner_comment
    created_at
`

export enum TaskSubmissionStatus {
    approved = 'approved',
    pending = 'pending',
    rejected = 'rejected',
}

export const submitTaskQuery: QueryEntity = {
    name: 'submit_task',
    query: gql`
        mutation($task_id:String!,$description:String!,attachments:[String!]!) {
            submit_task(
                task_id: $task_id
                description: $description
                attachments: $attachments
            ) {
                ${taskSubmissionString}
            }
        }
    `,
}
