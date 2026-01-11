import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 z-50 animate-fade-in">
      <div className="bg-white/90 backdrop-blur-sm shadow-medium rounded-full p-0.5 flex gap-0.5 border border-gray-200">
        <button
          onClick={() => setLanguage('en')}
          className={`px-1.5 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1.5 rounded-full text-base font-medium transition-all duration-300 ${
            language === 'en'
              ? 'bg-orange-500 text-white shadow-soft'
              : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
          }`}
          aria-label="Switch to English"
        >
          🇬🇧
        </button>
        <button
          onClick={() => setLanguage('de')}
          className={`px-1.5 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1.5 rounded-full text-base font-medium transition-all duration-300 ${
            language === 'de'
              ? 'bg-orange-500 text-white shadow-soft'
              : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
          }`}
          aria-label="Zu Deutsch wechseln"
        >
          🇩🇪
        </button>
      </div>
    </div>
  );
};

export default LanguageToggle;
