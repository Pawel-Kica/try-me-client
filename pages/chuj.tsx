// Tools
// Types
import type { FunctionComponent } from 'react'
import type { Statistics } from '@/types/API'
// Material UI Components
import Stats from '@/components/pages/SingleGroup/Stats'
import Header from '@/components/pages/SingleGroup/Header'

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
            <Header
                back={() => {
                    console.log('dasda')
                }}
                teamName="Przykladowa ekipa"
                teamAvatar="https://cdn.pixabay.com/photo/2023/03/27/08/47/cows-7880154_960_720.jpg"
            />
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
