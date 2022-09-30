import "./OfferBtn.css";
import { useState } from "react";

const OfferBtn = () => {

    const list = ["iphone 9", "moto g5", "pixel 8", "oneplus 12", "redmi note 23"];
    const [offer, setOffer] = useState("Offer on click");
    const [count, setCount] = useState(0);

    const clickHandler = () => {
        setOffer(Math.floor(Math.random() * 10) == 1 ? "congrats !!!, You got an offer on " + list[0] : " Some offer at this time");
        setCount(count + 1);
    }

    return (
        <>
            <button onClick={clickHandler} >Get it</button>
            <h3>{offer}</h3>
            <h3>{count < 5 ? `You have tried ${count} times, and remaining attempt ${5-count}  left` : "Limit exceeded !!!"}</h3>
            <h3>{list[count]}</h3>
        </>
    )
}

export default OfferBtn;