import { useParams } from "react-router-dom";

function Practical21ProductDetails() {

    const { id } = useParams();

    const products = {
        1: {
            name: "Mobile",
            price: "₹20,000",
            description: "Smartphone for daily use."
        },

        2: {
            name: "Laptop",
            price: "₹50,000",
            description:
                "Powerful laptop for students and professionals."
        }
    };

    const product = products[id];

    if (!product) {
        return <h2>Product Not Found</h2>;
    }

    return (
        <div>

            <h2>Product Details</h2>

            <p>
                <strong>Product Name:</strong> {product.name}
            </p>

            <p>
                <strong>Price:</strong> {product.price}
            </p>

            <p>
                <strong>Description:</strong> {product.description}
            </p>

        </div>
    );
}

export default Practical21ProductDetails;