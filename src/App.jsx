import "./App.css";
import Button from "./components/Button/Button";
import Paragraph from "./components/Paragraph/Paragraph";
import Title from "./components/Title/Title";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Card from "./components/Card/Card";

function App() {
  const films = [
    //{ image: "Black-widow.png", name: "Black Widow", stars: 324 },
  ];

  return (
    <>
      <Header />
      <main className="container">
        <Title>Поиск</Title>
        <Paragraph>
          Введите название фильма, сериала или мультфильма для поиска и
          добавления в избранное.
        </Paragraph>
        <div className="search">
          <Input
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                  stroke="#475069"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 22L20 20"
                  stroke="#475069"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          >
            Введите название
          </Input>
          <Button>Искать</Button>
        </div>
        {films.length === 0 ? (
          <div className="cards-empty">
            <Title>Упс... Ничего не найдено</Title>
            <p className="cards-empty__subtitle">
              Попробуйте изменить запрос или ввести более точное название фильма.
            </p>
          </div>
        ) : (
          <div className="cards-grid">
            {films.map((film, index) => (
              <Card
                key={index}
                image={film.image}
                name={film.name}
                stars={film.stars}
              />
            ))}
          </div>
        )}
      </main>
    </>
  );
}

export default App;
