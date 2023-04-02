import StyledSelect from '../components/atoms/forms/StyledSelect'
import Stats, { options } from '../components/pages/SingleGroup/Stats'
import { stats } from './chuj'

export default function Rankingi() {
    return (
        <div>
            <Stats
                stats={{
                    annualy: stats,
                    general: stats,
                    monthly: stats,
                }}
            />
        </div>
    )
}
