// Tools
// Types
import type { FunctionComponent } from 'react'
import type { Statistics } from '@/types/API'
// Material UI Components
import Stats from '@/components/pages/SingleGroup/Stats'

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
    return (
        <>
            <Stats
                stats={{
                    annualy: stats,
                    general: stats,
                    monthly: stats,
                }}
            />
        </>
    )
}

export default Chuj
