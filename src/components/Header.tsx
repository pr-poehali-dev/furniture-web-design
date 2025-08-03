import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Home" size={24} className="text-primary" />
            <span className="text-xl font-bold text-primary">МебельПро</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#catalog" className="text-gray-600 hover:text-primary transition-colors">Каталог</a>
            <a href="#calculator" className="text-gray-600 hover:text-primary transition-colors">Калькулятор</a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            <Button size="sm">Заказать замер</Button>
          </div>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Icon name="Menu" size={20} />
          </Button>
        </div>
      </div>
    </nav>
  );
}