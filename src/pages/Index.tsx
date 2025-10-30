import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Car {
  id: number;
  name: string;
  type: string;
  price: string;
  features: string[];
  image: string;
  year: number;
  transmission: string;
  fuel: string;
}

const cars: Car[] = [
  {
    id: 1,
    name: 'Forest Explorer Pro',
    type: 'Внедорожник',
    price: '4 500 000 ₽',
    features: ['Полный привод', 'Панорамная крыша', 'Эко-режим'],
    image: 'https://cdn.poehali.dev/projects/b3386dce-8042-40d4-8f19-ed650039a062/files/7479bb85-0694-49b7-bfee-48712af3d67f.jpg',
    year: 2024,
    transmission: 'Автомат',
    fuel: 'Гибрид'
  },
  {
    id: 2,
    name: 'Nature Cruiser',
    type: 'Кроссовер',
    price: '3 200 000 ₽',
    features: ['Экономичность', 'Умный круиз-контроль', 'Эко-материалы'],
    image: 'https://cdn.poehali.dev/projects/b3386dce-8042-40d4-8f19-ed650039a062/files/7cb747e6-0345-48d7-9b18-f05f5fe8d526.jpg',
    year: 2024,
    transmission: 'Автомат',
    fuel: 'Электро'
  },
  {
    id: 3,
    name: 'Eco Trail 4x4',
    type: 'Внедорожник',
    price: '5 100 000 ₽',
    features: ['Усиленная подвеска', 'Камера 360°', 'Премиум салон'],
    image: 'https://cdn.poehali.dev/projects/b3386dce-8042-40d4-8f19-ed650039a062/files/7479bb85-0694-49b7-bfee-48712af3d67f.jpg',
    year: 2024,
    transmission: 'Механика',
    fuel: 'Дизель'
  },
  {
    id: 4,
    name: 'Green Path SUV',
    type: 'Кроссовер',
    price: '2 900 000 ₽',
    features: ['Компактность', 'Экономия топлива', 'Городской режим'],
    image: 'https://cdn.poehali.dev/projects/b3386dce-8042-40d4-8f19-ed650039a062/files/7cb747e6-0345-48d7-9b18-f05f5fe8d526.jpg',
    year: 2023,
    transmission: 'Автомат',
    fuel: 'Бензин'
  }
];

