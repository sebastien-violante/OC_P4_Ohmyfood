"use client"

import { useState } from "react"
import Link from 'next/link'
import styles from './RestaurantCard.module.css'
import Image from 'next/image'



const liked = "../icons/liked.png"
const unliked = "../icons/unliked.png"


export default function RestaurantCard({name, location, image, slug}) {
     
    const [like, setLike] = useState(false)
    function isLike(event) {
        event.preventDefault()
        event.stopPropagation()
        if(like) { setLike(false)}
        else { setLike(true)}
    }
    return (
        
        <Link href={`/restaurant/${slug}`} className={styles.card}>
            <div className={styles.cardPicture}>
                <Image src={image} alt={slug} height={200} width={490} className={styles.picture}/>
            </div>
            <div className={styles.cardId}>
                <div>
                    <div className={styles.cardTitle}>{name}</div>
                    <div className={styles.cardSubTitle}>{location}</div>
                </div>
                <div className={styles.like}  onClick={isLike}>
                   {!like && <img src="/icons/like.svg" alt="en favoris" />}
                   {like && <img src="/icons/liked.png" alt="en favoris" />}
                </div>
            </div>
        </Link>
        
        
       
            
            
    )
}