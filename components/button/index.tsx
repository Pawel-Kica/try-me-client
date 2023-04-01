// Tools
import API from '@/helpers/API'
import { useEffect } from 'react'
// Types
import type { FunctionComponent } from 'react'
import { useQuery } from 'react-query'

// Material UI Components
import MUIButton from '@mui/material/Button'

interface ButtonProps {
    //
}

const Button: FunctionComponent<ButtonProps> = (props) => {
    useEffect(() => {
        //
    }, [])
    const { data, status } = useQuery({
        queryKey: 'chuj',
        queryFn: async () => {
            return API.get('')
        },
    })
    return (
        <div className="klasa">
            <h1>Result: </h1>
            <div>{JSON.stringify(data?.data)}</div>

            <h3>
                Error: <span>{status}</span>
            </h3>

            <MUIButton color="primary" variant="contained">
                Essa material
            </MUIButton>
        </div>
    )
}

export default Button
