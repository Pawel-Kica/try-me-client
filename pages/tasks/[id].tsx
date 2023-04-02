import { useRouter } from 'next/router'

export default function SingleTask() {
    const router = useRouter()
    return (
        <>
            <div>SingleTask</div>
            <div>Router.query {JSON.stringify(router.query)}</div>
        </>
    )
}
