import NumbersTable from "../widgets/NumbersTable/NumbersTable.tsx";
import OperationsTable from "../widgets/OperationsTable/OperationsTable.tsx";
import EnterButton from "../shared/EnterButton/EnterButton.tsx";

const Main = () => {
    return (
        <div>
            <OperationsTable />
            <NumbersTable />
            <EnterButton />
        </div>
    );
};

export default Main;
