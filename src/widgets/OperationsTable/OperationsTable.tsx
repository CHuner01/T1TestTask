import Button from "../../shared/Button/Button.tsx";
import styles from "./OperationsTable.module.scss";

const OperationsTable = () => {
    return (
        <div className={styles.container}>
            <Button>+</Button>
            <Button>-</Button>
            <Button className={styles.itemSpan2}>Сброс</Button>
        </div>
    );
};

export default OperationsTable;
