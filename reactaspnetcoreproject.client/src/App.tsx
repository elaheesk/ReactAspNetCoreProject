import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import QuotesListPage from './pages/QuotesListPage';
import { IFormData } from './types';
import axios from 'axios';
import { isFormDataComplete } from './utils/formUtils';
import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import About from './pages/About';




const App: React.FC = () => {
    const [quotesList, setQuotesList] = useState<IFormData[]>([]);
    const [formData, setFormData] = useState<IFormData>({
        name: '',
        email: '',
        content: '',
        date: '',
    });
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const getPosts = async () => {
        try {
            const response = await axios.get('/api/form');
            if (response.status === 200) {

                setQuotesList(response.data);
            }
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };


    const handleAddData = async (newItem: IFormData) => {
        const response = await axios.post('/api/form', newItem);

        if (response.data.success) {

            setQuotesList((prevQuotes) => [...prevQuotes, response.data.data]);
            setFormData({
                name: '',
                email: '',
                content: '',
                date: '',
            });
            setIsEditing(false);
        } else {
            alert('Form submission failed!');
        }
    };


    const handleRemove = async (id: string) => {
        const response = await axios.delete(`/api/form/${id}`);
        if (response.status === 200) {

            setQuotesList(response.data.data);
            setFormData({
                name: '',
                email: '',
                content: '',
                date: '',
            });
        }
    }


    const handleEdit = (quoteToEdit: IFormData) => {
        const findQuote = quotesList.find((quote) => quote.userId === quoteToEdit.userId);
        if (findQuote) {
            setFormData(quoteToEdit)
            setIsEditing(true);
        } else {
            return;
        }
    }


    const postEditedQuote = async (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { value, name } = e.target;
        if (isFormDataComplete(formData)) {
            const updatedData = {
                ...formData,
                [name]: value
            }
            try {
                const response = await axios.put(`/api/form/${updatedData.userId}`, updatedData);
                if (response.data.success) {
                    const updatedList = quotesList.map((quote) => {
                        if (quote.userId === response.data.data.userId) {
                            return { ...response.data.data }
                        } else {
                            return { ...quote }
                        }
                    })
                    setQuotesList(updatedList);
                    setFormData({
                        userId: '',
                        name: '',
                        email: '',
                        content: '',
                        date: '',
                    });
                    setIsEditing(false);
                } else {
                    alert('Form submission failed!');
                }
            }
            catch (error) {
                console.error("Error updating quote:", error);
            }
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home handleAddData={handleAddData}
                        formData={formData}
                        setFormData={setFormData}
                        postEditedQuote={postEditedQuote}
                        isEditing={isEditing}
                        setIsEditing={setIsEditing}
                        quotesList={quotesList}
                        setQuotesList={setQuotesList}
                        handleRemove={handleRemove}
                        handleEdit={handleEdit} />} />
                    <Route path="/quotes" element={<QuotesListPage quotesList={quotesList} handleRemove={handleRemove} handleEdit={handleEdit} />} />
                    <Route path="/about" element={<About  />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;