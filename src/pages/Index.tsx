import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [calculatorData, setCalculatorData] = useState({
    width: '',
    height: '',
    depth: '',
    material: '',
    hardware: ''
  });

  const categories = [
    {
      id: 'kitchen',
      title: 'Кухни',
      description: 'Кухонные гарнитуры по индивидуальным размерам',
      image: '/img/3ca86342-206c-4f5f-9c37-d044f0e06677.jpg',
      icon: 'ChefHat',
      price: 'от 50 000 ₽'
    },
    {
      id: 'wardrobes',
      title: 'Шкафы и гардеробные',
      description: 'Встроенные и отдельностоящие системы хранения',
      image: '/img/d0598249-64eb-4495-a87c-47fddf95e8b9.jpg',
      icon: 'Shirt',
      price: 'от 30 000 ₽'
    },
    {
      id: 'office',
      title: 'Офисная мебель',
      description: 'Рабочие места и системы хранения для офиса',
      image: '/img/0a267cd0-0390-4f14-8217-e673ec8e26c7.jpg',
      icon: 'Briefcase',
      price: 'от 25 000 ₽'
    }
  ];

  const materials = [
    { value: 'laminate', label: 'ЛДСП', price: 0 },
    { value: 'mdf', label: 'МДФ', price: 5000 },
    { value: 'solid_wood', label: 'Массив дерева', price: 15000 },
    { value: 'veneer', label: 'Шпон', price: 10000 }
  ];

  const hardware = [
    { value: 'standard', label: 'Стандартная', price: 0 },
    { value: 'premium', label: 'Премиум', price: 8000 },
    { value: 'luxury', label: 'Люкс', price: 15000 }
  ];

  const calculatePrice = () => {
    const basePrice = 5000;
    const area = (parseFloat(calculatorData.width) || 0) * (parseFloat(calculatorData.height) || 0) * (parseFloat(calculatorData.depth) || 0) / 1000000;
    const materialPrice = materials.find(m => m.value === calculatorData.material)?.price || 0;
    const hardwarePrice = hardware.find(h => h.value === calculatorData.hardware)?.price || 0;
    
    return Math.round(basePrice + (area * 20000) + materialPrice + hardwarePrice);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
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

      {/* Hero Section */}
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
              Создаем кухни, шкафы и офисную мебель точно под ваши потребности. 
              Бесплатный замер и 3D-визуализация проекта.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать звонок
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Ruler" size={24} className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Точные размеры</h3>
              <p className="text-gray-600">Изготавливаем мебель миллиметр в миллиметр под ваше пространство</p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Palette" size={24} className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Любые материалы</h3>
              <p className="text-gray-600">Работаем с ЛДСП, МДФ, массивом дерева и другими материалами</p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={24} className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Быстрые сроки</h3>
              <p className="text-gray-600">Изготавливаем и устанавливаем мебель за 10-14 дней</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Каталог мебели</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите категорию мебели для расчета стоимости и создания проекта
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Card key={category.id} className="furniture-card overflow-hidden">
                <div className="aspect-video relative">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white text-gray-900">{category.price}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Icon name={category.icon as any} size={24} className="text-accent" />
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full" 
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    Рассчитать стоимость
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="calculator" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Калькулятор стоимости</h2>
              <p className="text-xl text-gray-600">
                Введите размеры и характеристики для расчета предварительной стоимости
              </p>
            </div>

            <div className="calculator-section">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Размеры (см)</h3>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="width">Ширина</Label>
                      <Input
                        id="width"
                        type="number"
                        placeholder="200"
                        value={calculatorData.width}
                        onChange={(e) => setCalculatorData({...calculatorData, width: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="height">Высота</Label>
                      <Input
                        id="height"
                        type="number"
                        placeholder="240"
                        value={calculatorData.height}
                        onChange={(e) => setCalculatorData({...calculatorData, height: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="depth">Глубина</Label>
                      <Input
                        id="depth"
                        type="number"
                        placeholder="60"
                        value={calculatorData.depth}
                        onChange={(e) => setCalculatorData({...calculatorData, depth: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="material">Материал</Label>
                    <Select value={calculatorData.material} onValueChange={(value) => setCalculatorData({...calculatorData, material: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите материал" />
                      </SelectTrigger>
                      <SelectContent>
                        {materials.map((material) => (
                          <SelectItem key={material.value} value={material.value}>
                            {material.label} {material.price > 0 && `(+${material.price}₽)`}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="hardware">Фурнитура</Label>
                    <Select value={calculatorData.hardware} onValueChange={(value) => setCalculatorData({...calculatorData, hardware: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите фурнитуру" />
                      </SelectTrigger>
                      <SelectContent>
                        {hardware.map((hw) => (
                          <SelectItem key={hw.value} value={hw.value}>
                            {hw.label} {hw.price > 0 && `(+${hw.price}₽)`}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Расчет стоимости</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Базовая стоимость:</span>
                      <span>5 000 ₽</span>
                    </div>
                    {calculatorData.width && calculatorData.height && calculatorData.depth && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">За объем:</span>
                        <span>{Math.round(((parseFloat(calculatorData.width) || 0) * (parseFloat(calculatorData.height) || 0) * (parseFloat(calculatorData.depth) || 0) / 1000000) * 20000)} ₽</span>
                      </div>
                    )}
                    {calculatorData.material && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Материал:</span>
                        <span>+{materials.find(m => m.value === calculatorData.material)?.price || 0} ₽</span>
                      </div>
                    )}
                    {calculatorData.hardware && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Фурнитура:</span>
                        <span>+{hardware.find(h => h.value === calculatorData.hardware)?.price || 0} ₽</span>
                      </div>
                    )}
                  </div>

                  <div className="border-t pt-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-semibold">Итого:</span>
                      <span className="text-2xl font-bold text-accent">{calculatePrice().toLocaleString()} ₽</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      * Предварительный расчет. Точная стоимость после замера.
                    </p>
                  </div>

                  <Button className="w-full" size="lg">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Заказать точный расчет
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Заказать замер</h2>
              <p className="text-xl text-gray-600">
                Оставьте заявку и мы свяжемся с вами в течение часа
              </p>
            </div>

            <Card className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>

                <div>
                  <Label htmlFor="address">Адрес</Label>
                  <Input id="address" placeholder="Город, улица, дом" />
                </div>

                <div>
                  <Label htmlFor="message">Комментарий</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Расскажите о ваших пожеланиях..." 
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
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
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Кухни на заказ</li>
                <li>Шкафы и гардеробные</li>
                <li>Офисная мебель</li>
                <li>3D-визуализация</li>
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
    </main>
  );
}