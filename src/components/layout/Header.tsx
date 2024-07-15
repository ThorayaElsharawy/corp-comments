import Pattern from "../Pattern";
import Logo from "../Logo"
import PageHeading from "../PageHeading";
import FeedbackForm from "../feedback/FeedbackForm";

type HeaderProps = {
    handleAddFeedback: (text: string) => void
}

export default function Header({handleAddFeedback} : HeaderProps) {
    return <header>
        <Pattern />
        <Logo />
        <PageHeading />
        <FeedbackForm onAddFeedback={handleAddFeedback} />
    </header>
}