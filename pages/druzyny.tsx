import Link from 'next/link'

export default function Druzyny() {
    return (
        <div className="flex items-center justify-center h-full flex-col w-fit mx-auto">
            <div className="font-medium text-6xl">
                Witaj w <span className="text-pr font-semibold">TryMe</span>
            </div>
            <div className="mt-4 text-gray-600">Zacznij swoją przygodę</div>
            <div className="flex flex-col self-stretch w-[90%] mx-auto">
                <Link href="/stworz-druzyne" className="p-3 rounded-xl px-4 bg-pr text-white text-center mt-20 mb-4">
                    Dołącz do istniejącego zespołu
                </Link>
                <Link href="/stworz-druzyne" className="p-3 rounded-xl px-4 bg-tx text-white text-center">
                    Stwórz zespół
                </Link>
            </div>
        </div>
    )
}
