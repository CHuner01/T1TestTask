import type { ReactNode } from "react";
import styles from "./Display.module.scss";

interface DisplayProps {
    children: ReactNode;
}

const Display = ({ children }: DisplayProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>{children}</div>
        </div>
    );
};

export default Display;
