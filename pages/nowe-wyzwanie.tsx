import { Button, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/router'

const challenges = [
    {
        id: 1,
        imgSrc: 'https://mui.com/static/images/avatar/1.jpg',
        name: 'Sabre Tenis',
        people: { Paweł: true, Krzyś: true, Paulina: false, Michał: true, Kacper: false, Kasia: false },
        description: 'Tenis w trakcie pracy, oby Piotrek nie widział',
        createdBy: 'Paweł',
    },
    {
        id: 912,
        imgSrc: 'https://mui.com/static/images/avatar/1.jpg',
        name: 'Bitwa o kebsa',
        people: { Paweł: true, Krzyś: true, Paulina: false, Michał: true, Kacper: false, Kasia: false },
        description: 'najwięcej wygranych = kebsik',
        createdBy: 'Ciebie',
    },
    {
        id: 12,
        imgSrc: 'https://mui.com/static/images/avatar/1.jpg',
        name: '100km do końca marca',
        people: { Paweł: true, Krzyś: true, Paulina: false, Michał: true, Kacper: false, Kasia: false },
        description: 'Cel: maraton w kwietniu',
        createdBy: 'Michał',
    },
    {
        id: 15,
        imgSrc: 'https://mui.com/static/images/avatar/1.jpg',
        name: 'Dookoła jeziora w <3h',
        people: { Paweł: true, Krzyś: true, Paulina: false, Michał: true, Kacper: false, Kasia: false },
        description: '',
        createdBy: 'Paulina',
    },
]

export default () => {
    const router = useRouter()

    const joinClicked = () => {
        router.push('/dolacz')
    }
    const doChallengeClicked = (challenge: any) => {
        console.log({ challenge })
    }
    const createChallengeClicked = () => {
        router.push('/nowe-wyzwanie')
    }

    return (
        <div
            style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexFlow: 'row nowrap',
                alignItems: 'stretch',
            }}
        >
            <div style={{ display: 'flex', flexFlow: 'column', alignItems: 'stretch', gap: 8, width: '100%' }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Nowe wyzwanie:
                </Typography>
                <TextField id="outlined-basic" label="Co trzeba zrobić?" variant="outlined" />
                <TextField id="outlined-basic2" label="Opis projektu" variant="outlined" />

                <Button variant="outlined" onClick={createChallengeClicked}>
                    Utwórz
                </Button>
            </div>
        </div>
    )
}
