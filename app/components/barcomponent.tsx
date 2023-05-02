import { useState, useEffect } from "react";
import textcomponent from "./textcomponent";

function BarComponent() {
    //load component
    const [selectedComponent, setSelectedComponent] = useState(null);
    const loadComponent = async (component: any) => {
        const loadedComponent = await import(`../components/${component}`);
        setSelectedComponent(loadedComponent.default);
        return loadedComponent.default;
      };
    //end load
    const [activeButton, setActiveButton] = useState<null | string>('');

    const handleClick = (button: string) => {
        setActiveButton(button);
    }
    return (
        <>
            <div className=" absolute top-16 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
                <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
                    <button
                        data-tooltip-target="tooltip-home"
                        type="button"
                        className={`inline-flex flex-col items-center justify-center px-5 rounded-l-full  dark:hover:bg-gray-800 group ${activeButton === 'button1' ? 'bg-gray-800 text-white hover:bg-gray-800' : ''}`} onClick={() => { handleClick('button1'); loadComponent("textcomponent");}}
                    >
                        <i className=" fa-xl mt-5 fa-solid fa-file-lines w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"></i>

                        <span className="sr-only">File</span>
                    </button>
                    <div
                        id="tooltip-home"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                    >
                        File
                        <div className="tooltip-arrow" data-popper-arrow="" />
                    </div>
                    <button
                        data-tooltip-target="tooltip-wallet"
                        type="button"
                        className={`inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group ${activeButton === 'button2' ? 'bg-gray-800 text-white hover:bg-gray-800' : ''} `} onClick={() => handleClick('button2')}
                    >
                        <i className="fa-xl mt-5 w-6 h-6 fa-solid fa-paperclip text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"></i>
                        <span className="sr-only">url</span>
                    </button>
                    <div
                        id="tooltip-wallet"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                    >
                        url
                        <div className="tooltip-arrow" data-popper-arrow="" />
                    </div>


                    <button
                        data-tooltip-target="tooltip-wallet"
                        type="button"
                        className={`inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group ${activeButton === 'button3' ? 'bg-gray-800 text-white hover:bg-gray-800' : ''} `}  onClick={() => handleClick('button3')}
                    >
                        <i className="fa-xl fa-solid mt-5 fa-wifi w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"></i>
                        <span className="sr-only">Wallet</span>
                    </button>
                    <div
                        id="tooltip-wallet"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                    >
                        Wallet
                        <div className="tooltip-arrow" data-popper-arrow="" />
                    </div>


                    <div
                        id="tooltip-new"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                    >
                        Create new item
                        <div className="tooltip-arrow" data-popper-arrow="" />
                    </div>
                    <button
                        data-tooltip-target="tooltip-settings"
                        type="button"
                        className={`inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group ${activeButton === 'button4' ? 'bg-gray-800 text-white hover:bg-gray-800' : ''}`} onClick={() => handleClick('button4')}
                    >
                        <i className="fa-xl mt-5 fa-regular fa-envelope w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"></i>
                        <span className="sr-only">email</span>
                    </button>
                    <div
                        id="tooltip-settings"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                    >
                        email
                        <div className="tooltip-arrow" data-popper-arrow="" />
                    </div>
                    <button
                        data-tooltip-target="tooltip-profile"
                        type="button"
                        className={`inline-flex flex-col items-center justify-center px-5 rounded-r-full hover:bg-gray-50 dark:hover:bg-gray-800 group ${activeButton === 'button5' ? 'bg-gray-800 text-white hover:bg-gray-800' : ''}`} onClick={() => handleClick('button5')}
                    >
                        <i className="fa-solid fa-xl mt-5 h-6 w-6  fa-comment-sms text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"></i>
                        <span className="sr-only">SMS</span>
                    </button>
                    <div
                        id="tooltip-profile"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                    >
                        SMS
                        <div className="tooltip-arrow" data-popper-arrow="" />
                    </div>
                </div>
            </div>
            {selectedComponent && selectedComponent}
            </>
    )
}

export default BarComponent;