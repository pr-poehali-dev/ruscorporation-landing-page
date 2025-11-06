import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
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
            <a href="#services" className="text-sm hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="text-sm hover:text-primary transition-colors">О компании</a>
            <a href="#pricing" className="text-sm hover:text-primary transition-colors">Тарифы</a>
            <a href="#licenses" className="text-sm hover:text-primary transition-colors">Лицензии</a>
            <a href="#reviews" className="text-sm hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button size="sm" className="bg-secondary hover:bg-secondary/90">
            <Icon name="Phone" size={16} className="mr-2" />
            Позвонить
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="font-heading md:text-6xl font-bold mb-6 text-foreground text-4xl">Надежная охрана для вас и вашего бизнеса</h1>
              <p className="text-xl text-muted-foreground mb-8">Профессиональные услуги частной охраны и консалтинга с 2015 года. Все виды лицензий. Опытные сотрудники. Индивидуальный подход.</p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Shield" size={20} className="mr-2" />
                  Заказать охрану
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop" 
                alt="Охрана" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
                <div className="text-4xl font-heading font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">лет на рынке</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексные решения для обеспечения безопасности вашего объекта
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'Building2',
                title: 'Охрана объектов',
                description: 'Физическая охрана коммерческих и промышленных объектов 24/7'
              },
              {
                icon: 'Users',
                title: 'Охрана мероприятий',
                description: 'Профессиональное сопровождение концертов, выставок, корпоративов'
              },
              {
                icon: 'Home',
                title: 'Охрана жилых комплексов',
                description: 'Обеспечение безопасности жителей и контроль доступа'
              },
              {
                icon: 'Car',
                title: 'Охрана автостоянок',
                description: 'Круглосуточная охрана парковок и автомобильных стоянок'
              },
              {
                icon: 'FileText',
                title: 'Консалтинг',
                description: 'Разработка концепций безопасности и аудит защищенности'
              },
              {
                icon: 'Video',
                title: 'Монтаж систем безопасности',
                description: 'Установка видеонаблюдения, СКУД и охранной сигнализации'
              }
            ].map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="font-heading">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
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
              <h2 className="font-heading text-4xl font-bold mb-6">О компании</h2>
              <p className="text-lg text-muted-foreground mb-6">
                ЧОП «Рускорпорация охрана и консалтинг» — это команда профессионалов с опытом работы в силовых структурах и службах безопасности.
              </p>
              <div className="space-y-4">
                {[
                  { icon: 'CheckCircle2', text: 'Все необходимые лицензии и разрешения' },
                  { icon: 'CheckCircle2', text: 'Опытные охранники с удостоверениями' },
                  { icon: 'CheckCircle2', text: 'Современное оборудование и технологии' },
                  { icon: 'CheckCircle2', text: 'Индивидуальный подход к каждому клиенту' },
                  { icon: 'CheckCircle2', text: 'Круглосуточная поддержка и оперативное реагирование' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Icon name={item.icon} size={20} className="text-secondary mt-1" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardHeader className="text-center">
                  <div className="text-4xl font-heading font-bold text-primary">2000+</div>
                  <CardDescription>Охраняемых объектов</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <div className="text-4xl font-heading font-bold text-primary">1200+</div>
                  <CardDescription>Сотрудников</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <div className="text-4xl font-heading font-bold text-primary">10+</div>
                  <CardDescription>Лет на рынке</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <div className="text-4xl font-heading font-bold text-primary">99%</div>
                  <CardDescription>Довольных клиентов</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4">Тарифы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Прозрачные цены на услуги охраны без скрытых платежей
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Базовый',
                price: '15 000',
                period: 'за пост в месяц',
                features: [
                  'Один охранник',
                  'Дневная смена (12 часов)',
                  'Базовое оборудование',
                  'Отчетность',
                  'Техподдержка'
                ]
              },
              {
                name: 'Стандарт',
                price: '28 000',
                period: 'за пост в месяц',
                features: [
                  'Два охранника',
                  'Круглосуточная охрана',
                  'Расширенное оборудование',
                  'Видеонаблюдение онлайн',
                  'Оперативная группа',
                  'Приоритетная поддержка'
                ],
                popular: true
              },
              {
                name: 'Премиум',
                price: 'От 45 000',
                period: 'за пост в месяц',
                features: [
                  'Бригада охранников',
                  '24/7 охрана и патруль',
                  'Полный комплекс систем безопасности',
                  'Кинологическая служба',
                  'Личный менеджер',
                  'Консалтинг в подарок'
                ]
              }
            ].map((plan, idx) => (
              <Card key={idx} className={plan.popular ? 'border-2 border-primary shadow-xl' : ''}>
                {plan.popular && (
                  <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-semibold rounded-t-lg">
                    Популярный выбор
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="font-heading text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <div className="text-4xl font-heading font-bold text-primary">{plan.price} ₽</div>
                    <div className="text-sm text-muted-foreground mt-1">{plan.period}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-secondary mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="licenses" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4">Лицензии и сертификаты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Работаем строго в правовом поле с полным пакетом разрешительных документов
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: 'Award', title: 'Лицензия МВД', subtitle: 'На охранную деятельность' },
              { icon: 'ShieldCheck', title: 'ISO 9001', subtitle: 'Система менеджмента качества' },
              { icon: 'FileCheck', title: 'Членство в СРО', subtitle: 'Саморегулируемая организация' },
              { icon: 'BadgeCheck', title: 'Страхование', subtitle: 'Ответственность застрахована' }
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

      <section id="reviews" className="py-20">
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
                text: 'Сотрудничаем уже 5 лет. Профессионалы своего дела, никаких нареканий. Охранники всегда на своих постах, реагируют оперативно.',
                rating: 5
              },
              {
                name: 'Марина Сидорова',
                company: 'ТЦ "Европа"',
                text: 'Отличный сервис! Особенно понравился индивидуальный подход и консультации по организации безопасности нашего торгового центра.',
                rating: 5
              },
              {
                name: 'Дмитрий Козлов',
                company: 'Склад "Логистика+"',
                text: 'Надежная охрана по разумной цене. Установили видеонаблюдение и организовали круглосуточную охрану. Спим спокойно.',
                rating: 5
              }
            ].map((review, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic">"{review.text}"</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold">{review.name}</div>
                  <div className="text-sm text-muted-foreground">{review.company}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Оставьте заявку и наш менеджер свяжется с вами в ближайшее время
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" size={20} className="text-primary mt-1" />
                    <div>
                      <div className="font-semibold">Телефон</div>
                      <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                      <div className="text-muted-foreground">+7 (800) 555-35-35</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" size={20} className="text-primary mt-1" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-muted-foreground">info@ruscorp-security.ru</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={20} className="text-primary mt-1" />
                    <div>
                      <div className="font-semibold">Адрес</div>
                      <div className="text-muted-foreground">г. Москва, ул. Новая дорога, д. 9, корп 2</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" size={20} className="text-primary mt-1" />
                    <div>
                      <div className="font-semibold">Режим работы</div>
                      <div className="text-muted-foreground">Круглосуточно, без выходных</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Отправить заявку</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel"
                      placeholder="Телефон" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      type="email"
                      placeholder="Email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Сообщение" 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить заявку
                  </Button>
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
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/c67903de-607a-4f48-955a-c7da4da30435.png" 
                  alt="Рускорпорация" 
                  className="h-10 w-auto brightness-0 invert"
                />
                <div className="font-heading font-bold text-lg">Рускорпорация</div>
              </div>
              <p className="text-sm opacity-90">
                Профессиональная охрана и безопасность с 2005 года
              </p>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li>Охрана объектов</li>
                <li>Охрана мероприятий</li>
                <li>Консалтинг</li>
                <li>Видеонаблюдение</li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li>О нас</li>
                <li>Лицензии</li>
                <li>Вакансии</li>
                <li>Контакты</li>
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