import Hero from './components/Hero';
import Service from './components/Service';
import Contact from './components/Contact';
import About from './components/About';
import Vision from './components/Vision';

export default function Home() {
  return (
    <div>
      <section id='home' className='mt-10'>
      <Hero />
      </section>
      <section id='about'>
      <About />
      </section>
      <section id='service' className='mt-10'>
      <Service />
      </section>
      <section id='vision'>
      <Vision />
      </section>
      <section id='contact'>
      <Contact />
      </section>
    </div>
  );
}
