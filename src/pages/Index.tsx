import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [selectedFilters, setSelectedFilters] = useState({
    type: '',
    material: '',
    color: '',
    priceRange: ''
  });

  const [calculatorData, setCalculatorData] = useState({
    width: '',
    height: '',
    depth: '',
    material: '',
    hardware: ''
  });

  const categories = [
    {
      id: 'doors-coupe',
      title: 'Двери-купе',
      subtitle: 'Раздвижные системы',
      description: 'Раздвижные двери для шкафов и перегородок. Экономят пространство, бесшумные механизмы, выбор дизайна под любой интерьер.',
      features: ['Экономия пространства', 'Бесшумные механизмы', 'Индивидуальный дизайн'],
      image: '/img/b8cf254e-f3d8-473d-9dc2-c952eeec8dca.jpg',
      icon: 'ArrowRightLeft',
      priceFrom: 12000,
      materials: ['ЛДСП', 'МДФ', 'Зеркало', 'Стекло'],
      colors: ['Белый', 'Дуб', 'Венге', 'Глянец']
    },
    {
      id: 'doors-accordion',
      title: 'Двери-гармошки',
      subtitle: 'Складные конструкции',
      description: 'Складные двери для небольших помещений. Легкое открывание, компактность, современный дизайн.',
      features: ['Компактное складывание', 'Легкий механизм', 'Современный вид'],
      image: '/img/ce595b28-c3e4-4c91-88cd-82ed649ed3b7.jpg',
      icon: 'Shrink',
      priceFrom: 9000,
      materials: ['ПВХ', 'МДФ', 'Стекло'],
      colors: ['Белый', 'Бежевый', 'Серый']
    },
    {
      id: 'doors-book',
      title: 'Двери-книжки',
      subtitle: 'Распашные с поворотным механизмом',
      description: 'Классические распашные двери с возможностью складывания. Надежная фурнитура, элегантный внешний вид.',
      features: ['Классический стиль', 'Надежная фурнитура', 'Удобное открывание'],
      image: '/img/3ca86342-206c-4f5f-9c37-d044f0e06677.jpg',
      icon: 'BookOpen',
      priceFrom: 15000,
      materials: ['Массив', 'МДФ', 'Шпон'],
      colors: ['Дуб', 'Орех', 'Вишня', 'Белый']
    },
    {
      id: 'partitions',
      title: 'Перегородки',
      subtitle: 'Мобильные и стационарные',
      description: 'Функциональные перегородки для зонирования пространства. Мобильные и стационарные варианты.',
      features: ['Зонирование пространства', 'Мобильность', 'Звукоизоляция'],
      image: '/img/0a267cd0-0390-4f14-8217-e673ec8e26c7.jpg',
      icon: 'Separator',
      priceFrom: 8000,
      materials: ['ЛДСП', 'Стекло', 'Металл'],
      colors: ['Белый', 'Серый', 'Прозрачный']
    },
    {
      id: 'wardrobes-hinged',
      title: 'Шкафы распашные',
      subtitle: 'Классические с дверьми',
      description: 'Традиционные шкафы с распашными дверьми. Вместительные, надежные, классический дизайн.',
      features: ['Большая вместимость', 'Классический дизайн', 'Долговечность'],
      image: '/img/d0598249-64eb-4495-a87c-47fddf95e8b9.jpg',
      icon: 'DoorOpen',
      priceFrom: 25000,
      materials: ['ЛДСП', 'МДФ', 'Массив'],
      colors: ['Белый', 'Дуб', 'Венге', 'Орех']
    },
    {
      id: 'wardrobes-built-in',
      title: 'Шкафы встроенные',
      subtitle: 'Интегрированные в ниши',
      description: 'Встроенные шкафы, идеально вписывающиеся в архитектуру помещения. Максимальное использование пространства.',
      features: ['Максимум пространства', 'Идеальная интеграция', 'Индивидуальный проект'],
      image: '/img/ce874653-a479-45ec-af20-1269ee7dcc46.jpg',
      icon: 'Home',
      priceFrom: 30000,
      materials: ['ЛДСП', 'МДФ', 'Зеркало'],
      colors: ['Белый', 'Под дерево', 'Глянец']
    },
    {
      id: 'wardrobes-sliding',
      title: 'Шкафы-купе',
      subtitle: 'С раздвижными системами',
      description: 'Современные шкафы с раздвижными дверями. Экономия места, стильный дизайн, удобная организация.',
      features: ['Раздвижные двери', 'Экономия места', 'Современный дизайн'],
      image: '/img/b8cf254e-f3d8-473d-9dc2-c952eeec8dca.jpg',
      icon: 'MoveHorizontal',
      priceFrom: 35000,
      materials: ['ЛДСП', 'МДФ', 'Зеркало', 'Стекло'],
      colors: ['Белый', 'Дуб', 'Венге', 'Комбинированный']
    },
    {
      id: 'dressing-rooms',
      title: 'Гардеробные',
      subtitle: 'Системы хранения с комбинированными решениями',
      description: 'Полноценные гардеробные системы с различными типами хранения. Штанги, полки, ящики, обувницы.',
      features: ['Комбинированное хранение', 'Системы организации', 'Полная функциональность'],
      image: '/img/ce874653-a479-45ec-af20-1269ee7dcc46.jpg',
      icon: 'Shirt',
      priceFrom: 50000,
      materials: ['ЛДСП', 'МДФ', 'Металл', 'Стекло'],
      colors: ['Белый', 'Дуб', 'Серый', 'Комбинированный']
    }
  ];

  const materials = [
    { value: 'ldsp', label: 'ЛДСП', price: 0 },
    { value: 'mdf', label: 'МДФ', price: 5000 },
    { value: 'solid_wood', label: 'Массив дерева', price: 15000 },
    { value: 'veneer', label: 'Шпон', price: 10000 },
    { value: 'glass', label: 'Стекло', price: 8000 },
    { value: 'mirror', label: 'Зеркало', price: 6000 }
  ];

  const priceRanges = [
    { value: 'budget', label: 'До 20 000 ₽', min: 0, max: 20000 },
    { value: 'medium', label: '20 000 - 50 000 ₽', min: 20000, max: 50000 },
    { value: 'premium', label: '50 000 - 100 000 ₽', min: 50000, max: 100000 },
    { value: 'luxury', label: 'От 100 000 ₽', min: 100000, max: Infinity }
  ];

  const filteredCategories = categories.filter(category => {
    if (selectedFilters.priceRange) {
      const range = priceRanges.find(r => r.value === selectedFilters.priceRange);
      if (range && (category.priceFrom < range.min || category.priceFrom > range.max)) {
        return false;
      }
    }
    
    if (selectedFilters.material && !category.materials.some(m => 
      m.toLowerCase().includes(selectedFilters.material.toLowerCase())
    )) {
      return false;
    }
    
    if (selectedFilters.color && !category.colors.some(c => 
      c.toLowerCase().includes(selectedFilters.color.toLowerCase())
    )) {
      return false;
    }
    
    return true;
  });

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
      <section id="catalog" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Каталог мебели</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный ассортимент корпусной мебели на заказ: двери, шкафы, перегородки и гардеробные системы
            </p>
          </div>

          {/* Filters */}
          <div className="mb-12 p-6 bg-gray-50 rounded-2xl">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Icon name="Filter" size={20} className="mr-2" />
              Фильтры
            </h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="material-filter">Материал</Label>
                <Select value={selectedFilters.material} onValueChange={(value) => setSelectedFilters({...selectedFilters, material: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Любой материал" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Любой материал</SelectItem>
                    <SelectItem value="лдсп">ЛДСП</SelectItem>
                    <SelectItem value="мдф">МДФ</SelectItem>
                    <SelectItem value="массив">Массив</SelectItem>
                    <SelectItem value="стекло">Стекло</SelectItem>
                    <SelectItem value="зеркало">Зеркало</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="color-filter">Цвет</Label>
                <Select value={selectedFilters.color} onValueChange={(value) => setSelectedFilters({...selectedFilters, color: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Любой цвет" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Любой цвет</SelectItem>
                    <SelectItem value="белый">Белый</SelectItem>
                    <SelectItem value="дуб">Дуб</SelectItem>
                    <SelectItem value="венге">Венге</SelectItem>
                    <SelectItem value="орех">Орех</SelectItem>
                    <SelectItem value="глянец">Глянец</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="price-filter">Ценовой диапазон</Label>
                <Select value={selectedFilters.priceRange} onValueChange={(value) => setSelectedFilters({...selectedFilters, priceRange: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Любая цена" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Любая цена</SelectItem>
                    {priceRanges.map((range) => (
                      <SelectItem key={range.value} value={range.value}>
                        {range.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-end">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setSelectedFilters({ type: '', material: '', color: '', priceRange: '' })}
                >
                  <Icon name="X" size={16} className="mr-2" />
                  Сбросить
                </Button>
              </div>
            </div>
            
            <div className="mt-4 flex items-center text-sm text-gray-600">
              <Icon name="Info" size={16} className="mr-2" />
              Найдено товаров: {filteredCategories.length} из {categories.length}
            </div>
          </div>
          
          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCategories.map((category) => (
              <Card key={category.id} className="furniture-card overflow-hidden group">
                <div className="aspect-square relative">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-gray-900 font-semibold">
                      от {category.priceFrom.toLocaleString()} ₽
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-accent/10 w-10 h-10 rounded-full flex items-center justify-center">
                      <Icon name={category.icon as any} size={20} className="text-accent" />
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-500 font-medium">
                    {category.subtitle}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-xs font-semibold text-gray-900 mb-2">Преимущества:</h4>
                      <div className="flex flex-wrap gap-1">
                        {category.features.map((feature, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xs font-semibold text-gray-900 mb-2">Материалы:</h4>
                      <p className="text-xs text-gray-600">{category.materials.join(', ')}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-xs font-semibold text-gray-900 mb-2">Цвета:</h4>
                      <p className="text-xs text-gray-600">{category.colors.join(', ')}</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      <Icon name="Calculator" size={16} className="mr-1" />
                      Рассчитать
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Icon name="Eye" size={16} className="mr-1" />
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredCategories.length === 0 && (
            <div className="text-center py-12">
              <Icon name="Search" size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Товары не найдены</h3>
              <p className="text-gray-600 mb-4">Попробуйте изменить параметры фильтрации</p>
              <Button 
                variant="outline"
                onClick={() => setSelectedFilters({ type: '', material: '', color: '', priceRange: '' })}
              >
                Сбросить фильтры
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Calculator */}
      <section id="calculator" className="py-16 bg-gray-50">
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

                <div className="bg-white p-6 rounded-xl border border-gray-200 h-fit">
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
      <section id="contact" className="py-16 bg-white">
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
                  Нажимая кnопку, вы соглашаетесь с обработкой персональных данных
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
    </main>
  );
}