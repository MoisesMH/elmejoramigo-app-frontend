import Card from "./Card";
import "../styles/CardList.css"
// import Container from "./Container";

function CardList() {
    return (
        // <Container>
            <div className="CardList">
                <div className="CardList--wrapper"><Card /></div>
                <div className="CardList--wrapper"><Card /></div>
                <div className="CardList--wrapper"><Card /></div>
                <div className="CardList--wrapper"><Card /></div>
                <div className="CardList--wrapper"><Card /></div>
            </div>
        // </Container>
    )
}

export default CardList