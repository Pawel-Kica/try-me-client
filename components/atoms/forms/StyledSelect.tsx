// Tools
import { styled, SxProps } from '@mui/material'
// Types
import type { ChangeEvent } from 'react'
// Material UI Components
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
// Styled components
const StyledSelectBase = styled(Select)(({ theme }) => ({
    fontSize: '16px',
    borderRadius: 10,
    '@media (max-width:500px)': {
        width: '100%',
    },
    '.MuiSelect-select': {
        padding: '10px 16px',
        border: `3px solid ${theme.palette.primary.main}`,
        fontFamily: 'Montserrat',
        borderRadius: '10 !important',
        background: 'transparent !important',
    },
    ...(theme.palette.mode === 'light' &&
        {
            // background: theme.palette.background.default,
        }),
}))

export interface OptionWithAlias<T> {
    value: T
    alias: string
}

type OnChangeEvent<T> = ChangeEvent<HTMLHtmlElement> & {
    target: {
        value: T
    }
}

interface StyledSelectProps<T> {
    value: T
    options: (T | OptionWithAlias<T>)[]
    onChange: (e: OnChangeEvent<T>) => void
    className?: string
    sx?: SxProps
}

export default function StyledSelect<T extends number | string | Record<any, any>>(props: StyledSelectProps<T>) {
    return (
        <StyledSelectBase
            onChange={props.onChange as any} //
            value={props.value}
            color="primary"
            className={props.className}
            sx={(theme) => (typeof props.sx === 'function' ? props.sx(theme) : props.sx ?? new Object())}
        >
            {props.options.map((item, index) => {
                if (item instanceof Object) {
                    return (
                        <MenuItem value={item.value} key={index} className="">
                            {item.alias}
                        </MenuItem>
                    )
                }
                if (item instanceof Object) throw new Error('You cannot use an object standalone without an alias to it!')
                return (
                    <MenuItem value={item} key={index}>
                        {item}
                    </MenuItem>
                )
            })}
        </StyledSelectBase>
    )
}
