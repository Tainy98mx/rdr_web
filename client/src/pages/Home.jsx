import Hero from './Home/components/Hero';
import LiveStrip from './Home/components/LiveStrip';
import MensajePastoral from './Home/components/MensajePastoral';
import Destacados from './Home/components/Destacados';
import PasosSiguientes from './Home/components/PasosSiguientes';
import UltimoSermon from './Home/components/UltimoSermon';

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <LiveStrip />
      <MensajePastoral />
      <Destacados />
      <PasosSiguientes />
      <UltimoSermon />
    </div>
  );
}