// Tools
import styled from '@emotion/styled'
// Types
import type { FunctionComponent } from 'react'
// Material UI Components
import IconButton from '@mui/material/IconButton'
import Settings from '@mui/icons-material/Settings'
import NavigateBefore from '@mui/icons-material/NavigateBefore'
// Styled components
const Base = styled('header')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginBottom: '36px',
    h3: {
        flexGrow: 1,
        fontWeight: '500',
        fontSize: '24px',
        textAlign: 'center',
    },

    '.MuiButtonBase-root': {
        padding: 0,
        svg: {
            fontSize: '36px',
            color: '#000',
        },
    },
}))

interface SingleGroupHeaderProps {
    back: () => void
    teamName: string
}

const SingleGroupHeader: FunctionComponent<SingleGroupHeaderProps> = (props) => {
    return (
        <Base>
            <IconButton onClick={props.back}>
                <NavigateBefore sx={{ fontSize: '42px !important' }} />
            </IconButton>
            <h3>{props.teamName}</h3>
            <IconButton>
                <Settings />
            </IconButton>
        </Base>
    )
}

export default SingleGroupHeader
