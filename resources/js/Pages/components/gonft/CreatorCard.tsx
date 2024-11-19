type CreatorCardType = {
    name: string,
    balance: string,
    avatar: string
}

export default function CreatorCard({
    name,
    balance,
    avatar
}:CreatorCardType) {
    return (
        <div className="rounded-full shrink-0 p-1 !max-h-12 bg-gray-50 border shadow-sm hover:shadow-lg cursor-pointer delay-75 ease-in-out transition-all hover:bg-white pe-4  inline-flex items-center gap-2">
            <div className="p-0.5 rounded-full bg-white border-2 border-purple-400/30">
                <img src={avatar} className="size-8 rounded-full" alt={name} />
            </div>
            <div>
                <div className="font-semibold text-xs">{name}</div>
                <div className="text-green-400 text-[10px]">
                    {balance}
                </div>
            </div>
        </div>
    )
}