import React from 'react';
import Select from '../common/Select';

const LANGUAGES = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Español' },
  { value: 'ht', label: 'Kreyòl Ayisyen' },
  { value: 'vi', label: 'Tiếng Việt' },
  { value: 'zh', label: '中文' },
];

export default function LanguageSelector() {
  const [language, setLanguage] = React.useState('en');

  const handleChange = (value) => {
    setLanguage(value);
    // In a real app, this would trigger i18n language change
  };

  return (
    <Select
      value={language}
      onChange={handleChange}
      options={LANGUAGES}
      className="w-40"
    />
  );
}