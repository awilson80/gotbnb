import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';

export default function App() {
  const cardElements = data.map((card) => {
    return <Card key={card.id} card={card} />;
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <div className='cards'>{cardElements}</div>
    </div>
  );
}
