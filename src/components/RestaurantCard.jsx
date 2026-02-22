"use client"

import { useState } from "react"
import styled from "styled-components"

const Card = styled.div`
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    max-width: 490px;
    margin-top: 50px;
    background: white;
    
    @media (max-width : 768px) {
        margin-top: 0;
    }
`
const CardPicture = styled.div`
    width: 100%;
    height: 200px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-image: url(${(props) => props.$image});
    background-position: center;
    background-size: cover;
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
    width:20px;
`

const liked = "../icons/liked.png"
const unliked = "../icons/unliked.png"


export default function RestaurantCard({name, location, image, slug}) {
    const [active, setActive] = useState(false)

    function inFavorite() {
        if(active) { setActive(false)}
        else { setActive(true)}
    }
    return (
            <Card>
                <CardPicture $image={image} alt={slug}/>
                <CardId>
                    <div>
                        <CardTitle>{name}</CardTitle>
                        <CardSubTitle>{location}</CardSubTitle>
                    </div>
                    <Like $active={active} src={active ? liked : unliked} alt="like" onClick={() => inFavorite()}/>
                </CardId>
            </Card>
    )
}