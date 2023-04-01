// Tools
import styled from '@emotion/styled'
// Types
import type { FunctionComponent } from 'react'
import { Typography, Box, Avatar } from '@mui/material'
import StyledButton from '@/components/atoms/forms/StyledButton'
import { Task as TaskComponent } from '../../../../helpers/gql/gql-queries'

const Base = styled('div')(({ theme }) => ({
    background: '#fff',
    padding: '8px',
    borderRadius: '5px',
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
                    display: 'grid',
                    gridTemplateColumns: ' repeat(7, 1fr)',
                    gridTemplateRows: `repeat(${Math.ceil(props.invited_users.length / 7)}, 1fr)`,
                    gridColumnGap: ' 6px',
                    gridRowGap: '6px',
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
                                width: '100%',
                                height: '100%',
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
