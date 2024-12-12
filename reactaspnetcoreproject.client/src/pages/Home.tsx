import Form from "../components/Form";
import ListedQuotes from "../components/ListedQuotes";
import { useState } from "react";
import { IHomeProps } from "../types";

const Home = ({ handleAddData, formData, setFormData, postEditedQuote, isEditing, setIsEditing, quotesList, setQuotesList, handleRemove, handleEdit }:IHomeProps) => {
    const [openDropDown, setOpenDropDown] = useState(false);
    const sortedByAuthorAsc = () => {
        const sortedDesc = [...quotesList].sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
        setQuotesList(sortedDesc);
    }

    const sortedByAuthorDesc = () => {
        const sortedDesc = [...quotesList].sort((a, b) => {
            if (a.name > b.name) {
                return -1;
            }
            if (a.name < b.name) {
                return 1;
            }
            return 0;
        });
        setQuotesList(sortedDesc);
    }
    const sortedByDateAsc = () => {
        const sortedByOldest = [...quotesList].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        setQuotesList(sortedByOldest);
    }
    const sortedByDateDesc = () => {
        const sortedByNewest = [...quotesList].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setQuotesList(sortedByNewest);
    }
    return (
        <>
            <Form handleAddData={handleAddData} formData={formData} setFormData={setFormData} postEditedQuote={postEditedQuote} isEditing={isEditing} setIsEditing={setIsEditing} />
            {quotesList.length ?
                <>
                    <div className="text-left mb-6">
                        <button type="button" className="inline-flex w-[224px] justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" onClick={() => setOpenDropDown(!openDropDown)}>
                            Sort by
                            <svg className="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" />
                            </svg>
                        </button>
                        {openDropDown ?
                            <div className="mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                                <div className="py-1">
                                    <button className="block px-4 py-2 text-sm text-gray-700" onClick={sortedByAuthorAsc}>
                                        Author A-Z
                                    </button>
                                    <button className="block px-4 py-2 text-sm text-gray-700" onClick={sortedByAuthorDesc}>
                                        Author Z-A
                                    </button>
                                    <button className="block px-4 py-2 text-sm text-gray-700" onClick={sortedByDateDesc}>
                                        Newest
                                    </button>
                                    <button className="block px-4 py-2 text-sm text-gray-700" onClick={sortedByDateAsc}>
                                        Oldest
                                    </button>
                                </div>
                            </div>
                            : null
                        }
                    </div>
                    <ListedQuotes quotesList={quotesList} handleRemove={handleRemove} handleEdit={handleEdit} />
                </>
                :
                <></>
            }
        </>
    )
}
export default Home;