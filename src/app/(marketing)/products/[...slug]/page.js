import { products } from "../page";


export default async function ProductDetailPage({ params }) {
    const { slug } = await params;
    // console.log(slug);
    const category = slug[0];
    const productId = slug[1];

    const product = products.find((p) =>
        p.category === category && p.id === parseInt(productId)
    )

    // console.log(product);

    return (
        <div>
            <h3>ProductDetailPage</h3>
            { product ? (
                <>
                    <h3>{product.name}</h3>
                </>
            ) : (
                <>
                    <h3>Khong tim thay san pham</h3>
                </>
            )}
        </div>
    )
}