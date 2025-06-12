import NumbersTable from "../widgets/NumbersTable/NumbersTable.tsx";
import OperationsTable from "../widgets/OperationsTable/OperationsTable.tsx";
import EnterButton from "../shared/EnterButton/EnterButton.tsx";
import Display from "../shared/Display/Display.tsx";
import styles from "./Main.module.scss";

const Main = () => {
    return (
        <div className={styles.container}>
            <OperationsTable />
            <NumbersTable />
            <EnterButton />
            <Display>112</Display>
        </div>
    );
};

export default Main;
