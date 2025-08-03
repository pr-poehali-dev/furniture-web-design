import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Home" size={24} />
              <span className="text-xl font-bold">МебельПро</span>
            </div>
            <p className="text-sm opacity-80">
              Производство корпусной мебели по индивидуальным размерам
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Каталог</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Двери-купе</li>
              <li>Двери-гармошки</li>
              <li>Шкафы встроенные</li>
              <li>Гардеробные</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-sm opacity-80">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>info@mebelpro.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>г. Москва, ул. Примерная, 123</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Режим работы</h4>
            <div className="space-y-1 text-sm opacity-80">
              <p>Пн-Пт: 9:00 - 18:00</p>
              <p>Сб: 10:00 - 16:00</p>
              <p>Вс: выходной</p>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2024 МебельПро. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}