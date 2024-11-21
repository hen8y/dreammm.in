import React from "react";

interface IconContainerProps {
    component: React.FC<{ size: number }>;
    link?: string;
}

export default function IconContainer ({ component: Component, link }: IconContainerProps): JSX.Element
{
    return (
        <a href={link} className="size-9 bg-neutral-400 text-neutral-800 center rounded-full">
            <Component size={20} />
        </a>
    );
};

