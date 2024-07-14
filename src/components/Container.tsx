import FeedBackList from "./FeedBackList"
import Header from "./Header"

type ContainerProps = {}

export default function Container({ }: ContainerProps) {
    return (
        <main className="container">
            <Header />
            <FeedBackList />
        </main>
    )
}