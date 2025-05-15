
import Image from "next/image"
interface IcardSide {
    image1: string
    title1: string
    price1?: number
    image2: string
    title2: string
    price2?: number
}



export default function Card(cardSide: IcardSide) {
    return (
        <div>
            <div className="imgCard">
                <div className="imgCard-inner">
                    <div className="imgCard-front">
                        <Image src={cardSide.image1}
                            alt="cards"
                            width={300}
                            height={300}></Image>
                        <h2>{cardSide.title1}</h2>
                        <h2>{cardSide.price1}</h2>
                    </div>
                    <div className="imgCard-back">
                        <Image src={cardSide.image2}
                            alt="cards"
                            width={300}
                            height={300}></Image>
                        <h2>{cardSide.title2}</h2>
                        <h2>{cardSide.price2}</h2>
                    </div>
                </div>
            </div>


        </div>
    )
}