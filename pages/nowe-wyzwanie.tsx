import CropDialog from '@/components/atoms/crop-dialog'
import { UserGroupsResult, userGroupsQuery } from '@/helpers/gql/gql-queries'
import { gqlRequest } from '@/helpers/gql/gql-request'
import { Avatar, Button, MenuItem, Select, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import 'react-image-crop/dist/ReactCrop.css'
import { useQuery } from 'react-query'

const challenges = [
    {
        id: 1,
        imgSrc: 'https://mui.com/static/images/avatar/1.jpg',
        name: 'Sabre Tenis',
        people: { Paweł: true, Krzyś: true, Paulina: false, Michał: true, Kacper: false, Kasia: false },
        description: 'Tenis w trakcie pracy, oby Piotrek nie widział',
        createdBy: 'Paweł',
    },
    {
        id: 912,
        imgSrc: 'https://mui.com/static/images/avatar/1.jpg',
        name: 'Bitwa o kebsa',
        people: { Paweł: true, Krzyś: true, Paulina: false, Michał: true, Kacper: false, Kasia: false },
        description: 'najwięcej wygranych = kebsik',
        createdBy: 'Ciebie',
    },
    {
        id: 12,
        imgSrc: 'https://mui.com/static/images/avatar/1.jpg',
        name: '100km do końca marca',
        people: { Paweł: true, Krzyś: true, Paulina: false, Michał: true, Kacper: false, Kasia: false },
        description: 'Cel: maraton w kwietniu',
        createdBy: 'Michał',
    },
    {
        id: 15,
        imgSrc: 'https://mui.com/static/images/avatar/1.jpg',
        name: 'Dookoła jeziora w <3h',
        people: { Paweł: true, Krzyś: true, Paulina: false, Michał: true, Kacper: false, Kasia: false },
        description: '',
        createdBy: 'Paulina',
    },
]

export default () => {
    const router = useRouter()
    const [imageSrc, setImageUrl] = useState<string>()

    const joinClicked = () => {
        router.push('/dolacz')
    }
    const doChallengeClicked = (challenge: any) => {
        console.log({ challenge })
    }
    const [dialogOpened, setDialog] = useState(false)
    const chooseImageClicked = () => {
        setDialog(true)
    }
    const onCropped = (src: string) => {
        setImageUrl(src)
    }

    const { data: teams } = useQuery<UserGroupsResult[]>({
        queryKey: 'chuj',
        queryFn: async () => gqlRequest(userGroupsQuery),
    })
    const [selectedTeam, setSelectedTeam] = useState<string>('')

    useEffect(() => {
        setSelectedTeam(teams?.[0]?.group_id || '')
    }, [teams])

    const createChallengeClicked = () => {
        router.push('/nowe-wyzwanie')
    }

    if (!teams) return

    // const teams = data.map(team =)

    return (
        <div
            style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexFlow: 'row nowrap',
                alignItems: 'stretch',
            }}
        >
            <CropDialog open={dialogOpened} closeClicked={() => setDialog(false)} onReadyUrl={onCropped} />
            <div style={{ display: 'flex', flexFlow: 'column', alignItems: 'stretch', gap: 8, width: '100%' }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Nowe wyzwanie:
                </Typography>
                <TextField id="outlined-basic" label="Co trzeba zrobić?" variant="outlined" />
                <TextField id="outlined-basic2" label="Opis projektu" variant="outlined" />

                <div style={{ display: 'grid', placeItems: 'center' }} onClick={chooseImageClicked}>
                    <Avatar sx={{ width: 128, height: 128 }} src={imageSrc}>
                        X
                    </Avatar>
                </div>

                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedTeam}
                    label="Age"
                    onChange={(e) => setSelectedTeam(e.target.value)}
                >
                    {teams.map((team) => (
                        <MenuItem key={team.group_id} value={team.group_id}>
                            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                                <img alt="" src={team.icon} width={32} height={32} style={{ width: 32, height: 32, borderRadius: '50%' }} />
                                <span>{team.title}</span>
                            </div>
                        </MenuItem>
                    ))}
                </Select>

                <Button variant="outlined" onClick={createChallengeClicked}>
                    Utwórz
                </Button>
            </div>
        </div>
    )
}
