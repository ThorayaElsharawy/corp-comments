import { useEffect, useState } from "react";
import { TFeedbackItem } from "./lib/types";

export function useFeedBackItem() {
    const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchFeedBack = async () => {
            setIsLoading(true)
            try {
                const res = await fetch("https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks")
                if (!res.ok) {
                    throw new Error('Something went wrong')
                }
                const data = await res.json()
                console.log(data)
                setFeedbackItems(data.feedbacks)
            } catch (error) {
                setError('Something went wrong')
            }
            setIsLoading(false)
        }

        fetchFeedBack()
    }, [])


    return {
        feedbackItems,
        setFeedbackItems,
        isLoading,
        error,
    }
}