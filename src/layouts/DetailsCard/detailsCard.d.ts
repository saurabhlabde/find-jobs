
interface IDetailsCardProps {
        props: {
                id: string
                title: string
                commitment: {
                        id: string
                        title: string
                }
                cities: Array<{
                        id: string
                        name: string
                }>
                countries: Array<{
                        id: string
                        name: string
                }>
                remotes: Array<{
                        id: string
                        name: string
                }>
                description: string
                applyUrl: string
                company: {
                        id: string
                        name: string
                }
                tags: Array<{
                        id: string
                        name: string
                }>
                locationNames: string
                userEmail: string
        }
}

export { IDetailsCardProps }