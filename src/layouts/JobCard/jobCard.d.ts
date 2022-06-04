
interface IJobCardProps {
        props: {
                id: string
                title: string
                slug: string
                description: string
                company: {
                        id: string
                        name: string
                }
                tags: Array<{
                        id: string
                        name: string
                }>
                locationNames: string | null
        }
}

export { IJobCardProps }