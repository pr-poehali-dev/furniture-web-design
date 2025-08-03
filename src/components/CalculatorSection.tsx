import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

export default function CalculatorSection() {
  const [calculatorData, setCalculatorData] = useState({
    width: '',
    height: '',
    depth: '',
    material: '',
    hardware: ''
  });

  const materials = [
    { value: 'ldsp', label: 'ЛДСП', price: 0 },
    { value: 'mdf', label: 'МДФ', price: 5000 },
    { value: 'solid_wood', label: 'Массив дерева', price: 15000 },
    { value: 'veneer', label: 'Шпон', price: 10000 },
    { value: 'glass', label: 'Стекло', price: 8000 },
    { value: 'mirror', label: 'Зеркало', price: 6000 }
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
  );
}