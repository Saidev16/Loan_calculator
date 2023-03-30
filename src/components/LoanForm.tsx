import React from "react"
import { Product } from "src/app"

interface LoanFormProps {
    loanAmount: number
    setLoanAmount: (amount: number) => void
    months: number
    setMonths: (months: number) => void
    incrementMonths: () => void
    decrementMonths: () => void
    selectedProduct: Product | null
    formatCurrency: (value: number) => string
}

export const LoanForm: React.FC<LoanFormProps> = ({
    loanAmount,
    setLoanAmount,
    months,
    setMonths,
    incrementMonths,
    decrementMonths,
    selectedProduct,
    formatCurrency,
}) => {
    const handleLoanAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value.replace(/[^0-9.]/g, ""))
        if (!isNaN(value)) {
            setLoanAmount(value)
        }
    }

    return (
        <div className="mt-6 flex flew-wrap gap-4 flex-col md:flex-row">
            {/* Loan Amount */}
            <div className="flex flex-col gap-1 ">
                <label className="text-[#1E2A32] text-sm" htmlFor="amount">
                    Loan amount
                </label>
                <div className="relative">
                    <input
                        type="text"
                        value={formatCurrency(loanAmount)}
                        onChange={handleLoanAmountChange}
                        onBlur={(e) => {
                            if (selectedProduct) {
                                if (loanAmount < selectedProduct.min_amount) {
                                    setLoanAmount(selectedProduct.min_amount)
                                } else if (loanAmount > selectedProduct.max_amount) {
                                    setLoanAmount(selectedProduct.max_amount)
                                }
                            }
                        }}
                        className="border border-[#E9EEF2] rounded w-full md:w-[272px] h-[56px] pl-7 text-[#4D6475] font-medium text-2xl"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <span className="content text-[#CBD5DC]">$</span>
                    </div>
                </div>
            </div>
            {/* Number of Months */}
            <div className="flex flex-col gap-1 ">
                <label className="text-[#1E2A32] text-sm" htmlFor="months">
                    Number of Months
                </label>
                <div className="relative">
                    <input
                        type="number"
                        value={months}
                        onChange={(e) => {
                            const value = parseInt(e.target.value, 10)
                            if (
                                !isNaN(value) &&
                                selectedProduct &&
                                value >= selectedProduct.min_tenure &&
                                value <= selectedProduct.max_tenure
                            ) {
                                setMonths(value)
                            }
                        }}
                        className="border border-[#E9EEF2] rounded h-[56px] w-full md:w-[192px] flex justify-center items-center text-center text-[#8A9CA9] "
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center ">
                        <span
                            className="cursor-pointer px-4 text-[#8A9CA9]"
                            onClick={incrementMonths}>
                            &gt;
                        </span>
                    </div>
                    <div className="absolute inset-y-0 left-0 flex items-center ">
                        <span
                            className="cursor-pointer  px-4 text-[#8A9CA9]"
                            onClick={decrementMonths}>
                            &lt;
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
