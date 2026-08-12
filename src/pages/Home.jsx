import Hero from '../components/sections/Hero';
import LiveStrip from '../components/sections/LiveStrip';
import MensajePastoral from '../components/sections/MensajePastoral';
import Destacados from '../components/sections/Destacados';
import PasosSiguientes from '../components/sections/PasosSiguientes';
import UltimoSermon from '../components/sections/UltimoSermon';

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