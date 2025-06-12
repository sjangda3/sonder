import React from "react";
import { IconLanguage } from "@tabler/icons-react";

interface LanguageSelectorProps {
  selectedLanguage: string;
  setSelectedLanguage: (language: string) => void;
  languages: string[];
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  selectedLanguage,
  setSelectedLanguage,
  languages,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <IconLanguage size={22} />
      <select
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
        className="bg-transparent text-white border-none focus:outline-none cursor-pointer"
      >
        {languages.map((lang) => (
          <option key={lang} value={lang} className="bg-neutral-900">
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;