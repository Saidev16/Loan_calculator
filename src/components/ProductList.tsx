import React from "react"
import { Product } from "src/app"

interface ProductListProps {
    products: Product[]
    selectedProduct: Product | null
    setSelectedProduct: (product: Product) => void
}

export const ProductList: React.FC<ProductListProps> = ({
    products,
    selectedProduct,
    setSelectedProduct,
}) => {
    return (
        <div className="flex justify-center items-center gap-5">
            {products.map((product) => (
                <div
                    key={product.id}
                    className={`cursor-pointer w-[${
                        selectedProduct === product ? "75px" : "60px"
                    }] h-[${selectedProduct === product ? "75px" : "60px"}] rounded-full`}
                    onClick={() => setSelectedProduct(product)}>
                    <img className="w-full h-full object-cover" src={product.image} />
                </div>
            ))}
        </div>
    )
}
