import { useParams } from "react-router-dom"
const ProductDetail = () => {
    const params = useParams()
    return (
        <div>
            <h1>Product detaials</h1>
            <p>Product id is {params.id}</p>
        </div>
    )
}

export default ProductDetail