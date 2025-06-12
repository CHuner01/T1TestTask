import type { ReactNode } from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";

interface ButtonProps {
    children: ReactNode;
    className?: string;
}

const Button = ({ children, className }: ButtonProps) => {
    return (
        <>
            <button
                onClick={() => console.log("test")}
                className={clsx(styles.button, className)}
            >
                {children}
            </button>
        </>
    );
};

export default Button;
