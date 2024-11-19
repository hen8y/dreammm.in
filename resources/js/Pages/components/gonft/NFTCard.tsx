type NFTCardType = {
    image: string,
    name: string,
    title: string,
    avatar: string,
    price: string,
}

export default function NFTCard({
    name,
    title,
    price,
    avatar,
    image
} : NFTCardType) {
    return (
        <div className="border rounded-xl p-3 shadow-sm">
            <div className="space">
                <img src={avatar} className="size-6 rounded-full" alt={name} />
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0"/></svg>
            </div>
            <div className="mt-3">
                <img src={image} alt={title} className="rounded-2xl" />
                <div className="space">
                    <div>
                        <div className="mt-3 text-cyber-700 text-sm font-semibold">{title}</div>
                        <div className="mt-1 text-cyber-700 text-xs font-medium">{price}</div>
                    </div>
                    <div className="size-6 center rounded-full bg-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="0.9em" height="0.9em" viewBox="0 0 24 24"><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 4c-3.2 0-5 2.667-5 4c0-1.333-1.8-4-5-4S3 6.667 3 8c0 7 9 12 9 12s9-5 9-12c0-1.333-.8-4-4-4"/></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}