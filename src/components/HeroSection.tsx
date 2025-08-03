import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  return (
    <section className="hero-gradient py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-accent/10 text-accent border-accent/20">
            Индивидуальное производство мебели
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Корпусная мебель<br />
            <span className="text-accent">по вашим размерам</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Создаем двери, шкафы, перегородки и гардеробные точно под ваши потребности. 
            Бесплатный замер и 3D-визуализация проекта.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}>
              <Icon name="Search" size={20} className="mr-2" />
              Посмотреть каталог
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8" onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}>
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}