import { Dispatch, SetStateAction, useState } from 'react';
import NavLink from "./NavLink";

interface NavigationProps {
    activeSection: string;
    setActiveSection: Dispatch<SetStateAction<string>>
}

export default function Navigation({
    activeSection,
    setActiveSection
}: NavigationProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = (section?:string|null) => {
        setIsOpen(!isOpen);
        if(section) setActiveSection(section);
    };

    return (
        <nav className="space max-w-6xl w-full mx-auto">
            <div className={`w-full md:fixed space p-4 h-16 top-0 z-[100] md:bg-white/80 md:backdrop-blur-lg`}>
                <div className="flex bg-white/80 mt-4 md:mt-0 md:bg-white/0 p-2 md:!p-0 rounded-md backdrop-blur-lg md:backdrop-blur-none fixed md:relative items-center gap-2">
                    <div className="rounded-lg size-8 bg-cyber-800"></div>
                    <span className="font-bold">GolNFT</span>
                </div>

                <div className="md:flex hidden gap-4 items-center">
                    <NavLink
                        section="golnft"
                        activeSection={activeSection}
                        content="Explore"
                        handleClick={() => setActiveSection('golnft')}
                    />
                    <NavLink
                        section="creators"
                        activeSection={activeSection}
                        content="Creators"
                        link="creators"
                        handleClick={() => setActiveSection('creators')}
                    />
                    <NavLink
                        section="collection"
                        activeSection={activeSection}
                        content="Collection"
                        link="collection"
                        handleClick={() => setActiveSection('collection')}
                    />
                    <NavLink
                        section="automation"
                        activeSection={activeSection}
                        content="Automation"
                        link="automation"
                        handleClick={() => setActiveSection('automation')}
                    />
                </div>
                <div className="md:block hidden">
                    <a
                        href=""
                        className="rounded-full px-6 p-3 text-xs text-white bg-cyber-800"
                    >
                        Sign up
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
            <div className="h-16"></div>
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
                        section="golnft"
                        className="text-4xl"
                        activeSection={activeSection}
                        content="Explore"
                        activeColor="text-white"
                        inactiveColor="text-gray-300"
                        handleClick={() => toggleMenu('golnft')}
                    />
                    <NavLink
                        section="creators"
                        activeSection={activeSection}
                        content="Creators"
                        className="text-4xl"
                        activeColor="text-white"
                        inactiveColor="text-gray-300"
                        link="creators"
                        handleClick={() => toggleMenu('creators')}
                    />
                    <NavLink
                        section="collection"
                        activeSection={activeSection}
                        content="Collection"
                        className="text-4xl"
                        activeColor="text-white"
                        inactiveColor="text-gray-300"
                        link="collection"
                        handleClick={() => toggleMenu('collection')}
                    />
                    <NavLink
                        section="automation"
                        activeSection={activeSection}
                        content="Automation"
                        className="text-4xl"
                        activeColor="text-white"
                        inactiveColor="text-gray-300"
                        link="automation"
                        handleClick={() => toggleMenu('automation')}
                    />
                </div>
                <div className="absolute size-full overflow-hidden">
                    <div className="size-96 absolute -bottom-52 -left-52 rounded-full bg-head-gradient-full blur-3xl"></div>
                    <div className="size-96 absolute -top-52 -right-52 rounded-full bg-head-gradient-full blur-2xl"></div>
                </div>
            </div>
        </nav>
    );
}
