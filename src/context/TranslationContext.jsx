import React, { createContext, useState } from 'react';


export const TranslationsContext = createContext("pt-br");


export const TranslationsProvider = (props) => {
  const [locale, setLocale] = useState('pt');

  return (
    <TranslationsContext.Provider value={{locale, setLocale }}>
      {props.children}
    </TranslationsContext.Provider>
  );
};