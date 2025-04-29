import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

interface NavigationItem {
  title: string;
  href: string;
}

const navigationItems: NavigationItem[] = [
  { title: "Главная", href: "/" },
  { title: "Каталог", href: "/catalog" },
  { title: "О нас", href: "/about" },
  { title: "Контакты", href: "/contacts" }
];

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Открыть меню</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[250px] sm:w-[300px]">
        <nav className="mt-8 flex flex-col gap-4">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block rounded-md px-4 py-2 text-lg font-medium transition-colors hover:bg-primary/10"
              onClick={() => setOpen(false)}
            >
              {item.title}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
