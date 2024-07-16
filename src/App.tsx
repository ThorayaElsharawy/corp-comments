import { useEffect, useMemo, useState } from "react"
import Container from "./components/layout/Container"
import Footer from "./components/layout/Footer"
import HashtagList from "./components/hashtag/HashtagList"
import { TFeedbackItem } from "./lib/types"
import { useFeedBackItem } from "./hooks"

function App() {
  const { feedbackItems, setFeedbackItems, error, isLoading } = useFeedBackItem()
  const [selectedCompany, setSelectedCompany] = useState('')

  const filterdFeedbackItems = useMemo(() => selectedCompany ?
    feedbackItems.filter(feedback => feedback.company === selectedCompany) :
    feedbackItems, [feedbackItems, selectedCompany])


  const companyList = useMemo(() => feedbackItems.map(feedbackItem => feedbackItem.company), [feedbackItems])

  const handleAddFeedback = async (text: string) => {
    const companyName = text.split(' ').find(word => word.includes('#'))!.substring(1)

    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      upvoteCount: 0,
      badgeLetter: companyName.substring(0, 1).toUpperCase(),
      company: companyName,
      text: text,
      daysAgo: 0
    }
    setFeedbackItems([...feedbackItems, newItem])

    await fetch("https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks", {
      method: 'POST',
      body: JSON.stringify(newItem),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
  }



  return (
    <div className="app">
      <Footer />
      <Container feedbackItems={filterdFeedbackItems} isLoading={isLoading} error={error} handleAddFeedback={handleAddFeedback} />
      <HashtagList setSelectedCompany={setSelectedCompany} companyList={companyList} />
    </div>
  )
}

export default App
