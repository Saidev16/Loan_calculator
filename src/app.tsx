import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { ProductList } from "./components/ProductList"
import { LoanForm } from "./components/LoanForm"
import { LoanDetails } from "./components/LoanDetails"
import { Button } from "./components/Button"

export interface Product {
    id: string
    interest: number
    name: string
    min_amount: number
    max_amount: number
    min_tenure: number
    max_tenure: number
    image: string
}

const fetchProducts = async (): Promise<Product[]> => {
    const response = await fetch("/products.json")
    return await response.json()
}

const App = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
    const [loanAmount, setLoanAmount] = useState<number>(0)
    const [months, setMonths] = useState<number>(0)

    const [totalAmount, setTotalAmount] = useState<number>(0)
    const [monthlyInstallment, setMonthlyInstallment] = useState<number>(0)

    useEffect(() => {
        const loadProducts = async () => {
            const productsData = await fetchProducts()
            setProducts(productsData)
            if (productsData.length > 0) {
                setSelectedProduct(productsData[0])
            }
        }
        loadProducts()
    }, [])

    useEffect(() => {
        if (selectedProduct) {
            setLoanAmount(Number(selectedProduct.min_amount))
            setMonths(Number(selectedProduct.min_tenure))
        }
    }, [selectedProduct])

    useEffect(() => {
        if (selectedProduct) {
            const interestAmount = loanAmount * selectedProduct.interest
            const total = loanAmount + interestAmount
            setTotalAmount(total)
            setMonthlyInstallment(total / months)
        }
    }, [selectedProduct, loanAmount, months])

    const incrementMonths = () => {
        if (selectedProduct && months < selectedProduct.max_tenure) {
            setMonths(Number(months) + 1)
        }
    }

    const decrementMonths = () => {
        if (selectedProduct && months > selectedProduct.min_tenure) {
            setMonths(months - 1)
        }
    }

    const formatCurrency = (value: number): string => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(value)
    }

    const handleLoanAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value.replace(/[^0-9.]/g, ""))
        console.log(value)
        if (!isNaN(value)) {
            setLoanAmount(value)
        }
    }

    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-6 bg-bg-color ">
            <h1 className="text-[#1B31A8] text-lg md:text-xl font-normal">
                Let's plan your <span className="font-bold">loan.</span>{" "}
            </h1>
            <div className="p-10 bg-white rounded-lg shadow-3xl w-full md:w-[560px] flex flex-col">
                <ProductList
                    products={products}
                    selectedProduct={selectedProduct}
                    setSelectedProduct={setSelectedProduct}
                />

                <LoanForm
                    loanAmount={loanAmount}
                    setLoanAmount={setLoanAmount}
                    months={months}
                    setMonths={setMonths}
                    incrementMonths={incrementMonths}
                    decrementMonths={decrementMonths}
                    selectedProduct={selectedProduct}
                    formatCurrency={formatCurrency}
                />

                <LoanDetails
                    months={months}
                    loanAmount={loanAmount}
                    totalAmount={totalAmount}
                    monthlyInstallment={monthlyInstallment}
                    formatCurrency={formatCurrency}
                />

                <Button>Apply Now</Button>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
