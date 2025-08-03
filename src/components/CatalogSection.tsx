import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface CatalogSectionProps {
  categories: Array<{
    id: string;
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    image: string;
    icon: string;
    priceFrom: number;
    materials: string[];
    colors: string[];
  }>;
}

export default function CatalogSection({ categories }: CatalogSectionProps) {
  const [selectedFilters, setSelectedFilters] = useState({
    type: '',
    material: '',
    color: '',
    priceRange: ''
  });

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

  return (
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
  );
}