import data from '@/data/restaurants.json'
import Image from 'next/image'
import MenuItem from '@/components/MenuItem/MenuItem'
import { notFound } from 'next/navigation'
import styles from '@/app/layout.module.css'

export default async function RestaurantDetails({params}) {

    const { slug } = await params
    const restaurants  = data.restaurants
    const restaurant = restaurants.find(restaurant => restaurant.slug === slug)

    if (!restaurant) {
        notFound();
    }

    return (
        <>
            <div className="heroImage">
                <Image fill className="image" src={restaurant.image} alt={restaurant.slug}/>
            </div>
            <div className="mainWrapper">
                <div className="contentWrapper">
                    <div className="menu">
                        <div className="restaurantHeader">
                            <h1 className="restaurantName">{restaurant.name}</h1>
                            <button className="favoriteButton">
                                <img className="heartIcon" src="/Like.svg" alt="Ajouter aux favoris" />
                            </button>
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