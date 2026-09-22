import { Badge, Card, Col } from 'react-bootstrap';
import { ConvertToCurrency } from '../../helper/utils';
import { ProductCardActions } from './ProductCardActions';
import Link from 'next/link';
import Image from 'next/image';

export const ShopProductCard = ({ product }) => {

    return (
        <Col sm={6} lg={4} className="shop-grid-products">
            <div className="shop-card position-relative">
                <Card className="border-0 rounded-0 position-relative h-100">
                    <Card.Body className="card-image bg-body-secondary p-0 position-relative overflow-hidden">
                        <Badge bg="secondary" className="px-3 py-1 rounded-0 position-absolute fw-bold" style={{ top: "18px" }}>{Math.trunc(product?.discountPercentage)}%</Badge>
                        <ProductCardActions product={product} />
                        <Link href={`/product-details/${product?.id}`}><Image src={product?.thumbnail} width={317} height={317}  className="card-img-top img-fluid" alt="" /></Link>
                    </Card.Body>
                    <Card.Footer className="card-body bg-light-subtle d-flex flex-column align-items-center position-relative mt-auto">
                        <Link href={`/product-details/${product?.id}`} className="card-text d-inline-block stretched-link text-decoration-none display-5 text-dark fw-normal text-uppercase nav-link dark-mode-text" style={{ marginbottom: "10px" }}>{product?.title}</Link>
                        <p className="card-text mb-0 text-light-grey fw-semibold mt-1">{ConvertToCurrency(product?.price)}</p>
                    </Card.Footer>
                </Card>
            </div>
        </Col>
    )
}
