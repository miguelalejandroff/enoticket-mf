export const getLanguageFlag = (language: string) => {
    const flags: { [key: string]: string } = {
        Español: 'es',
        Inglés: 'gb',
        Francés: 'fr',
        Portugués: 'pt',
        Alemán: 'de',
        Italiano: 'it',
    };
    return flags[language] || '🌐';
};