export default function Index() {
  const [selectedCars, setSelectedCars] = useState<number[]>([]);
  const [filters, setFilters] = useState({
    type: 'all',
    fuel: 'all',
    transmission: 'all'
  });

  const toggleCarSelection = (carId: number) => {
    setSelectedCars(prev =>
      prev.includes(carId)
        ? prev.filter(id => id !== carId)
        : [...prev, carId]
    );
  };

  const filteredCars = cars.filter(car => {
    if (filters.type !== 'all' && car.type !== filters.type) return false;
    if (filters.fuel !== 'all' && car.fuel !== filters.fuel) return false;
    if (filters.transmission !== 'all' && car.transmission !== filters.transmission) return false;
    return true;
  });

  const compareFeatures = () => {
    const selected = cars.filter(car => selectedCars.includes(car.id));
    return selected;
  };

  return (
    <div className="min-h-screen">
      <header 
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url('https://cdn.poehali.dev/projects/b3386dce-8042-40d4-8f19-ed650039a062/files/3c1aaa5f-2d8a-45a0-8f48-0a607f10742e.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background"></div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Автомобили и Природа
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Исследуйте мир с гармонией технологий и природы
          </p>
          <Button size="lg" className="text-lg px-8 py-6 rounded-full">
            <Icon name="Compass" className="mr-2" size={20} />
            Начать путешествие
          </Button>
        </div>
      </header>

      <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Trees" className="text-primary" size={28} />
              <span className="text-xl font-bold">EcoAuto</span>
            </div>
            <div className="flex gap-6">
              <a href="#catalog" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Icon name="Car" size={18} />
                <span className="hidden md:inline">Автомобили</span>
              </a>
              <a href="#gallery" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Icon name="Images" size={18} />
                <span className="hidden md:inline">Галерея</span>
              </a>
              <a href="#contact" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Icon name="Mail" size={18} />
                <span className="hidden md:inline">Контакты</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section id="catalog" className="py-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Каталог Автомобилей</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите идеальный автомобиль для путешествий на природе
            </p>
          </div>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="all" onClick={() => setFilters({...filters, type: 'all'})}>
                Все
              </TabsTrigger>
              <TabsTrigger value="suv" onClick={() => setFilters({...filters, type: 'Внедорожник'})}>
                Внедорожники
              </TabsTrigger>
              <TabsTrigger value="crossover" onClick={() => setFilters({...filters, type: 'Кроссовер'})}>
                Кроссоверы
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid gap-4 mb-8 md:grid-cols-3 max-w-4xl mx-auto">
            <div>
              <label className="text-sm font-medium mb-2 block">Топливо</label>
              <select 
                className="w-full px-4 py-2 rounded-lg border bg-card"
                value={filters.fuel}
                onChange={(e) => setFilters({...filters, fuel: e.target.value})}
              >
                <option value="all">Все типы</option>
                <option value="Гибрид">Гибрид</option>
                <option value="Электро">Электро</option>
                <option value="Дизель">Дизель</option>
                <option value="Бензин">Бензин</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Коробка передач</label>
              <select 
                className="w-full px-4 py-2 rounded-lg border bg-card"
                value={filters.transmission}
                onChange={(e) => setFilters({...filters, transmission: e.target.value})}
              >
                <option value="all">Все типы</option>
                <option value="Автомат">Автомат</option>
                <option value="Механика">Механика</option>
              </select>
            </div>
            <div className="flex items-end">
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => setFilters({ type: 'all', fuel: 'all', transmission: 'all' })}
              >
                <Icon name="RotateCcw" className="mr-2" size={16} />
                Сбросить
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
            {filteredCars.map((car, index) => (
              <Card 
                key={car.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary/90">
                    {car.type}
                  </Badge>
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <Checkbox 
                      checked={selectedCars.includes(car.id)}
                      onCheckedChange={() => toggleCarSelection(car.id)}
                      className="bg-white"
                    />
                    <span className="text-xs text-white bg-black/50 px-2 py-1 rounded">
                      Сравнить
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{car.name}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary">
                    {car.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="Calendar" size={16} className="text-muted-foreground" />
                      <span>{car.year} год</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Fuel" size={16} className="text-muted-foreground" />
                      <span>{car.fuel}</span>
                    </div>
                    <div className="flex items-center gap-2 col-span-2">
                      <Icon name="Settings" size={16} className="text-muted-foreground" />
                      <span>{car.transmission}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {car.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full rounded-full">
                    <Icon name="Eye" className="mr-2" size={16} />
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {selectedCars.length > 0 && (
            <Card className="mt-8 animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="GitCompare" size={24} />
                  Сравнение автомобилей ({selectedCars.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-4">Характеристика</th>
                        {compareFeatures().map(car => (
                          <th key={car.id} className="text-left p-4">{car.name}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-4 font-medium">Цена</td>
                        {compareFeatures().map(car => (
                          <td key={car.id} className="p-4">{car.price}</td>
                        ))}
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-medium">Тип</td>
                        {compareFeatures().map(car => (
                          <td key={car.id} className="p-4">{car.type}</td>
                        ))}
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-medium">Топливо</td>
                        {compareFeatures().map(car => (
                          <td key={car.id} className="p-4">{car.fuel}</td>
                        ))}
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 font-medium">Коробка</td>
                        {compareFeatures().map(car => (
                          <td key={car.id} className="p-4">{car.transmission}</td>
                        ))}
                      </tr>
                      <tr>
                        <td className="p-4 font-medium">Особенности</td>
                        {compareFeatures().map(car => (
                          <td key={car.id} className="p-4">
                            <div className="flex flex-col gap-1">
                              {car.features.map((f, i) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  {f}
                                </Badge>
                              ))}
                            </div>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <section id="gallery" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Галерея</h2>
            <p className="text-lg text-muted-foreground">
              Красота автомобилей в гармонии с природой
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {cars.slice(0, 3).map((car, index) => (
              <div 
                key={car.id}
                className="relative h-80 rounded-2xl overflow-hidden group animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-white text-xl font-bold mb-2">{car.name}</h3>
                    <p className="text-white/90">{car.type}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground">
              Мы поможем выбрать идеальный автомобиль
            </p>
          </div>
          <Card className="animate-fade-in">
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary outline-none transition-all"
                    placeholder="Введите ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary outline-none transition-all"
                    placeholder="example@mail.ru"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <input 
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary outline-none transition-all"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                    placeholder="Расскажите о желаемом автомобиле..."
                  />
                </div>
                <Button className="w-full py-6 text-lg rounded-full">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary/10 py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Trees" className="text-primary" size={32} />
                <span className="text-2xl font-bold">EcoAuto</span>
              </div>
              <p className="text-muted-foreground">
                Автомобили в гармонии с природой
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@ecoauto.ru
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Соцсети</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground border-t pt-8">
            © 2024 EcoAuto. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
