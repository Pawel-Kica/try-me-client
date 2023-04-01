// Tools
import styled from '@emotion/styled'
// Types
import type { FunctionComponent } from 'react'
import { Typography, Box, Avatar } from '@mui/material'
import type { Task as TaskProps } from '@/types/API'
import StyledButton from '@/components/atoms/forms/StyledButton'

const Base = styled('div')(({ theme }) => ({
    background: '#fff',
    padding: '8px',
    borderRadius: '5px',
}))

const Task: FunctionComponent<TaskProps> = (props) => {
    const amountOfPeopleWhoCompletedTheTask = props.involvedPeople.filter((el) => el.completed).length
    return (
        <Base>
            <Typography variant="body2">
                dodane przez: <strong>{props.authorName}</strong>, {props.createdAt}
            </Typography>
            <Typography variant="h3">{props.title}</Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
                {props.description}
            </Typography>{' '}
            <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>{`${amountOfPeopleWhoCompletedTheTask} / ${props.involvedPeople.length} `}</strong>
                osób ukończyło zadanie
            </Typography>
            {/*  */}
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: ' repeat(7, 1fr)',
                    gridTemplateRows: `repeat(${Math.ceil(props.involvedPeople.length / 7)}, 1fr)`,
                    gridColumnGap: ' 6px',
                    gridRowGap: '6px',
                    mb: 3,
                }}
            >
                {props.involvedPeople.map((item, index) => {
                    return (
                        <Avatar
                            alt={`${index}`} //
                            key={index}
                            src={item.avatar}
                            sx={{
                                width: '100%',
                                height: '100%',
                                filter: `grayscale(${Number(item.completed)})`,
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
