import React, { useEffect, useRef, useState } from "react";
import { Link } from "@inertiajs/react";

interface CollectionItem {
    image: string;
    title: string;
    link?: string
}

interface CollectionProps {
    collection: CollectionItem[];
}

const MaskedScrollable: React.FC<CollectionProps> = ({ collection }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [maskGradient, setMaskGradient] = useState<string>("none");

    const updateMask = () => {
        if (!containerRef.current) return;

        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        const isScrollable = scrollWidth > clientWidth;

        if (!isScrollable) {
            setMaskGradient("none");
            return;
        }

        if (scrollLeft === 0) {
            setMaskGradient(
                "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)"
            );
        } else if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth) {
            setMaskGradient(
                "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 100%)"
            );
        } else {
            setMaskGradient(
                "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)"
            );
        }
    };

    useEffect(() => {
        updateMask();
        window.addEventListener("resize", updateMask);
        return () => window.removeEventListener("resize", updateMask);
    }, []);

    return (
        <div className="relative min-w-0">
            <div
                ref={containerRef}
                className="overflow-x-auto scrollbar-hide"
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
                            <img src={item.image} alt={item.title} className="rounded-xl" />
                            <div className="px-2 mt-3">
                                <h3 className="text-xl font-semibold">
                                    {item.title}
                                </h3>
                            </div>
                            <div className="px-2 mt-6">
                                <Link
                                    href={item.link ?? '#'}
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

export default MaskedScrollable;
