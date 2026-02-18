import styled from "styled-components"

const Card = styled.div`
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    max-width: 490px;
    margin-top: 50px;
    background: white;
`
const CardPicture = styled.img`
    width: 100%;
    height: 200px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`
const CardId = styled.div`
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const CardTitle = styled.p`
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 5px;
`
const CardSubTitle = styled.p`
    font-size: 17px;
    font-weight: 300;
`
const Like = styled.img`
    height: 20px;
    width:20px
`

const imagePicture = "../images/restaurants/jay-wennington-N_Y88TWmGwA-unsplash.jpg"
const likeSrc = "../icons/like.png"

export default function RestaurantCard() {
    return (
        <>
            
                <Card>
                    <CardPicture src={imagePicture} alt="un hotel"/>
                    <CardId>
                        <div>
                            <CardTitle>La palette du goût</CardTitle>
                            <CardSubTitle>Ménilmontant</CardSubTitle>
                        </div>
                        <Like src={likeSrc} alt="like"/>
                    </CardId>
                    
                </Card>
            
        </>
    )
}