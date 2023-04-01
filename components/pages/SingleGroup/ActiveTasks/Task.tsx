// Tools
import styled from '@emotion/styled'
// Types
import type { FunctionComponent } from 'react'
import { Typography, Box, Avatar } from '@mui/material'
import StyledButton from '@/components/atoms/forms/StyledButton'
import { Task } from '../../../../helpers/gql/gql-queries'

const Base = styled('div')(({ theme }) => ({
    background: '#fff',
    padding: '8px',
    borderRadius: '5px',
}))

const Task: FunctionComponent<Task> = (props) => {
    const amountOfPeopleWhoCompletedTheTask = props.submissions.length
    return (
        <Base>
            <Typography variant="body2">
                dodane przez: <strong>{props.created_by.username}</strong>, {props.created_at}
            </Typography>
            <Typography variant="h3">{props.title}</Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
                {props.description}
            </Typography>{' '}
            <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>{`${amountOfPeopleWhoCompletedTheTask} / ${props.invited_users.length} `}</strong>
                osób ukończyło zadanie
            </Typography>
            {/*  */}
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: ' repeat(7, 1fr)',
                    gridTemplateRows: `repeat(${Math.ceil(props.invited_users.length / 7)}, 1fr)`,
                    gridColumnGap: ' 6px',
                    gridRowGap: '6px',
                    mb: 3,
                }}
            >
                {props.invited_users.map((item, index) => {
                    return (
                        <Avatar
                            alt={`${index}`} //
                            key={index}
                            src={item.photo}
                            sx={{
                                width: '100%',
                                height: '100%',
                                filter: `grayscale(${Number(props.submissions.find((e) => e.user.user_id === item.user_id))})`,
                            }}
                        />
                    )
                })}
            </Box>
            <StyledButton color="primary">Otwórz</StyledButton>
        </Base>
    )
}

export default Task
