import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Children, ReactNode, useEffect, useState } from "react";

interface AnimatedSectionProps {
    id: string;
    children: ReactNode;
}

export default function AnimatedSection({
    id,
    children,
}: AnimatedSectionProps) {
    const [hasAnimated, setHasAnimated] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const animationProps = isMobile
        ? {
              initial: { opacity: 0 },
              animate: {
                  opacity: hasAnimated ? 1 : 0,
              },
              transition: {
                  duration: 0.5,
              },
          }
        : {
              initial: { opacity: 0, y: 50 },
              animate: {
                  opacity: hasAnimated ? 1 : 0,
                  y: hasAnimated ? 0 : 50,
              },
              transition: {
                  duration: 0.8,
                  ease: [0.4, 0, 0.2, 1],
              },
          };

    return (
        <InView
            as="div"
            threshold={0.1}
            onChange={(inView) => {
                if (inView && !hasAnimated) {
                    setHasAnimated(true);
                }
            }}
            triggerOnce={true}
        >
            <motion.div
                id={id}
                className={`section ${hasAnimated ? "in-view" : ""}`}
                {...animationProps}
            >
                {children}
            </motion.div>
        </InView>
    );
}
