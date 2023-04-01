import { alpha } from '@mui/material'
import { createTheme } from '@mui/material/styles'

export const COLORS = {
    PRIMARY: '#F06543',
    SECONDARY: '#F09D51',
    TEXT: '#121616',
}

export default createTheme({
    palette: {
        primary: {
            main: COLORS.PRIMARY,
        },
        secondary: {
            main: COLORS.SECONDARY,
        },
        error: {
            main: '#D62246',
        },
        success: {
            main: '#388E3C',
        },
        warning: {
            main: '#F57C00',
        },
        background: {
            paper: '#E8E9EB',
            default: '#E0DFD5',
        },
        text: {
            primary: COLORS.TEXT,
            // primary: '#313638',
        },
    },
    components: {
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    fontFamily: "'Montserrat', sans-serif",
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    background: alpha('#000', 0.1),
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    color: COLORS.TEXT,
                    background: '#fff',
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                select: {
                    color: COLORS.TEXT,
                    background: '#fff',
                },
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    fontSize: '1rem',
                    letterSpacing: '1px',
                    fontWeight: 300,
                    textTransform: 'capitalize',
                    background: COLORS.TEXT,
                    padding: '5px 10px',
                    cursor: 'default',
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                h5: {
                    fontWeight: 700,
                    letterSpacing: '-1px',
                    fontSize: '1.8rem',
                },
                h4: {
                    fontWeight: 700,
                    letterSpacing: '-1px',
                    fontSize: '2rem',
                },
                h3: {
                    fontWeight: 900,
                    letterSpacing: '-1px',
                    margin: '0 0 10px 0',
                    fontSize: '2.2rem',
                    lineHeight: '40px',
                    '@media (max-width:1600px)': {
                        lineHeight: '38px',
                        fontSize: '2rem',
                    },
                    '@media (max-width:1200px)': {
                        lineHeight: '32px',
                        fontSize: '1.8rem',
                    },

                    '@media (max-width:900px)': {
                        fontSize: '2.5rem ',
                        lineHeight: '45px',
                    },
                    '@media (max-width:700px)': {
                        fontSize: '2.2rem ',
                        lineHeight: '36px',
                    },
                    '@media (max-width:400px)': {
                        fontSize: '2rem ',
                        lineHeight: '30px',
                    },
                },
                h2: {
                    fontWeight: 900,
                    letterSpacing: '-2px',
                    lineHeight: '55px',
                    '@media (max-width:700px)': {
                        fontSize: '3.5rem',
                    },
                    '@media (max-width:500px)': {
                        fontSize: '3rem',
                    },
                },
                h1: {
                    lineHeight: '84px',
                    fontSize: '5rem',
                    fontWeight: '900',
                    letterSpacing: '-2px',
                    '@media (max-width:1500px)': {
                        fontSize: '4.5rem',
                        lineHeight: '70px',
                    },
                    '@media (max-width:700px)': {
                        fontSize: '4rem',
                        lineHeight: '55px',
                    },
                    '@media (max-width:500px)': {
                        fontSize: '3.5rem',
                        lineHeight: '50px',
                    },
                    '&.long-text': {
                        lineHeight: '78px',
                        fontSize: '3.5rem',
                        '@media (max-width:1500px)': {
                            fontSize: '3rem',
                            lineHeight: '70px',
                        },
                        '@media (max-width:700px)': {
                            fontSize: '2.5rem',
                            lineHeight: '60px',
                        },
                        '@media (max-width:600px)': {
                            fontSize: '2rem',
                            lineHeight: '50px',
                        },
                    },
                },
                body1: {
                    fontSize: '1.2rem',
                },
                body2: {
                    lineHeight: 1.6,
                    fontSize: '1rem',
                },
            },
        },
    },
})
