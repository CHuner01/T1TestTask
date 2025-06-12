import styles from './NumbersTable.module.scss'
import Button from "../../shared/Button/Button.tsx";


const NumbersTable = () => {
    return (
        <div className={styles.container}>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button className={styles.itemSpan3}>0</Button>
        </div>
    );
};

export default NumbersTable;