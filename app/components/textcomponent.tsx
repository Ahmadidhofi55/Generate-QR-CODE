import React from 'react'

export default function textcomponent() {
    return (
        <div className=" mt-20  grid grid-rows-3 grid-flow-col gap-4 ">
            <div className="col-start-5 row-span-3 justify-end">
            <img
  src="https://chart.googleapis.com/chart?cht=qr&chl=Default QRCODE&chs=180x180&choe=UTF-8&chld=L|2"
  className="h-auto   max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
  alt="" />
            </div>
            <div className="col-span-2 ml-28">02</div>
            <div className="col-span-2 ml-28 row-span-2 ">03</div>
        </div>
    )
}
