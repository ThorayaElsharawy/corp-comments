import { GoTriangleUp } from "react-icons/go";

export default function FeedBackList() {
    return <ol className="feedback-list">
        <li className="feedback">
            <button>
                <GoTriangleUp />

                <span>593</span>
            </button>
            <div>
                <p>F</p>
            </div>
            <div>
                <p>Facebook</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat consectetur eligendi quaerat maiores minus quasi?</p>
            </div>
            <p>4d</p>
        </li>
    </ol>
}