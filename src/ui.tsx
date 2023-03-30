import React from "react"

function ui() {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-6 bg-bg-color ">
            <h1 className="text-[#1B31A8] text-lg md:text-xl font-normal">
                Let's plan your <span className="font-bold">loan.</span>{" "}
            </h1>
            <div className="p-10 bg-white rounded-lg shadow-3xl w-full md:w-[560px] flex flex-col">
                <div className="flex justify-center items-center gap-5">
                    <div className=" cursor-pointer w-[75px] h-[75px] rounded-full">
                        <img
                            className="w-full h-full object-cover"
                            src="https://scontent.frak2-1.fna.fbcdn.net/v/t1.15752-9/334907278_161444540161377_4880849660586010487_n.png?stp=cp0_dst-png&_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHz9VMrDXpvU-sxhQlY0HHt2b8EQFLe_JzZvwRAUt78nDx-fKTHMvCdcxL6ZoXfAKWRuPenSPpm6TmqTacPSJbA&_nc_ohc=hUIxT_APz8gAX_Y34t-&_nc_ht=scontent.frak2-1.fna&oh=03_AdQokS4X1qJxsFKb5Gl9ynr2uwUFBY14AFehNWG8R0Ah-w&oe=644B132E"
                        />
                    </div>

                    <div className=" cursor-pointer w-[60px] h-[60px] rounded-full">
                        <img
                            className="w-full h-full object-cover"
                            src="https://scontent.frak2-1.fna.fbcdn.net/v/t1.15752-9/334910790_517992183637287_1886827686641781991_n.png?stp=cp0_dst-png&_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGnzp0Ve9g9IsospkJOQGv4UWs0WQoCfWlRazRZCgJ9aXXxZQ-RW-8AsnyOz57bmEn04kfYQebNC1bEyo4Y_Z2M&_nc_ohc=fmfEo219nisAX-fZa3d&_nc_ht=scontent.frak2-1.fna&oh=03_AdTfGkU0O0n4U-caGP9P9mINxe8J_TicvRVkHSRC1GTjaA&oe=644B1CCD"
                        />
                    </div>

                    <div className=" cursor-pointer w-[60px] h-[60px] rounded-full">
                        <img
                            className="w-full h-full object-cover"
                            src="https://scontent.frak2-2.fna.fbcdn.net/v/t1.15752-9/334906790_505429478472383_6788596863898683749_n.png?stp=cp0_dst-png&_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGSkM2epeWd5l3bdx0N9ExffYYZ_CsLr0l9hhn8KwuvSbm63WJfXVlJ4p8_LpCxLz_4lZvgs8B-f-VbW8cgYHED&_nc_ohc=Y9yBCe5eikkAX-t2767&_nc_ht=scontent.frak2-2.fna&oh=03_AdRbki8vZtHLJ_zt4BvzAknrb_fktTS4t2UN8z6_h0-ltw&oe=644B1141"
                        />
                    </div>
                </div>

                <div className="mt-6 flex flew-wrap gap-4 flex-col md:flex-row">
                    <div className="flex flex-col gap-1 ">
                        <label className="text-[#1E2A32] text-sm" htmlFor="amount">
                            Loan amount
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                className="border border-[#E9EEF2] rounded w-full md:w-[272px] h-[56px] pl-7 text-[#4D6475] font-medium text-2xl"
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <span className="content text-[#CBD5DC]">$</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1 ">
                        <label className="text-[#1E2A32] text-sm" htmlFor="months">
                            Number of Months
                        </label>
                        <div className="relative">
                            <input
                                type="number"
                                className="border border-[#E9EEF2] rounded h-[56px] w-full md:w-[192px] flex justify-center items-center text-center text-[#8A9CA9] "
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center ">
                                <span className="cursor-pointer px-4 text-[#8A9CA9]">&gt;</span>
                            </div>
                            <div className="absolute inset-y-0 left-0 flex items-center ">
                                <span className="cursor-pointer  px-4 text-[#8A9CA9]">&lt;</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 mb-8 border border-[#E9EEF2]">
                    <div className="p-6 flex justify-between items-center">
                        <p className="font-normal text-xl">Monthly amount</p>
                        <p className="text-[#0079FF] text-3xl font-medium">$521</p>
                    </div>

                    <div className="p-6 bg-[#F4F8FA]">
                        <p className="text-xs font-normal">
                            You’re planning 12 <b>monthly deposits</b> to reach your <b>$25,000</b>{" "}
                            goal by <b>July 2022.</b> The total amount loaned will be <b>$26,300</b>
                        </p>
                    </div>
                </div>
                <button className="bg-[#1B31A8] rounded-[32px] py-4 text-white w-[320px] m-auto">
                    Apply Now
                </button>
            </div>
        </div>
    )
}

export default ui
