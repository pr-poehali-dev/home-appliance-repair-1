import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AdvantagesSection from "@/components/sections/AdvantagesSection";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <ServicesSection />
      <AdvantagesSection />

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
