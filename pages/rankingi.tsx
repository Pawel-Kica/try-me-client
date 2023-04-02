// Tools
// Types
import type { Statistics } from '@/types/API'
import type { FunctionComponent } from 'react'
// Material UI Components
import ActiveTasks from '@/components/pages/SingleGroup/ActiveTasks'
import Header from '@/components/pages/SingleGroup/Header'
import Stats from '@/components/pages/SingleGroup/Stats'
import { useQuery } from 'react-query'
import { Task, userTasksQuery } from '../helpers/gql/gql-queries'
import { gqlRequest } from '../helpers/gql/gql-request'

interface ChujProps {
    //
}

export const stats: Statistics[] = [
    {
        avatar: 'https://avatars.githubusercontent.com/u/89777457?v=4',
        firstName: 'Pawel',
        lastName: 'Kica',
        place: 1,
        points: 100,
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/20194971?v=4',
        firstName: 'Jakub',
        lastName: 'Węgrzyn',
        place: 2,
        points: 78,
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/40713288?s=100&v=4',
        firstName: 'Filip',
        lastName: 'Ocytko',
        place: 3,
        points: 33,
    },
]
const Chuj: FunctionComponent<ChujProps> = (props) => {
    const { data } = useQuery<Task[]>({
        queryKey: 'user_tasks',
        queryFn: async () => gqlRequest(userTasksQuery),
    })

    return (
        <>
            <Stats
                stats={{
                    annualy: stats,
                    general: stats,
                    monthly: stats,
                }}
            />
            {/* Request to backend */}
            <ActiveTasks tasks={data || []} />
        </>
    )
}

export default Chuj
