import React from "react";

interface IconContainerProps {
    component: React.FC<{ size: number }>;
    link?: string;
}

const IconContainer: React.FC<IconContainerProps> = ({ component: Component, link }) => {
    return (
        <a href={link} className="size-9 bg-neutral-400 text-neutral-800 center rounded-full">
            <Component size={20} />
        </a>
    );
};

export default IconContainer;
