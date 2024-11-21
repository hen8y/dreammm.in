import { useState } from "react";
import NavLink from "./NavLink";

interface NavigationProps {
    showBg: boolean;
}

export default function Navigation({
    showBg,
}: NavigationProps): JSX.Element
{
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav
            className={`fixed w-full top-0 z-[100] ${showBg && 'bg-black/70 backdrop-blur-2xl'}`}>
            <div className="w-full max-w-6xl mx-auto space p-4">
                <div>
                    <span className="font-bold text-lime-600 text-3xl">
                        CRYETO
                    </span>
                </div>

                <div className="md:flex hidden text-neutral-500 gap-4 items-center">
                    <NavLink content="Home" />
                    <NavLink content="Service" link="service" />
                    <NavLink content="Stats" link="stats" />
                    <NavLink content="Ask A Question" link="ask-question" />
                </div>
                <div className="md:block hidden">
                    <a className="rounded-lg px-5 p-2 text-sm text-black font-semibold bg-lime-400">
                        Exlpore now
                    </a>
                </div>

                <div className="flex md:hidden justify-between">
                    <button
                        onClick={() => toggleMenu()}
                        className="top-4 right-4 z-[1000] p-2 rounded-full border-neutral-600/40 shadow-md bg-neutral-900/90 text-neutral-400 border md:hidden"
                        aria-label={isOpen ? "Close Menu" : "Open Menu"}
                    >
                        {isOpen ? (
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="currentColor"
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
                                color="currentColor"
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
                className={`fixed top-0 right-0 h-full w-full bg-neutral-950 shadow-lg z-40 transform transition-transform duration-300 ease-in-out md:hidden
                    ${isOpen ? "translate-x-0" : "translate-x-full"}
                `}
            >
                <div className="absolute h-full z-10 p-8 space-y-10 pt-32 w-full">
                    <NavLink
                        className="text-4xl"
                        content="Home"
                        handleClick={toggleMenu}
                    />
                    <NavLink
                        content="Service"
                        className="text-4xl"
                        link="service"
                        handleClick={toggleMenu}
                    />
                    <NavLink
                        content="Stats"
                        link="stats"
                        className="text-4xl"
                        handleClick={toggleMenu}
                    />
                    <NavLink
                        content="Ask A Question"
                        className="text-4xl"
                        link="ask-question"
                        handleClick={toggleMenu}
                    />
                </div>

                <div className="absolute bottom-0 z-10 w-full mb-5 p-5 space">
                    <p>Register</p>
                    <p>Login</p>
                    <p>Support</p>
                </div>
            </div>
        </nav>
    );
}
