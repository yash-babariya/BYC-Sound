import React, { useState, useEffect } from 'react';
import './herobannerHAE.scss';
import { IoHeadset } from "react-icons/io5";
import categoryApi from '../../../../categoryApi/headermenu.json';
import { translateText } from '../../../../utils/translate.jsx'; // Import translate function
import { useLanguage } from '../../../../utils/LanguageContext.jsx';

export default function HerobannerHAE() {
    const categories = categoryApi.categoryApi;
    const selectedCategory = categories[3]; // Get the category you want to display

    // State for selected language and translated category
    const { selectedLanguage, changeLanguage } = useLanguage(); // Access global language state
    const [translatedCategory, setTranslatedCategory] = useState(selectedCategory.category);

    // Translate category when language changes
    useEffect(() => {
        const fetchTranslatedCategory = async () => {
            const translation = await translateText(selectedCategory.category, selectedLanguage);
            setTranslatedCategory(translation);
        };

        fetchTranslatedCategory();
    }, [selectedLanguage, selectedCategory.category]);

    return (
        <div className='herobannerHAE'>
            <div className="container">
                <section>
                    <div className="text">
                        <h2><IoHeadset className='icon' />{translatedCategory}</h2>
                    </div>
                </section>
            </div>
        </div>
    );
}
