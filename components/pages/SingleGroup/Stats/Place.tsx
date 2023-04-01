// Tools
import styled from '@emotion/styled'
// Types
import type { FunctionComponent } from 'react'
const PlaceBase = styled('div')(({ theme }) => ({
    width: '48px',
    height: '48px',
    background: '#000',
    color: '#fff',
    borderRadius: '5px',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
    marginRight: '12px',

    '&.place-1': {
        background: '#DBB000',
    },
    '&.place-2': {
        background: '#ECECEC',
        color: '#000',
    },
    '&.place-3': {
        background: '#B7846E',
    },
}))

interface PlaceProps {
    place: number
}

const Place: FunctionComponent<PlaceProps> = (props) => {
    return <PlaceBase className={`place-${props.place}`}>{props.place}</PlaceBase>
}

export default Place
