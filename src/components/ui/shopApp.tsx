import React from "react";
import ShopHeader from "./shopHeader";
import ProductSection from "./shopProductSection";
// import ProductCard from './shopProductCard';
// import BuyButton from './BuyButton';

const ShopApp: React.FC = () => {
  const underwearProducts = [
    {
      name: "Brazilian",
      price: 2450,
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f4156226825313aa16c2c2f465e2a17401b96803a0dd77c05c3f8a9c8bf99c8d?placeholderIfAbsent=true&apiKey=f523ac3fd8ad487bb4aeee4faeaa034f",
    },
    {
      name: "Brazilian",
      price: 1800,
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/83db1b56ad5c175c9dcf87b05d2d8abfea64dd60acbafd65883d2c58df5e11f1?placeholderIfAbsent=true&apiKey=f523ac3fd8ad487bb4aeee4faeaa034f",
    },
    {
      name: "Brazilian",
      price: 1800,
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/83db1b56ad5c175c9dcf87b05d2d8abfea64dd60acbafd65883d2c58df5e11f1?placeholderIfAbsent=true&apiKey=f523ac3fd8ad487bb4aeee4faeaa034f",
    },
    {
      name: "Brazilian",
      price: 1600,
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/520d78599c4644c14876b4408083da01f3ff96a3aa1338c3e16e4feb5674fa67?placeholderIfAbsent=true&apiKey=f523ac3fd8ad487bb4aeee4faeaa034f",
    },
  ];

  const tattooProducts = [
    {
      name: "Woman",
      price: 4450,
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0e9e08898eb58025a600c2446352730ac1b0fe66032c269010905c393a018ddf?placeholderIfAbsent=true&apiKey=f523ac3fd8ad487bb4aeee4faeaa034f",
    },
    {
      name: "Woman",
      price: 1800,
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/83db1b56ad5c175c9dcf87b05d2d8abfea64dd60acbafd65883d2c58df5e11f1?placeholderIfAbsent=true&apiKey=f523ac3fd8ad487bb4aeee4faeaa034f",
    },
  ];

  return (
    <div className="flex overflow-hidden flex-col mx-auto w-full text-white bg-black max-w-[480px]">
      <ShopHeader />
      <div className="flex flex-col px-3.5 pt-24 -mt-1.5 w-full text-sm leading-snug whitespace-nowrap bg-slate-900">
        <ProductSection title="Underwear" products={underwearProducts} />
        <ProductSection title="Tattoo" products={tattooProducts} />
      </div>
    </div>
  );
};

export default ShopApp;
