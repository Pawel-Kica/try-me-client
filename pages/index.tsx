import { Button, Typography } from '@mui/material'
import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter()

    const joinClicked = () => {
        router.push('/dolacz')
    }

    return (
        <div
            style={{
                height: '100%',
                display: 'grid',
                placeItems: 'center',
            }}
        >
            <div style={{ display: 'grid', placeItems: 'center' }}>
                <Typography className="main-h" variant="h4" component="h1" gutterBottom>
                    Witaj w <span className="tryme">TryMe</span>
                </Typography>
                <Typography variant="h6" component="h1" gutterBottom>
                    Dołacz do drużyny aby, ich zobaczyć wyzwania
                </Typography>
                <Button variant="outlined" onClick={joinClicked}>
                    Dołącz
                </Button>
            </div>
        </div>
    )
}
