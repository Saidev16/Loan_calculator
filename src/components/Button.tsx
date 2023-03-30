import React from "react"

interface ButtonProps {
    children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
    return (
        <button className="bg-[#1B31A8] rounded-[32px] py-4 text-white w-[320px] m-auto">
            {children}
        </button>
    )
}
