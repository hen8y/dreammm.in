import React, { useEffect, useRef, useState } from "react";
import { Link } from "@inertiajs/react";

interface CollectionItem {
    image: string;
    title: string;
    link?: string;
}

interface CollectionProps {
    collection: CollectionItem[];
}

export default function MaskedScrollable ({ collection }: CollectionProps): JSX.Element
{
    const containerRef = useRef<HTMLDivElement>(null);
    const [maskGradient, setMaskGradient] = useState<string>("none");
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

    const updateMask = () => {
        if (isMobile) return;
        if (!containerRef.current) return;

        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        const isScrollable = scrollWidth > clientWidth;

        if (!isScrollable) {
            setMaskGradient("none");
            return;
        }

        if (scrollLeft === 0) {
            setMaskGradient(
                "linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 85%, rgba(0,0,0,0) 100%)"
            );
        } else if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth) {
            setMaskGradient(
                "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 15%, rgba(0,0,0,0.7) 100%)"
            );
        } else {
            setMaskGradient(
                "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 15%, rgba(0,0,0,0.7) 85%, rgba(0,0,0,0) 100%)"
            );
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            updateMask();
        };

        window.addEventListener("resize", handleResize);
        updateMask();

        return () => window.removeEventListener("resize", handleResize);
    }, [isMobile]);

    useEffect(() => {
        updateMask();
    }, [isMobile]);

    return (
        <div className="relative min-w-0">
            <div
                ref={containerRef}
                className="overflow-x-auto hide-scroll"
                onScroll={updateMask}
                style={{
                    maskImage: maskGradient,
                    WebkitMaskImage: maskGradient,
                }}
            >
                <div className="flex gap-3 py-7">
                    {collection.map((item: CollectionItem, i: number) => (
                        <div
                            key={i}
                            className="w-64 flex-none bg-neutral-900 border p-3 border-neutral-800 hover:bg-neutral-800/40 hover-prop rounded-2xl shadow-lg"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="rounded-xl w-full"
                            />
                            <div className="px-2 mt-3">
                                <h3 className="text-xl font-semibold">
                                    {item.title}
                                </h3>
                            </div>
                            <div className="px-2 mt-6">
                                <Link
                                    href={item.link ?? "#"}
                                    className="inline-block rounded-full text-xs border border-blue-500/20 bg-neutral-800 px-4 py-2.5 text-blue-400"
                                >
                                    Visit Project
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};