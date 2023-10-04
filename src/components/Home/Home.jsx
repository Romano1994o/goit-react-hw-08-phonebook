import React from 'react';
import {
  HomeContainer,
  WordsContainerContacts,
  WordsContainerPhone,
  WordsContainerBook,


} from './Home.styled';


export const Home = () => {

  const wordContacts = 'CONTACTS';
  const wordPhone = 'PHONE'; 
  const wordBook = 'BOOK'; 
  return (
    <HomeContainer>
      <WordsContainerContacts>
        {wordContacts.split('').map((letter, index) => (
          <span
            key={index}
            
          >
            {letter}
          </span>
        ))}
      </WordsContainerContacts>

      <WordsContainerPhone>
        {wordPhone.split('').map((letter, index) => (
          <span
            key={index}
          
          >
            {letter}
          </span>
        ))}
      </WordsContainerPhone>
      <WordsContainerBook>
        {wordBook.split('').map((letter, index) => (
          <span
            key={index}
           
          >
            {letter}
          </span>
        ))}
      </WordsContainerBook>
    </HomeContainer>
  );
};
