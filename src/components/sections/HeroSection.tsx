import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-6 font-montserrat">
          Ремонт бытовой техники
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Быстрый и качественный ремонт стиральных машин, холодильников, плит и
          другой техники. Выезд мастера на дом в день обращения.
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
  );
};

export default HeroSection;
