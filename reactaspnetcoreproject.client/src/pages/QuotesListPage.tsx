import ListedQuotes from "../components/ListedQuotes";
import { IListQuotesProps } from "../types";

const QuotesListPage = ({ quotesList, handleRemove, handleEdit }: IListQuotesProps) => {
    return (
        <>
            <ListedQuotes quotesList={quotesList} handleRemove={handleRemove} handleEdit={handleEdit}/>
        </>
    )
}
export default QuotesListPage;