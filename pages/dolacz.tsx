import Diversity3RoundedIcon from '@mui/icons-material/Diversity3Rounded'
import { Button, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useState } from 'react'
export default function Home() {
    const router = useRouter()
    const [code, setCode] = useState('')

    const joinClicked = () => {
        console.log({ code })
        // join to team, input is code
    }

    return (
        <div
            style={{
                height: '100%',
                display: 'grid',
                placeItems: 'center',
            }}
        >
            <div style={{ display: 'grid', placeItems: 'center', gap: 16 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Dołącz do drużyny
                </Typography>

                <TextField
                    id="outlined-basic"
                    label="Kod drużyny"
                    variant="outlined"
                    onChange={(e) => setCode(e.target.value)}
                    inputProps={{ maxLength: 6 }}
                />

                <Button
                    variant="outlined"
                    onClick={joinClicked}
                    style={{ display: 'grid', gap: 8, placeItems: 'center', gridTemplateColumns: 'auto auto' }}
                >
                    <Diversity3RoundedIcon></Diversity3RoundedIcon>
                    <span>Dołącz do drużyny</span>
                </Button>
            </div>
        </div>
    )
}
