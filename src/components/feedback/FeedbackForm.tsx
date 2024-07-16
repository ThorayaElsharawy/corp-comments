import { useState } from "react"
import { MAX_CHARACTERS } from "../../lib/constants";

type FeedbackFormProps = {
    onAddFeedback: (text: string) => void
}

export default function FeedbackForm({ onAddFeedback }: FeedbackFormProps) {
    const [text, setText] = useState("");
    const [validIndicator, setValidIndicator] = useState(false)
    const [InvalidIndicator, setInValidIndicator] = useState(false)

    const charCount = MAX_CHARACTERS - text.length;

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.target.value
        if (newText.length > MAX_CHARACTERS) return
        setText(newText)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (text.includes('#') && text.length > 5) {
            setValidIndicator(true);
            setTimeout(() => {
                setValidIndicator(false)
            }, 2000)
        } else {
            setInValidIndicator(true)
            setTimeout(() => {
                setInValidIndicator(false)
            }, 2000)
            return
        }

        onAddFeedback(text)
        setText('')
    }

    return <form
        onSubmit={handleSubmit}
        className={`form ${validIndicator ? 'form--valid' : ''} ${InvalidIndicator ? 'form--invalid' : ''}`}>
        <textarea
            value={text}
            onChange={handleChange}
            id="feedback-textarea"
            placeholder="bla"
            spellCheck={false}
            maxLength={MAX_CHARACTERS}
        />

        <label htmlFor="feedback-textarea">
            Enter your feedback here, remember to #hashtag the company
        </label>

        <div>
            <p className="u-italic">{charCount}</p>
            <button>
                <span>Submit</span>
            </button>
        </div>
    </form>
}