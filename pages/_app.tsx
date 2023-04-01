import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import '../styles/globals.css'
import '../styles/main.css'

const queryClient = new QueryClient()

// Material UI
import theme from '@/material'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded'
import { AppBar, BottomNavigation, BottomNavigationAction, IconButton, ThemeProvider, Toolbar, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter()
    const currentPath = router.asPath || ''
    const [value, setValue] = useState(0)

    useEffect(() => {
        if (currentPath.startsWith('/rankingi')) setValue(1)
        else if (currentPath.startsWith('/profil')) setValue(2)
        else setValue(0)
    }, [currentPath])

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <main className="wrapper">
                    <AppBar position="relative">
                        <Toolbar variant="dense">
                            {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                                xd
                            </IconButton> */}
                            <Typography variant="h6" color="inherit" component="div">
                                TryMe
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <div className="content">
                        <Component {...pageProps} />
                    </div>
                    <BottomNavigation
                        showLabels
                        value={value}
                        onChange={(_, newValue) => {
                            switch (newValue) {
                                case 0:
                                    router.push('/')
                                    break
                                case 1:
                                    router.push('/rankingi')
                                    break
                                case 2:
                                    router.push('/profil')
                                    break
                            }
                        }}
                    >
                        <BottomNavigationAction label="Główna" icon={<HomeRoundedIcon />} />
                        <BottomNavigationAction label="Rankingi" icon={<QueryStatsRoundedIcon />} />
                        <BottomNavigationAction label="Profil" icon={<AccountCircleRoundedIcon />} />
                    </BottomNavigation>
                </main>
            </ThemeProvider>
        </QueryClientProvider>
    )
}
