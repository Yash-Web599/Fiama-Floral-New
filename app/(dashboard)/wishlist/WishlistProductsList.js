'use client'
import { WishlistCard } from '@/components/cards/WishlistCard'
import { useSelector } from 'react-redux'

const WishlistProductsList = () => {

  const { wishlistItems } = useSelector((state) => state.wishlist)

  return (
    <div className="wishlist-items-wrapper">
        {wishlistItems.length === 0 ?
            <p className='fs-3 text-danger text-center'>No items available in your wishlist</p> :
            wishlistItems?.map((item) => {
                return (
                    <WishlistCard key={item.id} product={item} />
                )
            })
        }
    </div>
  )
}

export default WishlistProductsList
