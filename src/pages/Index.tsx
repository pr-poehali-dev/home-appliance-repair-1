import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Стиральные машины",
      description: "Ремонт любых поломок, замена подшипников, ремней, насосов",
      icon: "Washing",
    },
    {
      title: "Холодильники",
      description: "Заправка фреоном, ремонт компрессора, замена термостата",
      icon: "Refrigerator",
    },
    {
      title: "Плиты и духовки",
      description: "Ремонт газовых и электрических плит, духовых шкафов",
      icon: "ChefHat",
    },
    {
      title: "Посудомоечные машины",
      description:
        "Устранение засоров, ремонт насосов, программного обеспечения",
      icon: "Utensils",
    },
    {
      title: "Микроволновки",
      description: "Ремонт магнетрона, замена слюды, настройка мощности",
      icon: "Microwave",
    },
    {
      title: "Мелкая техника",
      description: "Утюги, чайники, миксеры, блендеры и другая техника",
      icon: "Zap",
    },
  ];

  const advantages = [
    {
      title: "Опыт 15+ лет",
      description: "Профессиональный ремонт с гарантией качества",
      icon: "Award",
    },
    {
      title: "Выезд на дом",
      description: "Бесплатная диагностика и ремонт у вас дома",
      icon: "Home",
    },
    {
      title: "Гарантия 6 месяцев",
      description: "На все виды работ и установленные запчасти",
      icon: "Shield",
    },
    {
      title: "Работаем 24/7",
      description: "Аварийный выезд в любое время суток",
      icon: "Clock",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 font-montserrat">
            Ремонт бытовой техники
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Быстрый и качественный ремонт стиральных машин, холодильников, плит
            и другой техники. Выезд мастера на дом в день обращения.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-3"
            >
              <Icon name="Phone" className="mr-2" />
              Вызвать мастера
            </Button>
            <div className="text-center">
              <p className="text-sm opacity-75">Звоните прямо сейчас:</p>
              <p className="text-2xl font-bold">+7 (999) 123-45-67</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="bg-white/20 text-white">
              Гарантия 6 месяцев
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white">
              Выезд бесплатно
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white">
              Работаем 24/7
            </Badge>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 font-montserrat">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ремонтируем любую бытовую технику с гарантией качества
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={service.icon}
                      size={32}
                      className="text-blue-600"
                    />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 font-montserrat">
              Почему выбирают нас
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={advantage.icon}
                    size={40}
                    className="text-white"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 font-montserrat">
                Контакты и заявка
              </h2>
              <p className="text-xl opacity-90">
                Свяжитесь с нами удобным способом
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  Как с нами связаться
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Icon name="Phone" size={24} className="mr-4" />
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <p className="text-xl">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Clock" size={24} className="mr-4" />
                    <div>
                      <p className="font-semibold">Время работы</p>
                      <p>Ежедневно с 8:00 до 22:00</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Icon name="MapPin" size={24} className="mr-4" />
                    <div>
                      <p className="font-semibold">Зона обслуживания</p>
                      <p>Москва и Московская область</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Icon name="MessageSquare" size={24} className="mr-4" />
                    <div>
                      <p className="font-semibold">WhatsApp/Telegram</p>
                      <p>+7 (999) 123-45-67</p>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="bg-white text-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">
                    Оставить заявку
                  </CardTitle>
                  <CardDescription className="text-center">
                    Мы перезвоним в течение 15 минут
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Телефон"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Опишите проблему с техникой"
                      rows={3}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                    />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Icon name="Send" className="mr-2" />
                    Отправить заявку
                  </Button>
                  <p className="text-sm text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой
                    конфиденциальности
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg font-semibold mb-2">
            Сервис ремонта бытовой техники
          </p>
          <p className="text-gray-400">
            © 2024 Все права защищены. Быстро, качественно, с гарантией.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
