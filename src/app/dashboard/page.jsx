import { VirtualCard } from '@/components/bits/VirtualCard'
import { QuickTransfer } from '@/components/modules/QuickTransfer'
import { RecentTrxs } from '@/components/modules/RecentTrxs'
import { UpcomingPayments } from '@/components/modules/UpcomingPayments'
import React from 'react'

const Dashboard = () => {
    return (
        <main className="w-full bg-violet-50/40 p-5 rounded-3xl flex">
            <div className="w-full md:w-3/4 px-3 md:pr-20 md:pl-4">

                <div className="w-full h-fit flex flex-wrap flex-col md:flex-row">
                    <div className="w-full h-fit md:w-1/2 px-8 py-3">
                        <div className="mb-10 my-2">
                            <h4 className="font-bold">
                                Dashboard
                            </h4>
                        </div>
                        <VirtualCard />
                    </div>

                    <div className="w-full h-fit md:w-1/2 px-8 py-3">
                        <div className="mb-10 my-2">
                            <h4 className="font-bold">
                                Upcoming Payments
                            </h4>
                        </div>
                        <UpcomingPayments />
                    </div>

                    <div className="w-full px-8 py-3">
                        {/* <div className="mb-10 my-2">
                            <h4 className="font-bold">
                                Recent Transactons
                            </h4>
                        </div> */}
                        <RecentTrxs />
                    </div>
                </div>

            </div>

            <div className="w-full md:w-1/4">
                <QuickTransfer />
            </div>
        </main>
    )
}

export default Dashboard