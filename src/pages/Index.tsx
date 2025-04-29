import PageHeader from "@/components/PageHeader";
import ProductCard from "@/components/ProductCard";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileMenu from "@/components/MobileMenu";
import { ShoppingBag, Gift, Calendar, Clock } from "lucide-react";

// Примерные данные товаров (в реальном приложении это будет приходить с бэкенда)
const products = [
  {
    id: 1,
    name: "Шоколадный торт",
    price: 1200,
    imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 2,
    name: "Клубничный чизкейк",
    price: 950,
    imageUrl: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 3,
    name: "Ванильный капкейк",
    price: 320,
    imageUrl: "https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 4,
    name: "Фруктовый пирог",
    price: 850,
    imageUrl: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 5,
    name: "Макаруны ассорти",
    price: 690,
    imageUrl: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 6,
    name: "Карамельный эклер",
    price: 280,
    imageUrl: "https://images.unsplash.com/photo-1582716401301-b2407dc7563d?auto=format&fit=crop&q=80&w=500"
  }
];

// Данные о наших услугах
const services = [
  {
    icon: <ShoppingBag className="h-10 w-10 text-primary" />,
    title: "Широкий ассортимент",
    description: "Более 100 видов десертов на любой вкус"
  },
  {
    icon: <Gift className="h-10 w-10 text-primary" />,
    title: "Индивидуальные заказы",
    description: "Создаем уникальные десерты по вашим пожеланиям"
  },
  {
    icon: <Calendar className="h-10 w-10 text-primary" />,
    title: "Праздничные наборы",
    description: "Специальные предложения к праздникам"
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Быстрая доставка",
    description: "Доставим в течение 3 часов по городу"
  }
];

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-background pb-16">
      <header className="bg-primary py-4 text-primary-foreground">
        <div className="container flex flex-col items-center justify-between space-y-2 px-4 sm:flex-row sm:space-y-0">
          <h1 className="text-2xl font-bold">Сладкий Мир</h1>
          {isMobile ? (
            <MobileMenu />
          ) : (
            <nav className="w-full overflow-x-auto sm:w-auto">
              <ul className="flex min-w-max space-x-4 sm:space-x-6">
                <li>
                  <a href="/" className="hover:underline">Главная</a>
                </li>
                <li>
                  <a href="/catalog" className="hover:underline">Каталог</a>
                </li>
                <li>
                  <a href="/about" className="hover:underline">О нас</a>
                </li>
                <li>
                  <a href="/contacts" className="hover:underline">Контакты</a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>

      <main className="container px-4 py-8">
        <PageHeader 
          title="Кондитерские изделия на заказ" 
          description="Изысканные десерты ручной работы для любого события" 
        />

        {/* Информационный блок о сайте и услугах */}
        <div className="mb-12 rounded-xl bg-gradient-to-r from-secondary/50 to-accent/30 p-6 shadow-md">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 text-center">
              <h2 className="mb-3 text-2xl font-bold text-primary">Добро пожаловать в мир сладких удовольствий!</h2>
              <p className="text-muted-foreground">
                Мы создаем кондитерские шедевры с любовью и вниманием к каждой детали. 
                Наши десерты не только восхитительно вкусные, но и станут прекрасным украшением любого праздника.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center rounded-lg bg-background p-4 text-center shadow-sm transition-all hover:shadow-md"
                >
                  <div className="mb-3 rounded-full bg-secondary/30 p-3">
                    {service.icon}
                  </div>
                  <h3 className="mb-1 text-lg font-semibold">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <p className="italic text-muted-foreground">
                "Мы превращаем обычные ингредиенты в необыкновенные десерты, 
                которые создают особое настроение и добавляют сладости в вашу жизнь."
              </p>
            </div>
          </div>
        </div>

        <h2 className="mb-6 text-center text-2xl font-bold text-primary">Наши популярные десерты</h2>
        
        <div className={`grid gap-4 ${
          isMobile 
            ? "grid-cols-1 sm:grid-cols-2" 
            : "grid-cols-2 md:grid-cols-3"
        }`}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      </main>

      <footer className="bg-secondary py-8 text-secondary-foreground">
        <div className="container px-4">
          <div className="mb-6 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-lg font-bold">Сладкий Мир</h3>
              <p>Кондитерские изделия ручной работы высочайшего качества для любого события.</p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Контакты</h3>
              <p>Телефон: +7 (123) 456-78-90</p>
              <p>Email: info@sweetworld.ru</p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Режим работы</h3>
              <p>Пн-Пт: 9:00-20:00</p>
              <p>Сб-Вс: 10:00-18:00</p>
            </div>
          </div>
          <div className="border-t border-secondary-foreground/20 pt-4 text-center">
            <p>© 2025 Сладкий Мир. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
