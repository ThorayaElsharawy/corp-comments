import { useEffect, useState } from "react"
import Container from "./components/Container"
import Footer from "./components/Footer"
import HashtagList from "./components/HashtagList"
import { TFeedbackItem } from "./lib/types"

function App() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('');

  const handleAddFeedback = (text: string) => {
    const companyName = text.split(' ').find(word => word.includes('#'))!.substring(1)

    const newItem: TFeedbackItem = {
      id: Math.floor(Math.random() * 10),
      upvoteCount: 0,
      badgeLetter: companyName.substring(0, 1).toUpperCase(),
      companyName: companyName,
      text: text,
      daysAgo: 0
    }

    setFeedbackItems([...feedbackItems, newItem])
  }

  useEffect(() => {
    // console.log('here')

    const fetchFeedBack = async () => {
      setIsLoading(true)
      try {
        const res = await fetch("https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks")
        if (!res.ok) {
          throw new Error('Something went wrong')
        }
        const data = await res.json()
        setFeedbackItems(data.feedbacks)
      } catch (error) {
        setError('Something went wrong')
      }
      setIsLoading(false)
    }

    fetchFeedBack()
  }, [])

  return (
    <div className="app">
      <Footer />
      <Container feedbackItems={feedbackItems} isLoading={isLoading} error={error} handleAddFeedback={handleAddFeedback} />
      <HashtagList />
    </div>
  )
}

export default App
