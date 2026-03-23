'use client'
import { useLikes } from '@/app/context/LikesContext'
import Image from 'next/image'
import MenuItem from '@/components/MenuItem/MenuItem'

export default function RestaurantDetails({image, name, menu, slug}) {
    
    const { toggleLike, isLiked } = useLikes();

    return (
        <>
            <div className="heroImage">
                <Image fill className="image" src={image} alt={name} priority/>
            </div>
            <div className="mainWrapper">
                <div className="contentWrapper">
                    <div className="menu">
                        <div className="restaurantHeader">
                            <h1 className="restaurantName">{name}</h1>
                            <div onClick={() => toggleLike(slug)} className="heart">
                                {!isLiked(slug) && <Image height={22} width={22} src="/icons/like.svg" alt="ajouter aux favoris" />}
                                {isLiked(slug) && <Image height={22} width={22} src="/icons/liked.png" alt="ajouter aux favoris" />}
                            </div>
                        </div>
                        <div>
                            <div className="sectionTitle">Entrées</div>
                            {menu.entrées.map((entree,index) => (
                                <MenuItem key={`${index}-${entree}`} item={entree}/>
                            ))}
                        </div>
                        <div>
                                <div className="sectionTitle">Plats</div>
                            {menu.plats.map((plat,index) => (
                                <MenuItem key={`${index}-${plat}`} item={plat}/>
                            ))}
                        </div>
                        <div>
                            <div className="sectionTitle">Desserts</div>
                            {menu.desserts.map((dessert,index) => (
                                <MenuItem key={`${index}-${dessert}`} item={dessert}/>
                            ))}
                        </div>
                    </div>
                    <button className="orderButton">Commander</button>
                </div>  
            </div>  
        </>
    )
}