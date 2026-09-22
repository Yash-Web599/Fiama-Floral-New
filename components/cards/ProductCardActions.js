'use client'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { WishlistModal } from '@/components/modals/WishlistModal'
import { CartModal } from '@/components/modals/CartModal'
import { QuickView } from '@/components/modals/QuickView'
import { AddToWishlist } from '@/components/common/AddToWishlist'
import AddToCart from '@/components/common/AddToCart'
import Image from 'next/image'

export const ProductCardActions = ({ product, cartIcon = false, optionsClass = '', eyeClassName = '' }) => {

    const [showWishlistModal, setShowWishlistModal] = useState(false)
    const [showCartModal, setShowCartModal] = useState(false)
    const [showQuickViewModal, setShowQuickViewModal] = useState(false)

    return (
        <>
            <div className={`card-options btn-group position-absolute bg-light-grey-800 w-100 bottom-0 rounded-0 ${optionsClass}`}>
                <AddToWishlist product={product} onClick={() => setShowWishlistModal(true)} />
                <AddToCart product={product} onClick={() => setShowCartModal(true)} cartIcon={cartIcon} />
                <Button variant='outline-light' className="rounded-0 py-2" onClick={() => setShowQuickViewModal(true)}>
                    <Image src='/icons/eye-white.svg' alt="" className={eyeClassName} width={16} height={16}/>
                </Button>
            </div>
            <WishlistModal
                show={showWishlistModal}
                handleClose={() => setShowWishlistModal(false)}
                image={product?.thumbnail}
                title={product?.title}
                discount={product?.discountPercentage}
            />
            <CartModal
                show={showCartModal}
                handleClose={() => setShowCartModal(false)}
                image={product?.thumbnail}
                title={product?.title}
                discount={product?.discountPercentage}
            />
            <QuickView
                show={showQuickViewModal}
                handleClose={() => setShowQuickViewModal(false)}
                product={product}
            />
        </>
    )
}
