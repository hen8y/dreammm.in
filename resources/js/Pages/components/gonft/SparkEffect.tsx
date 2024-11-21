export default function SparkEffect(): JSX.Element
{
    return (
        <>
            <div className="absolute -top-14 space flex-col opacity-50 h-96 w-32">
                <svg
                    width="200"
                    height="200"
                    className="-rotate-90"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient
                            id="fadeGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                        >
                            <stop
                                offset="0%"
                                stopColor="rgba(229, 231, 235, 0)"
                            />
                            <stop
                                offset="20%"
                                stopColor="rgba(229, 231, 235, 1)"
                            />
                            <stop
                                offset="80%"
                                stopColor="rgba(229, 231, 235, 1)"
                            />
                            <stop
                                offset="100%"
                                stopColor="rgba(229, 231, 235, 0)"
                            />
                        </linearGradient>
                    </defs>

                    <g fill="none" stroke="url(#fadeGradient)" strokeWidth="1">
                        <path d="M10 50 Q 100 10, 190 50" />
                        <path d="M10 60 Q 100 20, 190 60" />
                        <path d="M10 70 Q 100 30, 190 70" />
                        <path d="M10 80 Q 100 40, 190 80" />
                        <path d="M10 90 Q 100 50, 190 90" />
                        <path d="M10 100 Q 100 60, 190 100" />
                        <path d="M10 110 Q 100 70, 190 110" />
                    </g>
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3em"
                    height="3em"
                    fill="black"
                    viewBox="0 0 16 16"
                >
                    <path d="M7.53 1.282a.5.5 0 0 1 .94 0l.478 1.306a7.5 7.5 0 0 0 4.464 4.464l1.305.478a.5.5 0 0 1 0 .94l-1.305.478a7.5 7.5 0 0 0-4.464 4.464l-.478 1.305a.5.5 0 0 1-.94 0l-.478-1.305a7.5 7.5 0 0 0-4.464-4.464L1.282 8.47a.5.5 0 0 1 0-.94l1.306-.478a7.5 7.5 0 0 0 4.464-4.464Z" />
                </svg>
            </div>
            <div className="absolute bottom-10 right-10 space flex-col opacity-50 h-72 w-32">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3em"
                    height="3em"
                    fill="black"
                    viewBox="0 0 16 16"
                >
                    <path d="M7.53 1.282a.5.5 0 0 1 .94 0l.478 1.306a7.5 7.5 0 0 0 4.464 4.464l1.305.478a.5.5 0 0 1 0 .94l-1.305.478a7.5 7.5 0 0 0-4.464 4.464l-.478 1.305a.5.5 0 0 1-.94 0l-.478-1.305a7.5 7.5 0 0 0-4.464-4.464L1.282 8.47a.5.5 0 0 1 0-.94l1.306-.478a7.5 7.5 0 0 0 4.464-4.464Z" />
                </svg>
                <svg
                    width="200"
                    height="200"
                    className="rotate-90"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient
                            id="fadeGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                        >
                            <stop
                                offset="0%"
                                stopColor="rgba(229, 231, 235, 0)"
                            />
                            <stop
                                offset="20%"
                                stopColor="rgba(229, 231, 235, 1)"
                            />
                            <stop
                                offset="80%"
                                stopColor="rgba(229, 231, 235, 1)"
                            />
                            <stop
                                offset="100%"
                                stopColor="rgba(229, 231, 235, 0)"
                            />
                        </linearGradient>
                    </defs>

                    <g fill="none" stroke="url(#fadeGradient)" strokeWidth="1">
                        <path d="M10 50 Q 100 10, 190 50" />
                        <path d="M10 60 Q 100 20, 190 60" />
                        <path d="M10 70 Q 100 30, 190 70" />
                        <path d="M10 80 Q 100 40, 190 80" />
                        <path d="M10 90 Q 100 50, 190 90" />
                        <path d="M10 100 Q 100 60, 190 100" />
                        <path d="M10 110 Q 100 70, 190 110" />
                        <path d="M10 120 Q 100 80, 190 120" />
                        <path d="M10 130 Q 100 90, 190 130" />
                        <path d="M10 140 Q 100 100, 190 140" />
                        <path d="M10 150 Q 100 110, 190 150" />
                        <path d="M10 160 Q 100 120, 190 160" />
                        <path d="M10 170 Q 100 130, 190 170" />
                    </g>
                </svg>
            </div>
        </>
    );
}
