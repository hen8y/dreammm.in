import { Link } from "react-scroll";

type NavLinkType = {
    content: string;
    link?: string;
    className?: string;
    handleClick?: () => void;
};

export default function NavLink({
    content,
    link,
    className,
    handleClick
}: NavLinkType) {
    return (
        <div className="center flex-col text-sm cursor-pointer">
            <Link
                to={link ?? ''}
                smooth={true}
                duration={700}
                onClick={handleClick}
                className={className}
            >
                {content}
            </Link>
        </div>
    );
}