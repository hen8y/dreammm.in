import { useState } from "react";
import Navigation from "../components/gonft/Navigation";
import SectionCard from "../components/gonft/SectionCard";
import SparkEffect from "../components/gonft/SparkEffect";
import CreatorCard from "../components/gonft/CreatorCard";
import NFTCard from "../components/gonft/NFTCard";
import { data } from "./services/data";
import { Head } from "@inertiajs/react";
import AnimatedSection from "../components/AnimatedSection";

export default function Main(): JSX.Element
{
    const [activeSection, setActiveSection] = useState<string>("golnft");
    const nfts = data.nfts;
    const collection = data.collection;
    const creators = data.creators;

    return (
        <div className="font-poppins overflow-hidden bg-white">
            <Head title="GolNFT" />
            <Navigation
                activeSection={activeSection}
                setActiveSection={setActiveSection}
            />

            <header className="max-w-6xl mx-auto p-4">
                <div
                    onMouseEnter={() => {
                        setActiveSection("golnft");
                    }}
                    className="h-[26rem] w-full bg-golnft-gradient md:bg-md-golnft-gradient relative text-center mt-10 md:mt-20"
                >
                    <div className="relative z-10">
                        <p className="text-4xl sm:text-5xl md:text-6xl font-semibold md:font-medium sm:max-w-[80%] lg:max-w-3xl mx-auto md:leading-[4rem] lg:leading-[4.5rem] text-cyber-800/95">
                            Discover, Collect & Sell Creative NFTs
                        </p>
                        <p className="text-gray-500 text-sm md:text-base sm:max-w-[70%] lg:max-w-xl mt-8 mx-auto ">
                            Golnft is a NFT market which is used by multiple
                            websites to provide the users the best experience.
                        </p>
                    </div>

                    <SparkEffect />
                </div>

                <div className="rounded-3xl min-h-[22rem] bg-cyber-800 relative">
                    <div className="absolute size-full z-20">
                        <div className="center z-10 mb-60 relative w-full">
                            <div className="gap-5 p-3 items-start hide-scroll overflow-auto md:overflow-hidden flex absolute max-w-[49rem] w-full">
                                {nfts.map((item, i) => (
                                    <SectionCard key={i} {...item} />
                                ))}
                            </div>
                        </div>

                        <div className="max-w-2xl mx-auto p-4 w-full text-white grid grid-cols-4">
                            <div className="text-center">
                                <div className="font-medium text-3xl">30k+</div>
                                <p className="mt-2 text-zinc-500 text-xs">
                                    Products
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="font-medium text-3xl">10k+</div>
                                <p className="mt-2 text-zinc-500 text-xs">
                                    Auctions
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="font-medium text-3xl">12k+</div>
                                <p className="mt-2 text-zinc-500 text-xs">
                                    Collections
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="font-medium text-3xl">20k+</div>
                                <p className="mt-2 text-zinc-500 text-xs">
                                    Artists
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute size-full rounded-3xl overflow-hidden">
                        <div className="size-96 absolute -top-52 -left-52 rounded-full bg-golnft-gradient-full blur-3xl"></div>
                        <div className="size-96 absolute -bottom-52 -right-52 rounded-full bg-golnft-gradient-full blur-2xl"></div>
                    </div>
                </div>
            </header>

            <main className="min-h-screen">
                <AnimatedSection id="creators">
                    <section
                        className="max-w-6xl mx-auto py-10 p-4 text-cyber-800"
                        onMouseEnter={() => {
                            setActiveSection("creators");
                        }}
                    >
                        <p className="text-3xl font-medium text-center">
                            Popular Creators
                        </p>
                        <div className="relative w-full mt-8 overflow-auto hide-scroll md:overflow-hidden">
                            <div className="absolute inset-0 flex hide-scroll justify-center overflow-x-auto">
                                <div className="flex flex-wrap justify-center gap-3 md:gap-5 md:p-4 min-w-[26rem]">
                                    {creators.map((item, i) => (
                                        <CreatorCard key={i} {...item} />
                                    ))}
                                </div>
                            </div>
                            <div className="w-full creator-height" />
                        </div>
                    </section>
                </AnimatedSection>

                <section
                    className="max-w-6xl mx-auto py-10 p-4 pt-16 text-cyber-800"
                    onMouseEnter={() => {
                        setActiveSection("collection");
                    }}
                    id="collection"
                >
                    <div className="space">
                        <p className="text-3xl font-medium">
                            Our NFT Collection
                        </p>
                        <a
                            href=""
                            className="rounded-full shrink-0 px-6 p-3 text-xs text-white bg-cyber-800"
                        >
                            Sell All
                        </a>
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-4 justify-center">
                        {collection.map((item, i) => (
                            <AnimatedSection id={item.title} key={i}>
                                <NFTCard {...item} />
                            </AnimatedSection>
                        ))}
                    </div>
                </section>

                <AnimatedSection id="automation">
                    <section
                        className="min-h-[22rem] bg-cyber-800 relative center"
                        onMouseEnter={() => {
                            setActiveSection("automation");
                        }}
                    >
                        <div className="max-w-6xl mx-auto py-10 p-4 absolute size-full z-20 gap-10 grid md:grid-cols-2">
                            <div className="hidden md:block h-72">
                                <img
                                    src="/images/automation.png"
                                    alt="transformer"
                                    className="rounded-3xl h-full"
                                />
                            </div>

                            <div>
                                <p className="text-3xl font-medium text-white">
                                    Hopper - Automation
                                </p>
                                <p className="text-gray-500 mt-2 text-xs">
                                    The infamous gang of rabbits who participate in
                                    machines and automated activites
                                </p>
                                <div className="flex gap-8 mt-3">
                                    <div className="flex gap-1 items-center">
                                        <img
                                            src="/images/avatars/2.png"
                                            className="size-7 rounded-full"
                                            alt="avatars-2"
                                        />
                                        <div className="text-xs">
                                            <p className="text-gray-500">Confirm</p>
                                            <p className="text-white">
                                                Neo Samurai
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-1 items-center">
                                        <img
                                            src="/images/avatars/3.png"
                                            className="size-7 rounded-full"
                                            alt="avatars-3"
                                        />
                                        <div className="text-xs">
                                            <p className="text-gray-500">
                                                Created By
                                            </p>
                                            <p className="text-white">
                                                Chris Ethereal
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-3xl text-[11px] mt-4 p-6 bg-cyber-200/20 backdrop-blur-md max-w-80 flex justify-between h-28">
                                    <div>
                                        <p className="text-white">Current bid</p>
                                        <p className="text-3xl text-white">
                                            1.00 SOL
                                        </p>
                                        <p className="text-gray-400">$3,766.23</p>
                                    </div>
                                    <div className="h-full border border-cyber-500"></div>
                                    <div>
                                        <p className="text-white text-center">
                                            Aution ending in
                                        </p>
                                        <div className="grid grid-cols-3 gap-3 mt-2">
                                            <div>
                                                <div className="text-xl text-white">
                                                    19
                                                </div>
                                                <p className="text-gray-400">hrs</p>
                                            </div>
                                            <div>
                                                <div className="text-xl text-white">
                                                    24
                                                </div>
                                                <p className="text-gray-400">
                                                    mins
                                                </p>
                                            </div>
                                            <div>
                                                <div className="text-xl text-white">
                                                    19
                                                </div>
                                                <p className="text-gray-400">
                                                    secs
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute size-full overflow-hidden">
                            <div className="size-96 absolute -bottom-52 -left-52 rounded-full bg-golnft-gradient-full blur-3xl"></div>
                            <div className="size-96 absolute -top-52 -right-52 rounded-full bg-golnft-gradient-full blur-2xl"></div>
                        </div>
                    </section>
                </AnimatedSection>
            </main>
            <footer className="border-t border-cyber-700 bg-cyber-800 text-center p-4 text-xs text-gray-200">
                &copy 2024
            </footer>
        </div>
    );
}
