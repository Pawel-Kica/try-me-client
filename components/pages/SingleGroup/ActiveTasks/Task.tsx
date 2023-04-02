// Tools
import styled from '@emotion/styled'
// Types
import StyledButton from '@/components/atoms/forms/StyledButton'
import { Avatar, Box, Typography } from '@mui/material'
import type { FunctionComponent } from 'react'
import { Task as TaskComponent } from '../../../../helpers/gql/gql-queries'

const Base = styled('div')(({ theme }) => ({
    background: '#fff',
    padding: '8px',
    borderRadius: '5px',
    boxShadow: '1px 1px 4px 0 #555',
}))

const TaskComponent: FunctionComponent<TaskComponent> = (props) => {
    const amountOfPeopleWhoCompletedTheTask = props.submissions.length
    return (
        <Base>
            <Typography variant="body2">
                Autor: <strong>{props.created_by.first_name + ' ' + props.created_by.last_name}</strong>, {'3 godziny temu'}
            </Typography>
            <Typography variant="h3" className="mt-2">
                {props.title}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
                {props.description}
            </Typography>{' '}
            <Typography variant="body1" sx={{ mt: 1 }}>
                <strong>{`${amountOfPeopleWhoCompletedTheTask} / ${props.invited_users.length} `}</strong>
                osób ukończyło zadanie
            </Typography>
            <div className="mt-2 mb-1">Grupa: Developerzy</div>
            <Box
                sx={{
                    display: 'flex',
                    mb: 3,
                }}
            >
                {props.invited_users.map((item, index) => {
                    const a = props.submissions.find((e) => e.user.user_id === item.user_id)

                    return (
                        <Avatar
                            className="aspect-square"
                            alt={`${index}`} //
                            key={index}
                            src={item.photo}
                            sx={{
                                width: '32px',
                                height: '32px',
                                filter: `grayscale(${a ? 1 : 0})`,
                            }}
                        />
                    )
                })}
            </Box>
            <StyledButton color="primary">Otwórz</StyledButton>
        </Base>
    )
}

export default TaskComponent
