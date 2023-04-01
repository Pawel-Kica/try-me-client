import { TextField } from '@mui/material'
import { AiOutlineCheck } from 'react-icons/ai'
import { Group } from 'next/dist/shared/lib/router/utils/route-regex'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { CreateGroupArgs, GroupEntity, createGroupQuery } from '../helpers/gql/gql-queries'
import { gqlRequest } from '../helpers/gql/gql-request'
import { useRouter } from 'next/router'

export default function CreateTeam() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [step, setstep] = useState<number>(0)
    const [res, setRes] = useState<GroupEntity>({ invitation_id: 'FADASD' } as any)

    const router = useRouter()

    const nextStepHandler = () => {
        setstep(1)
    }

    const handler = async () => {
        // const response = await gqlRequest<Group>(createGroupQuery, { title: name, description, members: [] } as CreateGroupArgs)
        // alert(JSON.stringify(response))
        setstep(2)
    }

    return (
        <div className="flex items-center justify-center h-full flex-col w-fit mx-auto">
            {step === 0 ? (
                <>
                    <div className="font-medium text-5xl">Nowy team</div>
                    <div className="mt-4 text-gray-600">Stwórz, a następnie dodaj swoich znajomych</div>
                    <div className="flex flex-col self-stretch w-[90%] mx-auto mt-12 max-w-[400px]">
                        <TextField
                            id="outlined-basic"
                            label="Podaj nazwe team'u"
                            variant="outlined"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            className="my-4"
                            id="outlined-basic"
                            label="Podaj krótki opis swojego team'u"
                            variant="outlined"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <button onClick={nextStepHandler} className="p-3 rounded-xl px-4 bg-pr text-white text-center mt-8 mb-4">
                            Następny krok
                        </button>
                        <Link href="/druzyny" className="p-3 rounded-xl px-4 bg-tx text-white text-center">
                            Anuluj
                        </Link>
                    </div>
                </>
            ) : step === 1 ? (
                <div className="w-screen max-w-[325px] self-stretchflex flex-col">
                    <div className="mx-auto flex flex-col items-center justify-center bg-white h-96 rounded-xl relative">
                        <div className="hover:cursor-pointer p-3 w-[80%] text-center border-pr border-2 rounded-xl">Wybierz avatar</div>
                        <img className="w-full h-full absolute rounded-xl" alt="" src="https://mui.com/static/images/avatar/1.jpg" />
                    </div>
                    <div className="flex flex-col self-stretch">
                        <button onClick={handler} className="p-3 rounded-xl px-4 bg-pr text-white text-center mt-8 mb-4">
                            Utwórz team
                        </button>
                        <button onClick={() => setstep(0)} className="p-3 rounded-xl px-4 bg-tx text-white text-center">
                            Poprzedni krok
                        </button>
                    </div>
                </div>
            ) : (
                <div className="text-center w-[90%]">
                    <AiOutlineCheck className="text-green-600 mx-auto text-[10rem] mb-4" />
                    <div className="text-5xl font-medium">Sukces</div>
                    <div className="mt-4">
                        Twoja drużyna została stworzona pomyślnie. Rozpocznij Waszą przygodę poprzez dodanie swoich znajomych
                    </div>
                    <div className="mt-8">
                        <div className="text-xl">Kod do zespołu</div>
                        <div className="bg-black text-white max-w-[325px] uppercase mx-auto px-2 py-2 mt-3 rounded-xl text-xl font-medium">
                            {res.invitation_id}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
