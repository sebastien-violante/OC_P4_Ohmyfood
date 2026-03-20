'use client'
import { createContext, useContext, useState } from "react"

const LikesContext = createContext()

export function LikeProvider({children}) {
    const [likedRestaurants, setLikedRestaurants] = useState([])

    function toggleLike(restaurantSlug) {
        setLikedRestaurants(prev => prev.includes(restaurantSlug) ? prev.filter((slug) => slug != restaurantSlug) : [...prev, restaurantSlug])
    }

    function isLiked(restaurantSlug) {
        return likedRestaurants.includes(restaurantSlug)
    }

    return (
        <LikesContext.Provider value={{ likedRestaurants, toggleLike, isLiked}}>
            { children }
        </LikesContext.Provider>
    )
}

export function useLikes() {
    return useContext(LikesContext)
}