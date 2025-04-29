import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const ProductCard = ({ name, price, imageUrl }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="aspect-square overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="p-3 pb-0">
        <h3 className="text-base font-semibold">{name}</h3>
      </CardHeader>
      <CardContent className="p-3 pt-1">
        <p className="text-lg font-bold text-primary">{price} ₽</p>
      </CardContent>
      <CardFooter className="p-3 pt-0">
        <Button className="w-full gap-1 text-sm" size="sm">
          <ShoppingCart className="h-3.5 w-3.5" />
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
