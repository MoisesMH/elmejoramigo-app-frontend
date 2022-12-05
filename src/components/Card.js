import React from "react";
import useRedirectHook from "../hooks/useRedirectHook";
import "../styles/Card.css"

function Card({ title, sub1, sub2, sub3, link = null }) {
    const goToLink = useRedirectHook(link)
    return (
        <div className="Card" onClick={goToLink}>
            <div className="Card__header">
                <span>
                    <img src="https://source.unsplash.com/DziZIYOGAHc" alt="un perrito" />
                </span>
            </div>
            {/* <div className="Card__header--sep"><hr className="linea" /></div> */}
            <div className="Card__body">
                <div className="Card__body--wrapper">
                    <h1 className="title">Nombre de mascota</h1>
                    <p className="subtitle1">Subtitle</p>
                </div>
                <div className="Card__body--wrapper">
                    <p className="subtitle2">Subtitle2</p>
                    <p className="subtitle3">Subtitle3</p>
                </div>
            </div>
        </div>
    )
}

export default Card