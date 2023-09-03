import './App.css';
import { useState } from 'react';
import { Image } from '../interfaces/interfaces';
import Card from './Card';

const images: Image[] = [
  {
    url: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    title: 'Explore The World',
  },
  {
    url: 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    title: 'Wild Forest',
  },
  {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
    title: 'Sunny Beach',
  },
  {
    url: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    title: 'City on Winter',
  },
  {
    url: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    title: 'Mountains - Clouds',
  },
];

export default function App() {
  const [active, setActive] = useState(0);

  return (
    <div className="font-sans flex flex-wrap justify-center content-center h-screen overflow-hidden m-0">
      <div className="flex w-[90vw]">
        {images.map((img, i) => (
          <Card
            img={img}
            key={i}
            id={i}
            active={active}
            setActive={setActive}
          />
        ))}
      </div>
    </div>
  );
}
