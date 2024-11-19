import React from "react";
import MaskedScrollable from "./components/MaskedScrollable";
import { XIcon, DiscordIcon, MailIcon, TelegramIcon, LinkIcon } from "./components/Icons/Index";
import IconContainer from "./components/IconContainer";


interface Project {
    image: string;
    title: string;
    link: string;
}

interface SocialLink {
    component: React.FC<{ size: number }>;
    link: string;
}

const recentProjects: Project[] = [
    {
        image: "/images/projects/golnft.png",
        title: "GolNFT",
        link: "golnft",
    }
];

const projects: Project[] = [
    {
        image: "/images/projects/golnft.png",
        title: "another",
        link: "hen8y.me",
    }
];

const socialLinks: SocialLink[] = [
    { component: XIcon, link: "https://x.com/dreammingod" },
    { component: MailIcon, link: "mailto:hen8y@outlook.com" },
    { component: TelegramIcon, link: "https://x.com/dreammingod" },
    { component: DiscordIcon, link: "https://x.com/dreammingod" },
];

export default function Main()
{
    return (
        <main className="min-h-screen w-full text-neutral-300 p-5 md:flex-none pt-7 md:pt-20 sm:px-20 bg-[#090909] bg-column">
            <div className="max-w-5xl pb-20 sm:pb-5 mx-auto md:flex md:gap-20">
                <section className="flex flex-col justify-center items-center sm:block">
                    <div className="rounded-full border-2 shadow-lg shadow-blue-400/20 size-32 border-blue-500/10"></div>
                    <p className="mt-7 text-3xl font-semibold">Ogbonna Henry</p>
                    <p className="mt-2">Full-Stack Software Developer</p>
                    <div className="flex items-center gap-2 mt-4">
                        {socialLinks.map((social, i) => (
                            <IconContainer key={i} component={social.component} link={social.link} />
                        ))}
                    </div>
                </section>

                <section className="flex-1 min-w-0">
                    <div className="mt-10 overflow-hidden px-4">
                        <div className="flex gap-3 items-center ps-5">
                            <IconContainer component={LinkIcon} />
                            <p className="text-2xl font-semibold">Recent Projects</p>
                        </div>
                        <MaskedScrollable collection={recentProjects} />
                    </div>

                    <div className="mt-10 px-4 overflow-hidden">
                        <div className="flex gap-3 items-center ps-5">
                        <IconContainer component={LinkIcon} />
                            <p className="text-2xl font-semibold">Other Projects</p>
                        </div>
                        <MaskedScrollable collection={projects} />
                    </div>
                </section>
            </div>
        </main>
    );
};
