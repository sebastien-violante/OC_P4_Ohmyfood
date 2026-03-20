'use client'
import data from '@/data/restaurants.json'
import Image from 'next/image'
import MenuItem from '@/components/MenuItem/MenuItem'
import { notFound } from 'next/navigation'
import { useLikes } from '@/app/context/LikesContext'
import { use } from 'react'
import { useEffect, useState } from 'react'

export default function RestaurantDetails({params}) {

    const { slug } = use(params)
    const [restaurant, setRestaurant] = useState(null)
    const { toggleLike, isLiked } = useLikes();

    async function getRestaurant(slug){
        const restaurants = data.restaurants
        const restaurant = restaurants.find(restaurant => restaurant.slug === slug)
        if (!restaurant) {
            notFound();
        }
        return restaurant
    }
    useEffect(() => {
        async function getData() {
            const restaurant = await getRestaurant(slug)
            setRestaurant(restaurant)
        }
        getData()
    },[])
    
    if(!restaurant) return

    return (
        <>
            <div className="heroImage">
                <Image fill className="image" src={restaurant.image} alt={restaurant.name} priority/>
            </div>
            <div className="mainWrapper">
                <div className="contentWrapper">
                    <div className="menu">
                        <div className="restaurantHeader">
                            <h1 className="restaurantName">{restaurant.name}</h1>
                            <div onClick={() => toggleLike(slug)} className="heart">
                                {!isLiked(slug) && <Image height={22} width={22} src="/icons/like.svg" alt="ajouter aux favoris" />}
                                {isLiked(slug) && <Image height={22} width={22} src="/icons/liked.png" alt="ajouter aux favoris" />}
                            </div>
                        </div>
                        <div>
                            <div className="sectionTitle">Entrées</div>
                            {restaurant.menu.entrées.map((entree,index) => (
                                <MenuItem key={index} item={entree}/>
                            ))}
                        </div>
                        <div>
                             <div className="sectionTitle">Plats</div>
                            {restaurant.menu.plats.map((plat,index) => (
                                <MenuItem key={index} item={plat}/>
                            ))}
                        </div>
                        <div>
                            <div className="sectionTitle">Desserts</div>
                            {restaurant.menu.desserts.map((dessert,index) => (
                                <MenuItem key={index} item={dessert}/>
                            ))}
                        </div>
                    </div>
                    <button className="orderButton">Commander</button>
                </div>  
            </div>  
        </>
    )
}