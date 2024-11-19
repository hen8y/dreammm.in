import { useState } from "react";
import NavLink from "./NavLink";

interface NavigationProps {
    showBg: boolean;
}

export default function Navigation({
    showBg,
}: NavigationProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav
            className={`md:fixed w-full top-0 z-[100] ${showBg && 'bg-black/90 backdrop-blur-2xl'}`}>
            <div className="w-full max-w-6xl mx-auto space p-4">
                <div>
                    <span className="font-bold text-lime-600 text-3xl">
                        CRYETO
                    </span>
                </div>

                <div className="md:flex hidden text-neutral-500 gap-4 items-center">
                    <NavLink content="Explore" />
                    <NavLink content="Creators" link="creators" />
                    <NavLink content="Collection" link="collection" />
                    <NavLink content="Automation" link="automation" />
                </div>
                <div className="md:block hidden">
                    <a className="rounded-lg px-4 p-2 text-sm text-black font-semibold bg-lime-400">
                        Exlpore now
                    </a>
                </div>

                <div className="flex md:hidden justify-between">
                    <button
                        onClick={() => toggleMenu()}
                        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-100 border md:hidden"
                        aria-label={isOpen ? "Close Menu" : "Open Menu"}
                    >
                        {isOpen ? (
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                color="#000000"
                                fill="none"
                            >
                                <circle
                                    cx="17.75"
                                    cy="6.25"
                                    r="4.25"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                />
                                <circle
                                    cx="6.25"
                                    cy="6.25"
                                    r="4.25"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                />
                                <circle
                                    cx="17.75"
                                    cy="17.75"
                                    r="4.25"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                />
                                <circle
                                    cx="6.25"
                                    cy="17.75"
                                    r="4.25"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
            <div
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden
                ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                onClick={() => toggleMenu()}
            />

            <div
                className={`fixed top-0 right-0 h-full w-full bg-cyber-900 shadow-lg z-40 transform transition-transform duration-300 ease-in-out md:hidden
                    ${isOpen ? "translate-x-0" : "translate-x-full"}
                `}
            >
                <div className="absolute z-10 mt-[25vh] text-center space-y-7 w-full">
                    <NavLink
                        className="text-4xl"
                        content="Explore"
                        handleClick={toggleMenu}
                    />
                    <NavLink
                        content="Creators"
                        className="text-4xl"
                        link="creators"
                        handleClick={toggleMenu}
                    />
                    <NavLink
                        content="Collection"
                        link="collection"
                        handleClick={toggleMenu}
                    />
                    <NavLink
                        content="Automation"
                        className="text-4xl"
                        link="automation"
                        handleClick={toggleMenu}
                    />
                </div>
                <div className="absolute size-full overflow-hidden">
                    <div className="size-96 absolute -bottom-52 -left-52 rounded-full bg-golnft-gradient-full blur-3xl"></div>
                    <div className="size-96 absolute -top-52 -right-52 rounded-full bg-golnft-gradient-full blur-2xl"></div>
                </div>
            </div>
        </nav>
    );
}
