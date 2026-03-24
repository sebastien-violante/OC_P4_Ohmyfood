import data from '@/data/restaurants.json'
import { notFound } from 'next/navigation'
import RestaurantDetails from '@/components/RestaurantDetails/RestaurantDetails'

async function getRestaurant(slug) {
    const restaurants = data.restaurants
    const restaurant = restaurants.find(restaurant => restaurant.slug === slug)
    return restaurant
}

export default async function Restaurant({params}) {
    console.log(params)
    const { slug } = await params
    const restaurant = await getRestaurant(slug)
        
    if(!restaurant) {
        notFound()
    }

    return (
        <>
            <RestaurantDetails {...restaurant}/>
        </>
    )
}