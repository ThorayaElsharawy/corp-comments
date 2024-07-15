import FeedbackItem from "./FeedbackItem";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import { type TFeedbackItem } from "../../lib/types";

type FeedBackListProps = {
    feedbackItems: TFeedbackItem[];
    isLoading: boolean;
    error: string
}

export default function FeedBackList({feedbackItems, isLoading, error} : FeedBackListProps) {
    return <ol className="feedback-list">
        {isLoading && <Spinner />}

        {error && <ErrorMessage message={error} />}

        {!isLoading && feedbackItems.map(feedbackItem => (
            <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
        ))}
    </ol>
}