// Tools
import { styled, alpha } from '@mui/material'
// Types
import type { ButtonBaseProps } from '@mui/material/ButtonBase'
// Material UI Components
import ButtonBase from '@mui/material/ButtonBase'
// Styled components
export type Color = 'text' | 'primary' | 'secondary' | 'error' | 'success'

interface StyledButtonProps extends ButtonBaseProps {
    color?: Color
    iconButton?: boolean
}

export default styled(ButtonBase, {
    shouldForwardProp: (prop: string) => !['color'].includes(prop),
})<StyledButtonProps>(({ theme, ...props }) => {
    const possibleColor: Record<Color, { main: string; contrast: string }> = {
        error: {
            main: theme.palette.error.main,
            contrast: '#fff',
        },
        primary: {
            main: theme.palette.primary.main,
            contrast: '#fff',
        },
        success: {
            main: theme.palette.success.main,
            contrast: '#fff',
        },
        secondary: {
            main: theme.palette.secondary.main,
            contrast: '#fff',
        },
        text: {
            main: theme.palette.text.primary,
            contrast: theme.palette.text.secondary,
        },
    }

    const { main: backgroundColor, contrast: fontColor } = possibleColor[props.color ?? 'text']

    return {
        background: `${backgroundColor} !important`,
        color: `${fontColor} !important`,
        borderRadius: '5px',
        border: `1px solid ${backgroundColor}`,
        transition: 'all .3s',
        fontSize: '18px',
        padding: '4px 10px',
        width: '100%',
        height: '42px',
        svg: {
            color: 'inherit !important',
        },
        '&:not(&:nth-of-type(1))': {
            marginLeft: '10px',
        },
        '&:hover, &:focus': {
            color: backgroundColor,
            background: fontColor,
        },
        '&.Mui-disabled': {
            border: `1px solid #000`,
            background: alpha(theme.palette.text.primary, 0.4),
            color: alpha('#000', 0.8),
        },
        ...(props.iconButton && {
            padding: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '32px',
            height: '32px',
        }),
    }
})
