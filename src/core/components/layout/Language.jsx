import { useTranslation } from 'react-i18next'
import { Button } from '/src/core/kendo'
import React from 'react'

const languages = [
        { code: 'fr', label: 'FR' },
        { code: 'en', label: 'EN' }
    ];

function Language() {

    const {i18n} = useTranslation();

    const currentLang = i18n.language;

    const changeLang = (lang) => {
        i18n.changeLanguage(lang);
        
    }
  return (
    <div style={{ display: 'flex', gap: '10px', padding: '10px' }}>
        {languages.map((lang) => (
            <Button key={lang.code} onClick={() => changeLang(lang.code)}
                themeColor={currentLang === lang.code ? 'info' : 'secondary'}>
                {lang.label}
            </Button>
        ))}
    </div>
  )
}

export default Language