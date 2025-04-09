import React from "react";
import ShopProductCard from "./shopProductCard";
import ShopBuyButton from "./shopBuyButton";

interface Product {
  name: string;
  price: number;
  imageSrc: string;
}

interface ProductSectionProps {
  title: string;
  products: Product[];
}

const ProductSection: React.FC<ProductSectionProps> = ({ title, products }) => {
  return (
    <>
      <div className="self-start text-lg font-semibold text-right">{title}</div>
      <div className="flex gap-3.5 mt-1.5 leading-none">
        {products.map((product, index) => (
          <ShopProductCard key={index} {...product} />
        ))}
      </div>
      <div className="flex gap-3.5 mt-2 w-full font-semibold">
        {products.map((_, index) => (
          <ShopBuyButton key={index} />
        ))}
      </div>
    </>
  );
};

export default ProductSection;
