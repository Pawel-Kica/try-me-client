// Tools
// Types
import type { FunctionComponent } from 'react'
import type { AvailableTasksRequestResponse } from '@/types/API'
// Material UI Components
import { Typography, Stack, Divider } from '@mui/material'
import Task from './Task'

const ActiveTasks: FunctionComponent<AvailableTasksRequestResponse> = (props) => {
    const amountOfAvailableTasks: number = props.tasks.length

    return (
        <>
            <Typography variant="h3" sx={{ mt: '48px' }}>
                Aktywne zadania
            </Typography>

            <Typography variant="body1" sx={{ mb: 2 }}>
                Aktualnie dostępne {amountOfAvailableTasks === 1 ? 'jest' : 'są'} <strong>{amountOfAvailableTasks}</strong>
                {amountOfAvailableTasks === 1 ? ' zadanie' : ' zadania'}
            </Typography>

            <Stack spacing={3} divider={<Divider />}>
                {props.tasks.map((item, index) => {
                    return <Task key={index} {...item} />
                })}
            </Stack>
        </>
    )
}

export default ActiveTasks
