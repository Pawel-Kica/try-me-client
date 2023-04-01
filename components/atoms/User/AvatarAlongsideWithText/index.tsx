// Tools
import styled from '@emotion/styled'
// Types
import type { FunctionComponent, ReactNode } from 'react'
// Material UI Components
import Avatar from '@mui/material/Avatar'
import FlexBox from '../../FlexBox'
import { alpha } from '@mui/material'

const Base = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',

    '.MuiAvatar-root': {
        width: '56px',
        height: '56px',
        marginRight: '12px',
    },
    h6: {
        margin: '4px 0 4px 0',
        fontSize: '24px',
        fontWeight: '500',
        lineHeight: '.8',
    },
    'span.text-content': {
        fontSize: '18px',
        color: `${alpha('#000', 0.6)}`,
    },
}))

interface AvatarAlongsideWithTextProps {
    avatar: string
    fullName: string
    textContent: string

    additionalContentOnRightSide?: ReactNode
}

const AvatarAlongsideWithText: FunctionComponent<AvatarAlongsideWithTextProps> = (props) => {
    return (
        <Base>
            {props.additionalContentOnRightSide && props.additionalContentOnRightSide}

            <Avatar alt={`${props.fullName}-avatar`} src={props.avatar} />
            <FlexBox column>
                <h6>{props.fullName}</h6>
                <span className="text-content">{props.textContent}</span>
            </FlexBox>
        </Base>
    )
}

export default AvatarAlongsideWithText
