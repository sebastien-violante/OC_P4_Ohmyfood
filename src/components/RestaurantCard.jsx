"use client"
import { useState } from "react"
import Link from 'next/link'
import styles from './RestaurantCard.module.css'
import Image from 'next/image'
import { useLikes } from "@/app/context/LikesContext"


const liked = "../icons/liked.png"
const unliked = "../icons/unliked.png"


export default function RestaurantCard({name, location, image, slug}) {
     
    const { toggleLike, isLiked } = useLikes()
    function isLike(event) {
        event.preventDefault()
        event.stopPropagation()
        toggleLike(slug)
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
                   {!isLiked(slug) && <img src="/icons/like.svg" alt="ajouter aux favoris" className={styles.like}/>}
                   {isLiked(slug) && <img src="/icons/liked.png" alt="ajouter aux favoris" className={styles.like}/>}
                </div>
            </div>
        </Link>
    )
}