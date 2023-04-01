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

const Chuj: FunctionComponent<ChujProps> = (props) => {
    const stats: Statistics[] = [
        {
            avatar: 'https://www.pap.pl/sites/default/files/styles/main_image/public/202303/pap_20220829_087%20%283%29.jpg?h=34bb6cd0&itok=4Sfcw5S4',
            firstName: 'Kacper',
            lastName: 'Ksiazek',
            place: 1,
            points: 100,
        },
        {
            avatar: 'https://www.pap.pl/sites/default/files/styles/main_image/public/202303/pap_20220829_087%20%283%29.jpg?h=34bb6cd0&itok=4Sfcw5S4',
            firstName: 'Kacper',
            lastName: 'Ksiazek',
            place: 2,
            points: 100,
        },
        {
            avatar: 'https://www.pap.pl/sites/default/files/styles/main_image/public/202303/pap_20220829_087%20%283%29.jpg?h=34bb6cd0&itok=4Sfcw5S4',
            firstName: 'Kacper',
            lastName: 'Ksiazek',
            place: 3,
            points: 100,
        },
    ]

    const { data } = useQuery<Task[]>({
        queryKey: 'user_tasks',
        queryFn: async () => gqlRequest(userTasksQuery),
    })

    return (
        <>
            <Header
                back={() => {
                    console.log('dasda')
                }}
                teamName="Przykladowa ekipa"
            />
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
