// Tools
// Types
import type { FunctionComponent } from 'react'
import type { Statistics } from '@/types/API'
// Material UI Components
import Stats from '@/components/pages/SingleGroup/Stats'
import Header from '@/components/pages/SingleGroup/Header'
import ActiveTasks from '@/components/pages/SingleGroup/ActiveTasks'

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
            />
            <Stats
                stats={{
                    annualy: stats,
                    general: stats,
                    monthly: stats,
                }}
            />
            <ActiveTasks
                tasks={[
                    {
                        title: 'Zrob dowolny posiłek',
                        description: 'Zrob cos tam do jedzenia essa',
                        createdAt: '3 godziny temu',
                        involvedPeople: [
                            { avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png', completed: false }, //
                            { avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png', completed: true }, //
                            { avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png', completed: false }, //
                            { avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png', completed: true }, //
                            { avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png', completed: false }, //
                            { avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png', completed: false }, //
                            { avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png', completed: true }, //
                            { avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png', completed: false }, //
                            { avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png', completed: true }, //
                            { avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png', completed: false }, //
                            { avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png', completed: true }, //
                        ],
                        authorName: 'chuj',
                    },
                ]}
            />
        </>
    )
}

export default Chuj
