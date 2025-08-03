import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import CatalogSection from '@/components/CatalogSection';
import CalculatorSection from '@/components/CalculatorSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Index() {
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

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <CatalogSection categories={categories} />
      <CalculatorSection />
      <ContactSection />
      <Footer />
    </main>
  );
}