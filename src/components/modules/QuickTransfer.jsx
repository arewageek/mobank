import React from 'react'
import { FaCaretDown, FaCcMastercard, FaPaperPlane } from 'react-icons/fa'
import { AvailableCards } from './AvailableCards'

export const QuickTransfer = () => {
    return (
        <div>
            <h3 className="font-bold text-[15pt] text-gray-800 mb-5">
                Quick transfer
            </h3>

            <div className="rounded-3xl bg-violet-100 flex flex-col space-y-5 px-6 py-20">
                <div className="w-full flex items-center space-x-3">
                    <input type="tel" className="text-[8.5pt] font-[450] px-5 py-3 border-2 border-gray-200 bg-gray-50 text-gray-600 placeholder:text-gray-400 w-full rounded-xl" placeholder="Account Number" />

                    <button className="px-5 py-3 rounded-lg bg-indigo-900/90 text-sm text-indigo-50 hover:bg-black transition duration-300">
                        <FaPaperPlane />
                    </button>
                </div>

                <div className="w-full">
                    <div className="rounded-xl border-2 border-gray-300 px-5 py-3 flex justify-between items-center text-[9pt]">
                        <div className="flex items-center space-x-2">
                            <span>
                                <FaCcMastercard />
                            </span>
                            <span>
                                Debit
                            </span>
                        </div>

                        <div className="flex items-center space-x-2">
                            <span>
                                $10.432
                            </span>
                            <span>
                                <FaCaretDown />
                            </span>
                        </div>
                    </div>
                </div>


                <div className="w-full flex items-center space-x-3">
                    <div className="text-[8.5pt] font-[450] h-[60pt] px-5 py-5 border-2 border-gray-200 bg-gray-50 text-gray-600  w-full rounded-xl">
                        <label htmlFor="#amount">
                            Account Number ($)
                        </label>
                        <input type="amount" className="h-full w-full text-lg font-bold text-gray-900 bg-transparent" placeholder="$124" />
                    </div>
                </div>

                <div className="w-full flex justify-center space-x-3 font-bold text-sm">
                    <button className="bg-violet-950 text-violet-50 px-4 py-2 w-full shadow-md rounded-lg hover:bg-violet-300 border-2 border-violet-950 hover:text-violet-950 transition duration-300">
                        Send Money
                    </button>

                    <button className="bg-violet-50 text-violet-950 px-4 py-2 w-full shadow-md rounded-lg hover:bg-violet-300 border-2 border-violet-950 hover:text-violet-950 transition duration-300">
                        Save as Draft
                    </button>
                </div>

                <div>
                    <AvailableCards />
                </div>
            </div>
        </div>
    )
}
