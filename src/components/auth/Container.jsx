import React from 'react'

export const Container = ({ title, icon, children  }) => {
    return (
        <>
            <div className="w-full flex justify-between items-center text-slate-700 font-bold px-5">
                <div className="text-2xl">
                    { icon }
                </div>

                <div>
                    { title }
                </div>
            </div>
            { children }
        </>
    )
}
