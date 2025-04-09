import React from "react";

interface ProductCardProps {
  name: string;
  price: number;
  imageSrc: string;
}

const ShopProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  imageSrc,
}) => {
  return (
    <div className="flex overflow-hidden flex-col p-3 rounded-lg bg-slate-900 bg-opacity-70">
      <div className="flex gap-10">
        <div className="my-auto">{name}</div>
        <div className="flex flex-1 gap-2 font-medium">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3af27e986f4f2850ea71079edf87f32e5052c00474e83fa28f13aa833556471f?placeholderIfAbsent=true&apiKey=f523ac3fd8ad487bb4aeee4faeaa034f"
            alt=""
            className="object-contain shrink-0 w-5 aspect-[1.05] rounded-[132px]"
          />
          <div className="my-auto">{price}</div>
        </div>
      </div>
      <img
        loading="lazy"
        src={imageSrc}
        alt={`${name} product`}
        className="object-contain aspect-[1.64] w-[151px]"
      />
    </div>
  );
};

export default ShopProductCard;
