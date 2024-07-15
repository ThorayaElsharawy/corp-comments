import { TFeedbackItem } from "../../lib/types"
import FeedBackList from "../feedback/FeedBackList"
import Header from "./Header"

type ContainerProps = {
    feedbackItems: TFeedbackItem[];
    isLoading: boolean;
    error: string;
    handleAddFeedback: (text: string) => void
}

export default function Container({ feedbackItems, isLoading, error, handleAddFeedback }: ContainerProps) {
    return (
        <main className="container">
            <Header handleAddFeedback={handleAddFeedback} />
            <FeedBackList feedbackItems={feedbackItems} isLoading={isLoading} error={error} />
        </main>
    )
}