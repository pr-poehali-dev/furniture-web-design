import Icon from '@/components/ui/icon';

export default function FeaturesSection() {
  return (
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
  );
}