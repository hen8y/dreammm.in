type SectionCardType = {
    className: string,
    image: string,
    name: string,
    title: string,
    avatar: string,
    price: string,
    time: string
}

export default function SectionCard({
    className,
    image,
    name,
    title,
    avatar,
    price,
    time
} : SectionCardType) {
    return (
        <div className={`rounded-3xl w-60 shrink-0 p-3 bg-white ${className}`}>
            <img src={image} alt={title} className="rounded-3xl" />
            <div className="space">
                <div>
                    <div className="mt-3 text-cyber-700 font-semibold">{title}</div>
                    <p className="text-xs text-gray-500">{name}</p>
                </div>
                <img src={avatar} className="size-7 rounded-full" alt={name} />
            </div>
            <div className="mt-4 text-xs text-white rounded-xl bg-cyber-800 p-2 w-full space">
                <div className="flex items-center gap-2">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 12.9l-2.13 2.09c-.56.56-.87 1.29-.87 2.07C9 18.68 10.35 20 12 20s3-1.32 3-2.94c0-.78-.31-1.52-.87-2.07z"/><path fill="currentColor" d="m16 6l-.44.55C14.38 8.02 12 7.19 12 5.3V2S4 6 4 13c0 2.92 1.56 5.47 3.89 6.86c-.56-.79-.89-1.76-.89-2.8c0-1.32.52-2.56 1.47-3.5L12 10.1l3.53 3.47c.95.93 1.47 2.17 1.47 3.5c0 1.02-.31 1.96-.85 2.75c1.89-1.15 3.29-3.06 3.71-5.3c.66-3.55-1.07-6.9-3.86-8.52" opacity="0.3"/></svg>
                    </span>
                    <span>{price}</span>
                </div>
                <p>{time}</p>
            </div>
        </div>
    );
}