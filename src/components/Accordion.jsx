import Chevron from "./Chevron"
import { useState, useRef } from "react"

const Accordion = (props) => {
    const [active, setActive] = useState("")
    const [heigth, setHeigth] = useState("0px")
    const [rotate, setRotate] = useState("accordion__icon")
    const content = useRef(null)

    function toggleAccordion() {
        setActive(active === "" ? "active-acc" : "")
        setHeigth(active === "active-acc" ? "0px" : `${content.current.scrollHeight}px`)
        setRotate(active === "active-acc" ? "accordion__icon" : "accordion__icon rotate")
    }
    return (
        <div className="accordion__section">
            <button className={`accordion ${active}`} onClick={toggleAccordion}>
                <p className="accordion__title">{props.title}</p>
                <Chevron className={`${rotate}`} width={15} fill={"#0c0b0b"} />
            </button>
            <div
                ref={content}
                style={{ maxHeight: `${heigth}` }}
                className="accordion__content"
            >
                <div className="accordion__text" dangerouslySetInnerHTML={{ __html: props.content }}>

                </div>
            </div>
        </div>
    )
}

export default Accordion