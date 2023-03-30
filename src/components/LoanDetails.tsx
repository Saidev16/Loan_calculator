import React from "react"

interface LoanDetailsProps {
    months: number
    loanAmount: number
    totalAmount: number
    monthlyInstallment: number
    formatCurrency: (value: number) => string
}

export const LoanDetails: React.FC<LoanDetailsProps> = ({
    months,
    loanAmount,
    totalAmount,
    monthlyInstallment,
    formatCurrency,
}) => {
    return (
        <div className="mt-6 mb-8 border border-[#E9EEF2]">
            <div className="p-6 flex justify-between items-center min-[290px]:flex-col">
                <p className="font-normal text-xl">Monthly amount</p>
                <p className="text-[#0079FF] text-3xl font-medium">
                    {formatCurrency(monthlyInstallment)}
                </p>
            </div>

            <div className="p-6 bg-[#F4F8FA]">
                <p className="text-xs font-normal">
                    You’re planning {months} <b>monthly deposits</b> to reach your{" "}
                    <b>{formatCurrency(loanAmount)}</b> goal by{" "}
                    <b>
                        {new Date(
                            new Date().setMonth(new Date().getMonth() + months)
                        ).toLocaleString("en-US", { month: "long", year: "numeric" })}
                        .
                    </b>{" "}
                    The total amount loaned will be <b>{formatCurrency(totalAmount)}</b>
                </p>
            </div>
        </div>
    )
}
