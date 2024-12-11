import { IFormData, IListQuotesProps } from "../types";

const ListedQuotes = ({ quotesList, handleRemove, handleEdit }: IListQuotesProps) => {

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Quote
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Author
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Edit
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {quotesList.length && quotesList.map((quote: IFormData) =>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" key={quote.userId}>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 flex-wrap dark:text-white">
                                {quote.content}
                            </th>
                            <td className="px-6 py-4">
                                {quote.name}
                            </td>
                            <td className="px-6 py-4">
                                {quote.date.toString().slice(0, 10)}
                            </td>
                            <td className="px-6 pl-6">
                                <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => handleEdit(quote)}>Edit</button>
                            </td>
                            <td className="px-6 pl-4">
                                <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => handleRemove(quote.userId)}>Remove</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default ListedQuotes;