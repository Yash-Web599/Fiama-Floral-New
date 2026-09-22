'use client'
import { Badge, Card} from 'react-bootstrap'
import { ConvertToCurrency } from '../../helper/utils'
import { ProductCardActions } from './ProductCardActions'
import Link from 'next/link'
import Image from 'next/image'

export const RelatedProductCard = ({ product }) => {

    return (
        <div className="swiper-slide">
            <div className="new-arrival-card position-relative">
                <Card className="card border-0 rounded-0 position-relative w-100">
                    <Card.Body className="card-image bg-body-secondary p-0 position-relative overflow-hidden">
                        <Badge bg="primary" className="px-3 py-1 rounded-0 position-absolute fw-bold" style={{ top: "18px" }}>{Math.trunc(product?.discountPercentage)}%</Badge>
                        <ProductCardActions product={product} cartIcon={true} optionsClass='end-0' />
                        <Link href={`/product-details/${product?.id}`}><Image width={317} height={317} src={product?.thumbnail} className="card-img-top img-fluid" alt="" /></Link>
                    </Card.Body>
                    <Card.Footer className="bg-light-subtle bg-white d-flex flex-column ps-0 align-items-start position-relative border-0">
                        <div className="mb-1 position-relative">
                            <Image src='/icons/star.svg' width={12} height={12} alt="" className="icon--12px me-4px" />
                            <Image src='/icons/star.svg' width={12} height={12} alt="" className="icon--12px me-4px" />
                            <Image src='/icons/star.svg' width={12} height={12} alt="" className="icon--12px me-4px" />
                            <Image src='/icons/star.svg' width={12} height={12} alt="" className="icon--12px me-4px" />
                            <Image src='/icons/star.svg' width={12} height={12} alt="" className="icon--12px me-4px" />
                        </div>
                        <Link href={`/product-details/${product?.id}`} className="card-text d-inline-block text-decoration-none display-5 text-dark fw-normal text-uppercase nav-link fs-14 fw-normal dark-mode-text" style={{ marginBottom: "10px" }}>{product?.title}</Link>
                        <Link href={`/product-details/${product?.id}`} className="card-text mb-0 text-light-grey fw-semibold pt-1 border-top w-100 text-decoration-none">{ConvertToCurrency(product?.price)}</Link>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    )
}
