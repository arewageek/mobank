import React from 'react'

const layout = ({ children }) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center px-5 py-10 bg-gray-100">
        <div className="w-full md:w-1/3 rounded-lg shadow-2xl bg-gray-50 px-5 py-10">
            { children }
        </div>
    </div>
  )
}

export default layout