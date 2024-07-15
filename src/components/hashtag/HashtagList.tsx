import HashtagItem from "./HashtagItem"

type HashtagListProps = {
    companyList: string[]
}

export default function HashtagList({ companyList }: HashtagListProps) {
    const uniqueArray = new Set(companyList)

    return (
        <ul className="hashtags">
            {[...uniqueArray].map(company => (
                <HashtagItem company={company} />
            ))}
        </ul>
    )
}