type HashtagItemProps = {
    company: string,
    setSelectedCompany: React.Dispatch<React.SetStateAction<string>>
}

export default function HashtagItem({ company, setSelectedCompany }: HashtagItemProps) {
    return (
        <li key={company}>
            <button onClick={() => setSelectedCompany(company)}>#{company}</button>
        </li>
    )
}