import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const [calculator, setCalculator] = useState({
    guards: '1',
    hours: '12',
    days: '30'
  });

  const calculatePrice = () => {
    const guardsCount = parseInt(calculator.guards);
    const hoursCount = parseInt(calculator.hours);
    const daysCount = parseInt(calculator.days);
    const baseRate = 800;
    return (guardsCount * hoursCount * daysCount * baseRate).toLocaleString('ru-RU');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img 
              src="https://cdn.poehali.dev/files/c67903de-607a-4f48-955a-c7da4da30435.png" 
              alt="Рускорпорация" 
              className="h-12 w-auto"
            />
            <div>
              <div className="font-heading font-bold text-lg text-primary">Рускорпорация</div>
              <div className="text-xs text-muted-foreground">охрана и консалтинг</div>
            </div>
          </div>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('services')} className="text-sm hover:text-primary transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('about')} className="text-sm hover:text-primary transition-colors">О компании</button>
            <button onClick={() => scrollToSection('pricing')} className="text-sm hover:text-primary transition-colors">Тарифы</button>
            <button onClick={() => scrollToSection('calculator')} className="text-sm hover:text-primary transition-colors">Калькулятор</button>
            <button onClick={() => scrollToSection('licenses')} className="text-sm hover:text-primary transition-colors">Лицензии</button>
            <button onClick={() => scrollToSection('reviews')} className="text-sm hover:text-primary transition-colors">Отзывы</button>
            <button onClick={() => scrollToSection('contact')} className="text-sm hover:text-primary transition-colors">Контакты</button>
          </div>
          <Button size="sm" className="bg-secondary hover:bg-secondary/90" onClick={() => scrollToSection('contact')}>
            <Icon name="Phone" size={16} className="mr-2" />
            Позвонить
          </Button>
        </nav>
      </header>

      <section id="hero" className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Icon name="Shield" size={16} className="inline mr-2" />
                Профессиональная физическая охрана
              </div>
              <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-foreground">
                Надежная защита вашего бизнеса
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Опытные охранники с лицензиями. Круглосуточная охрана объектов, мероприятий и персон. 
                Мгновенное реагирование на любые инциденты.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => scrollToSection('contact')}>
                  <Icon name="Shield" size={20} className="mr-2" />
                  Заказать охрану
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('calculator')}>
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div>
                  <div className="text-3xl font-heading font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Круглосуточно</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Объектов</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-primary">1200+</div>
                  <div className="text-sm text-muted-foreground">Охранников</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/d1b9af44-c037-4e10-88eb-9fbedbf03a31/files/0beb77bb-70ce-45aa-b6f5-db1749bc7a6e.jpg" 
                alt="Физическая охрана" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
                <div className="text-4xl font-heading font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">лет опыта</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4">Услуги физической охраны</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Профессиональные охранники для защиты вашего имущества и безопасности
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'Building2',
                title: 'Охрана объектов',
                description: 'Физическая охрана коммерческих и промышленных объектов. Посты 24/7, патрулирование территории, контроль доступа.'
              },
              {
                icon: 'Users',
                title: 'Охрана мероприятий',
                description: 'Обеспечение безопасности на концертах, выставках, корпоративах. Контроль толпы, проверка билетов, охрана VIP-персон.'
              },
              {
                icon: 'UserCheck',
                title: 'Личная охрана',
                description: 'Персональные телохранители для защиты руководителей и VIP-клиентов. Сопровождение, обеспечение безопасности.'
              },
              {
                icon: 'Home',
                title: 'Охрана жилых комплексов',
                description: 'Обеспечение безопасности жителей ЖК. Контроль входа, патрулирование территории, работа с посетителями.'
              },
              {
                icon: 'Car',
                title: 'Охрана автостоянок',
                description: 'Круглосуточная физическая охрана парковок. Контроль въезда/выезда, патрулирование, видеонаблюдение.'
              },
              {
                icon: 'ShoppingBag',
                title: 'Охрана торговых объектов',
                description: 'Охрана магазинов, ТЦ, складов. Предотвращение краж, контроль посетителей, работа с инцидентами.'
              }
            ].map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl font-bold mb-6">Почему выбирают нас</h2>
              <p className="text-lg text-muted-foreground mb-6">
                ЧОП «Рускорпорация охрана и консалтинг» — команда профессионалов с опытом работы в силовых структурах. 
                Мы специализируемся на физической охране и гарантируем безопасность вашего бизнеса.
              </p>
              <div className="space-y-4">
                {[
                  { icon: 'Award', text: 'Все лицензии МВД и разрешительные документы' },
                  { icon: 'Users', text: 'Охранники 4-6 разряда с опытом от 3 лет' },
                  { icon: 'Shield', text: 'Физическая подготовка и регулярные тренировки' },
                  { icon: 'Headphones', text: 'Круглосуточная оперативная поддержка' },
                  { icon: 'FileCheck', text: 'Застрахованная ответственность на 5 млн ₽' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Icon name={item.icon} size={22} className="text-secondary mt-1 flex-shrink-0" />
                    <span className="text-lg">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="text-5xl font-heading font-bold text-primary">500+</div>
                  <CardDescription className="text-base">Охраняемых объектов</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="text-5xl font-heading font-bold text-primary">1200+</div>
                  <CardDescription className="text-base">Сотрудников охраны</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="text-5xl font-heading font-bold text-primary">10</div>
                  <CardDescription className="text-base">Лет на рынке</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="text-5xl font-heading font-bold text-primary">99%</div>
                  <CardDescription className="text-base">Довольных клиентов</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4">Тарифы на охрану</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Прозрачные цены без скрытых платежей. Оплата по факту оказанных услуг.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Базовый',
                price: '210 000',
                period: 'в месяц',
                features: [
                  'Один охранник 4 разряда',
                  'Дневная смена 12 часов',
                  'Базовое оборудование связи',
                  'Ежедневные отчеты',
                  'Техническая поддержка'
                ]
              },
              {
                name: 'Стандарт',
                price: '250 000',
                period: 'в месяц',
                features: [
                  'Два охранника 5 разряда',
                  'Круглосуточная охрана 24/7',
                  'Профессиональное оборудование',
                  'Видеонаблюдение в реальном времени',
                  'Оперативная группа быстрого реагирования',
                  'Приоритетная поддержка'
                ],
                popular: true
              },
              {
                name: 'Премиум',
                price: '300 000',
                period: 'в месяц',
                features: [
                  'Бригада охранников 6 разряда',
                  'Охрана 24/7 + патрулирование',
                  'Полный комплекс систем безопасности',
                  'Кинологическая служба',
                  'Личный менеджер безопасности',
                  'Консалтинг и аудит безопасности'
                ]
              }
            ].map((plan, idx) => (
              <Card key={idx} className={plan.popular ? 'border-2 border-primary shadow-xl scale-105' : 'hover:shadow-lg transition-all'}>
                {plan.popular && (
                  <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-semibold rounded-t-lg">
                    Самый популярный
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="font-heading text-2xl mb-4">{plan.name}</CardTitle>
                  <div>
                    <div className="text-5xl font-heading font-bold text-primary">{plan.price} ₽</div>
                    <div className="text-sm text-muted-foreground mt-2">{plan.period}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? 'default' : 'outline'}
                    onClick={() => scrollToSection('contact')}
                  >
                    Заказать охрану
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl font-bold mb-4">Калькулятор стоимости охраны</h2>
              <p className="text-lg text-muted-foreground">
                Рассчитайте примерную стоимость охранных услуг для вашего объекта
              </p>
            </div>
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Параметры охраны</CardTitle>
                <CardDescription>Укажите необходимые параметры для расчета стоимости</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="guards" className="text-base mb-3 block">Количество охранников</Label>
                    <Select value={calculator.guards} onValueChange={(value) => setCalculator({...calculator, guards: value})}>
                      <SelectTrigger id="guards">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 охранник</SelectItem>
                        <SelectItem value="2">2 охранника</SelectItem>
                        <SelectItem value="3">3 охранника</SelectItem>
                        <SelectItem value="4">4 охранника</SelectItem>
                        <SelectItem value="5">5 охранников</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="hours" className="text-base mb-3 block">Часов в день</Label>
                    <Select value={calculator.hours} onValueChange={(value) => setCalculator({...calculator, hours: value})}>
                      <SelectTrigger id="hours">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="8">8 часов (день)</SelectItem>
                        <SelectItem value="12">12 часов (смена)</SelectItem>
                        <SelectItem value="24">24 часа (сутки)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="days" className="text-base mb-3 block">Дней в месяц</Label>
                    <Select value={calculator.days} onValueChange={(value) => setCalculator({...calculator, days: value})}>
                      <SelectTrigger id="days">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="20">20 дней</SelectItem>
                        <SelectItem value="25">25 дней</SelectItem>
                        <SelectItem value="30">30 дней</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="bg-primary/5 rounded-lg p-6 mt-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-muted-foreground mb-2">Примерная стоимость в месяц:</div>
                      <div className="text-4xl font-heading font-bold text-primary">{calculatePrice()} ₽</div>
                      <div className="text-xs text-muted-foreground mt-2">
                        {calculator.guards} охр. × {calculator.hours} ч. × {calculator.days} дн. × 800 ₽/час
                      </div>
                    </div>
                    <Button size="lg" onClick={() => scrollToSection('contact')}>
                      <Icon name="Phone" size={20} className="mr-2" />
                      Оформить заявку
                    </Button>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  * Расчет является ориентировочным. Точная стоимость определяется после осмотра объекта и обсуждения требований.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="licenses" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4">Лицензии и сертификаты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Работаем строго в правовом поле с полным пакетом разрешительных документов
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: 'Award', title: 'Лицензия МВД', subtitle: 'На охранную деятельность №123456' },
              { icon: 'ShieldCheck', title: 'ISO 9001', subtitle: 'Система менеджмента качества' },
              { icon: 'FileCheck', title: 'Членство в СРО', subtitle: 'Охранных организаций' },
              { icon: 'BadgeCheck', title: 'Страхование', subtitle: 'Ответственность 5 млн ₽' }
            ].map((license, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={license.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="font-heading text-lg">{license.title}</CardTitle>
                  <CardDescription className="text-xs">{license.subtitle}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Доверие наших клиентов — главная награда для нас
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Алексей Петров',
                company: 'ООО "ТехноПром"',
                text: 'Сотрудничаем уже 5 лет. Профессионалы своего дела, никаких нареканий. Охранники всегда на постах, реагируют оперативно на любые ситуации.',
                rating: 5
              },
              {
                name: 'Марина Сидорова',
                company: 'ТЦ "Европа"',
                text: 'Отличный сервис! Особенно понравился индивидуальный подход и консультации по организации безопасности нашего торгового центра. Охранники вежливые и внимательные.',
                rating: 5
              },
              {
                name: 'Дмитрий Козлов',
                company: 'Склад "Логистика+"',
                text: 'Надежная физическая охрана по разумной цене. Установили видеонаблюдение и организовали круглосуточную охрану. Спим спокойно, зная что объект под надежной защитой.',
                rating: 5
              }
            ].map((review, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic leading-relaxed">"{review.text}"</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold text-lg">{review.name}</div>
                  <div className="text-sm text-muted-foreground">{review.company}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Оставьте заявку и наш менеджер свяжется с вами в течение 15 минут
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg mb-1">Телефон</div>
                      <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                      <div className="text-muted-foreground">+7 (800) 555-35-35</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg mb-1">Email</div>
                      <div className="text-muted-foreground">info@ruscorp-security.ru</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg mb-1">Адрес</div>
                      <div className="text-muted-foreground">г. Москва, ул. Примерная, д. 10</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg mb-1">Режим работы</div>
                      <div className="text-muted-foreground">Круглосуточно, без выходных</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Отправить заявку</CardTitle>
                <CardDescription>Мы свяжемся с вами в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input 
                      id="name"
                      placeholder="Иван Иванов" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input 
                      id="phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4 cursor-pointer" onClick={() => scrollToSection('hero')}>
                <img 
                  src="https://cdn.poehali.dev/files/c67903de-607a-4f48-955a-c7da4da30435.png" 
                  alt="Рускорпорация" 
                  className="h-10 w-auto brightness-0 invert"
                />
                <div className="font-heading font-bold text-lg">Рускорпорация</div>
              </div>
              <p className="text-sm opacity-90">
                Профессиональная физическая охрана и безопасность с 2015 года
              </p>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li className="cursor-pointer hover:opacity-100" onClick={() => scrollToSection('services')}>Охрана объектов</li>
                <li className="cursor-pointer hover:opacity-100" onClick={() => scrollToSection('services')}>Охрана мероприятий</li>
                <li className="cursor-pointer hover:opacity-100" onClick={() => scrollToSection('services')}>Личная охрана</li>
                <li className="cursor-pointer hover:opacity-100" onClick={() => scrollToSection('calculator')}>Калькулятор</li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li className="cursor-pointer hover:opacity-100" onClick={() => scrollToSection('about')}>О нас</li>
                <li className="cursor-pointer hover:opacity-100" onClick={() => scrollToSection('licenses')}>Лицензии</li>
                <li className="cursor-pointer hover:opacity-100" onClick={() => scrollToSection('reviews')}>Отзывы</li>
                <li className="cursor-pointer hover:opacity-100" onClick={() => scrollToSection('contact')}>Контакты</li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm opacity-90">
                <div>+7 (495) 123-45-67</div>
                <div>info@ruscorp-security.ru</div>
                <div>г. Москва, ул. Примерная, 10</div>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-75">
            © 2025 ЧОП «Рускорпорация охрана и консалтинг». Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
