// Tools
import styled from '@emotion/styled'
// Types
import type { FunctionComponent } from 'react'
import Typography from '@mui/material/Typography'
import type { Task as TaskProps } from '@/types/API'

const Base = styled('div')(({ theme }) => ({
    background: '#fff',
    padding: '8px',
    borderRadius: '5px',
}))

const Task: FunctionComponent<TaskProps> = (props) => {
    return (
        <Base>
            <Typography variant="body2">Chuj</Typography>
            <Typography variant="h4">{props.title}</Typography>
            <span></span>
        </Base>
    )
}

export default Task
