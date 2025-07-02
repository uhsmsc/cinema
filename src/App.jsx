import { useState } from 'react';
import './App.css'
import Button from './components/Button/Button';
import Paragraph from './components/Paragraph/Paragraph';
import Title from './components/Title/Title';

function App() {

  return (
    <>
    <Title>Поиск</Title>
    <Paragraph>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
    <Button>Искать</Button>
    </>
  );
}

export default App;
