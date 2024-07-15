import HashtagItem from "./HashtagItem"

type HashtagListProps = {
    companyList: string[];
    setSelectedCompany: React.Dispatch<React.SetStateAction<string>>
}

export default function HashtagList({ companyList, setSelectedCompany }: HashtagListProps) {
    const uniqueArray = new Set(companyList)

    return (
        <ul className="hashtags">
            {[...uniqueArray].map(company => (
                <HashtagItem key={company} company={company} setSelectedCompany={setSelectedCompany} />
            ))}
        </ul>
    )
}