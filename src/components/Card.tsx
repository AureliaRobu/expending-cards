import { Image } from '../interfaces/interfaces';

interface CardProps {
  id: number;
  img: Image;
  active: number;
  setActive: (id: number) => void;
}
function Card({ img, id, active, setActive }: CardProps) {
  return (
    <div
      className={`${
        id === active ? 'active' : ''
      } card bg-auto bg-center bg-no-repeat h-[80vh] rounded-3xl text-white cursor-pointer flex-[0.5] m-2.5 relative`}
      style={{
        backgroundImage: `url(${img.url})`,
      }}
      onClick={() => setActive(id)}
    >
      <h3 className="text-2xl absolute bottom-5 left-5 m-0 opacity-0">
        {img.title}
      </h3>
    </div>
  );
}

export default Card;
