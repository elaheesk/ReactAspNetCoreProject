export interface IFormData {
    userId?: string;
    name: string;
    email: string;
    content: string;
    date: string;
}

export interface IListQuotesProps {
    quotesList: IFormData[];
    handleRemove: (id?: string ) => Promise<void>;
    handleEdit: (quoteToEdit: IFormData) => void;
}
export interface IFormProps {
    handleAddData: (newItem: IFormData) => Promise<void>;
    formData: IFormData;
    setFormData: React.Dispatch<React.SetStateAction<IFormData>>;
    postEditedQuote: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => Promise<void>;
    isEditing: boolean;
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}