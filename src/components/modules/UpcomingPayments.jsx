import React from 'react'
import { FaCoins, FaCouch } from 'react-icons/fa'

export const UpcomingPayments = () => {
    return (
        <div className="w-full h-full flex justify-around space-x-10">
            <div className="w-full md:w-1/2 bg-violet-300 py-8 px-6 rounded-2xl flex flex-col items-start space-y-7">
                <div className="text-4xl rounded-2xl px-3 py-3 bg-violet-950 text-violet-50">
                    <FaCouch />
                </div>

                <div className="">
                    <div className="text-sm">
                        <h3 className="font-bold text-lg">
                            Freelance
                        </h3>
                        <p className="text-[9pt] font-light">
                            Unregular Payment
                        </p>
                    </div>

                </div>
                <div className="font-bold text-3xl text-slate-800">
                    $1,500
                </div>
            </div>

            <div className="w-full md:w-1/2 bg-violet-300 py-8 px-6 rounded-2xl flex flex-col items-start space-y-7">
                <div className="text-4xl rounded-2xl px-3 py-3 bg-violet-950 text-violet-50">
                    <FaCoins />
                </div>

                <div className="">
                    <div className="text-sm">
                        <h3 className="font-bold text-lg">
                            Salary
                        </h3>
                        <p className="text-[9pt] font-light">
                            Regular Payment
                        </p>
                    </div>

                </div>
                <div className="font-bold text-3xl text-slate-800">
                    $4,000
                </div>
            </div>            
        </div>
    )
}
