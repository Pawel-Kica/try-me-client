import { Avatar, Button, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

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

export default function Home() {
    const router = useRouter()

    const isInAnyTeam = true

    const joinClicked = () => {
        router.push('/dolacz')
    }
    const doChallengeClicked = (challenge: any) => {
        console.log({ challenge })
    }
    const createChallengeClicked = () => {
        router.push('/dolacz')
    }

    if (!isInAnyTeam)
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
            <div style={{ display: 'flex', flexFlow: 'column', alignItems: 'stretch', width: '100%' }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Twoje wyzwania:
                </Typography>
                <Button variant="outlined" onClick={createChallengeClicked}>
                    Stwórz nowe
                </Button>

                <List>
                    {challenges.map((challenge) => (
                        <React.Fragment key={`${challenge.id}`}>
                            <ListItem key={`${challenge.id}`} alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="" src={challenge.imgSrc} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={
                                        <span>
                                            <Typography sx={{ display: 'inline' }} component="span" variant="h5" color="text.primary">
                                                {challenge.name}
                                            </Typography>
                                            <Typography sx={{ display: 'inline' }} component="span" variant="body2">
                                                {' od ' + challenge.createdBy}
                                            </Typography>
                                        </span>
                                    }
                                    secondary={
                                        <React.Fragment>
                                            {challenge.description && (
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    {challenge.description}
                                                </Typography>
                                            )}
                                            <Typography
                                                sx={{ display: 'flex', flexFlow: 'row wrap', gap: 1 }}
                                                component="span"
                                                variant="caption"
                                                color="text.primary"
                                            >
                                                {Object.entries(challenge.people).map(([person, done]) => (
                                                    <Avatar
                                                        sx={{
                                                            width: 24,
                                                            height: 24,
                                                            ...(done ? undefined : { filter: 'saturate(0) brightness(0.7)' }),
                                                        }}
                                                        key={person}
                                                        alt=""
                                                        src={challenge.imgSrc}
                                                    />
                                                ))}
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider key={`${challenge.id}-divider`} variant="inset" component="li" />
                        </React.Fragment>
                    ))}
                </List>
            </div>
        </div>
    )
}
