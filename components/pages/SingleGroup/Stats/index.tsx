// Tools
import FaceIcon from '@mui/icons-material/Star'
import { Chip, Divider, Stack } from '@mui/material'
import { useState } from 'react'
// Types
import type { OptionWithAlias } from '@/components/atoms/forms/StyledSelect'
import type { StatsAPIRequest } from '@/types/API'
import type { FunctionComponent } from 'react'
// Material UI Components
import AvatarAlongsideWithText from '@/components/atoms/User/AvatarAlongsideWithText'
import StyledSelect from '@/components/atoms/forms/StyledSelect'
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
            <div
                style={{ display: 'flex', flexFlow: 'row nowrap', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}
            >
                <span className="text-2xl font-medium mb-2">Statystyki</span>
                <StyledSelect
                    sx={{ width: 'unset!important' }}
                    options={options} //
                    onChange={(e) => setCurrentFilter(e.target.value)}
                    value={currentFilter}
                />
            </div>
            <Stack spacing={2} divider={<Divider />}>
                {props.stats[currentFilter].map((item, index) => {
                    return (
                        <AvatarAlongsideWithText
                            key={index}
                            avatar={item.avatar}
                            fullName={`${item.firstName} ${item.lastName}`}
                            textContent={
                                (
                                    <>
                                        <span>{item.points} pkt</span>
                                        {item.previousWinner && (
                                            <Chip
                                                className="ml-4"
                                                variant="outlined"
                                                color="success"
                                                size="small"
                                                icon={<FaceIcon />}
                                                label="Ostatnio najlepszy"
                                            ></Chip>
                                        )}
                                    </>
                                ) as any
                            }
                            additionalContentOnRightSide={<Place place={item.place} />}
                        />
                    )
                })}
            </Stack>
        </>
    )
}

export default Stats
