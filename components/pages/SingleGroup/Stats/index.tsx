// Tools
import { useState } from 'react'
import { Divider, Stack } from '@mui/material'
// Types
import type { FunctionComponent } from 'react'
import type { StatsAPIRequest } from '@/types/API'
import type { OptionWithAlias } from '@/components/atoms/forms/StyledSelect'
// Material UI Components
import Typography from '@mui/material/Typography'
import StyledSelect from '@/components/atoms/forms/StyledSelect'
import AvatarAlongsideWithText from '@/components/atoms/User/AvatarAlongsideWithText'
import Place from './Place'

interface StatsProps {
    stats: StatsAPIRequest
}

type FilterOption = keyof StatsAPIRequest

export const options: OptionWithAlias<FilterOption>[] = [
    {
        alias: 'Ten miesiąc',
        value: 'monthly',
    },
    {
        alias: 'Ten rok',
        value: 'annualy',
    },
    {
        alias: 'Ogólne',
        value: 'general',
    },
]

const Stats: FunctionComponent<StatsProps> = (props) => {
    const [currentFilter, setCurrentFilter] = useState<FilterOption>('monthly')

    return (
        <>
            <div className="text-2xl font-medium mb-2">Statystyki</div>
            <StyledSelect
                options={options} //
                onChange={(e) => setCurrentFilter(e.target.value)}
                value={currentFilter}
                sx={{
                    mb: 4,
                }}
            />
            <Stack spacing={2} divider={<Divider />}>
                {props.stats[currentFilter].map((item, index) => {
                    return (
                        <AvatarAlongsideWithText
                            key={index}
                            avatar={item.avatar}
                            fullName={`${item.firstName} ${item.lastName}`}
                            textContent={`${item.points} pkt`}
                            additionalContentOnRightSide={<Place place={item.place} />}
                        />
                    )
                })}
            </Stack>
        </>
    )
}

export default Stats
