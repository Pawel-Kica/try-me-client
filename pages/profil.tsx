import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded'
import { Avatar, Button, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
const teams = [
    {
        id: 1,
        imgSrc: 'https://mui.com/static/images/avatar/1.jpg',
        name: 'Sabre Tenis',
        people: ['Paweł', 'Krzyś', 'Paulina', 'Michał', 'Kacper', 'Kasia'],
        description: 'Tenis w trakcie pracy, oby Piotrek nie widział',
    },
    {
        id: 912,
        imgSrc: 'https://mui.com/static/images/avatar/1.jpg',
        name: 'Akademikowy tenis',
        people: ['Paweł', 'Paulina', 'Michał', 'Kacper', 'Kasia'],
        description: 'Akropol',
    },
    {
        id: 12,
        imgSrc: 'https://mui.com/static/images/avatar/1.jpg',
        name: 'Bieganie',
        people: ['Michał', 'Kacper', 'Kasia'],
        description: 'Cel: maraton w kwietniu',
    },
    {
        id: 15,
        imgSrc: 'https://mui.com/static/images/avatar/1.jpg',
        name: 'Dobczyckie Bestie',
        people: ['Kacper', 'Kasia', 'Paweł', 'Krzyś', 'Paulina', 'Michał'],
        description: 'Grupy znajomych z Dobczyc',
    },
]

export default () => {
    const router = useRouter()

    const leaveTeam = (team: any) => {
        console.log({ team })
        // leaving team
    }

    return (
        <>
            <Typography variant="h5" component="div">
                Moje drużyny:
            </Typography>
            <List>
                {teams.map((team) => (
                    <React.Fragment key={`${team.id}`}>
                        <ListItem
                            key={`${team.id}`}
                            alignItems="flex-start"
                            secondaryAction={
                                <Button onClick={() => leaveTeam(team)}>
                                    <HighlightOffRoundedIcon></HighlightOffRoundedIcon>
                                </Button>
                            }
                        >
                            <ListItemAvatar>
                                <Avatar alt="" src={team.imgSrc} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={team.name}
                                secondary={
                                    <React.Fragment>
                                        <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
                                            {team.description}
                                        </Typography>
                                        <Typography sx={{ display: 'block' }} component="span" variant="caption" color="text.primary">
                                            {new Intl.ListFormat('pl').format(team.people)}
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider key={`${team.id}-divider`} variant="inset" component="li" />
                    </React.Fragment>
                ))}
            </List>
        </>
    )
}
