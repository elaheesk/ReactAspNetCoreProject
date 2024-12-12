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
    postEditedQuote: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
    isEditing: boolean;
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IHomeProps {
    handleAddData: (newItem: IFormData) => Promise<void>;
    formData: IFormData;
    setFormData: React.Dispatch<React.SetStateAction<IFormData>>;
    postEditedQuote: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
    isEditing: boolean;
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
    quotesList: IFormData[];
    setQuotesList: React.Dispatch<React.SetStateAction<IFormData[]>>;
    handleRemove: (id?: string) => Promise<void>;
    handleEdit: (quoteToEdit: IFormData) => void; 
}