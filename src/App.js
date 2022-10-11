// Component imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

// Image imports
import imgZaferes from './img/zaferes.png';

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card
        img={imgZaferes}
        rating='5.0'
        reviewCount={6}
        country='USA'
        title='Life Lessons with Katie Zaferes'
        price={136}
      />
    </div>
  );
}
