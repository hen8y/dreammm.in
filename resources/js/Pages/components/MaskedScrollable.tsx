import React, { useEffect, useRef, useState } from "react";

interface CollectionItem {
    image: string;
    title: string;
    desc: string;
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
                            className="w-72 flex-none bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 transition-colors duration-200 rounded-xl shadow-lg"
                        >
                            <div className="p-3">
                                <div
                                    className="h-44 w-full rounded-lg bg-center bg-no-repeat bg-cover"
                                    style={{
                                        backgroundImage: `url(${item.image})`,
                                    }}
                                />
                                <div className="px-2 mt-3">
                                    <h3 className="text-xl font-semibold">
                                        {item.title}
                                    </h3>
                                    <p className="mt-3 text-xs text-neutral-300">
                                        {item.desc}
                                    </p>
                                </div>
                                <div className="px-2 mt-6">
                                    <a
                                        href="#"
                                        className="inline-block rounded-full text-xs border border-blue-500/20 bg-neutral-800 px-4 py-3 text-blue-400 hover:bg-neutral-700 transition-colors duration-200"
                                    >
                                        Visit Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MaskedScrollable;
