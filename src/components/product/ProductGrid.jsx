import React from "react";
import ProductImg1 from "../../assets/img/jacket-5.jpg";
import CardProduct from "./CardProduct";
const products = [
  {
    ProductId: 1,
    ProductItemAbstractSku: "M21189",
    ProductItemConcreteSku: "517630",
    ProductItemNameDE:
      "Smit Visual Rednerpult, hÃ¶henverstellbar - mobil mit 4 Rollen - schwarz / Buche-Dekor",
    ProductItemNameEN:
      "Smit Visual lectern, height-adjustable - mobile, with 4 rollers - black / beech decor",
    ProductItemDescriptionDE:
      " Schlichtes, sehr flexibles Rednerpult fÃ¼r den schnellen Einsatz! Leicht zu transportieren, ideal fÃ¼r Konferenzen und Seminare. Das Rednerpult ist auf 4 Rollen mobil und steht mit 2 feststellbaren Rollen sicher auf dem Podium. Die pulverbeschichtete Stahlkonstruktion sorgt fÃ¼r hÃ¶chste StabilitÃ¤t.  ",
    ProductItemStore: "US",
    ProductItemDescriptionEN:
      " Simple, very flexible lectern for fast use! Easy to transport, ideal for conferences and seminars. The lectern is mobile on 4 rollers and, with 2 adjustable rollers, stands securely on the podium. The powder-coated steel construction ensures the highest stability.  ",
    ProductItemIsSearchableDE: "True",
    ProductItemIsSearchableEN: "True",
    ProductItemIsBundled: null,
    ProductItemIsQuantitySplittable: null,
    ProductItemAttributes:
      "ablagenfarbe/Buche-Dekor/ablagenfarbe/Buche-Dekor/ablagenfarbe/beech decor//////",
    ProductCurrentPrice: 25,
    ProductOldPrice: 75,
    ProductRating: 3,
    ProductDiscount: 15,
    ProductCategory: "Lorem Jackson",
    ProductImages: ProductImg1,
    Ressources: [],
  },
  {
    ProductId: 2,
    ProductItemAbstractSku: "M21189",
    ProductItemConcreteSku: "517630",
    ProductItemNameDE:
      "Smit Visual Rednerpult, hÃ¶henverstellbar - mobil mit 4 Rollen - schwarz / Buche-Dekor",
    ProductItemNameEN:
      "Smit Visual lectern, height-adjustable - mobile, with 4 rollers - black / beech decor",
    ProductItemDescriptionDE:
      " Schlichtes, sehr flexibles Rednerpult fÃ¼r den schnellen Einsatz! Leicht zu transportieren, ideal fÃ¼r Konferenzen und Seminare. Das Rednerpult ist auf 4 Rollen mobil und steht mit 2 feststellbaren Rollen sicher auf dem Podium. Die pulverbeschichtete Stahlkonstruktion sorgt fÃ¼r hÃ¶chste StabilitÃ¤t.  ",
    ProductItemStore: "US",
    ProductItemDescriptionEN:
      " Simple, very flexible lectern for fast use! Easy to transport, ideal for conferences and seminars. The lectern is mobile on 4 rollers and, with 2 adjustable rollers, stands securely on the podium. The powder-coated steel construction ensures the highest stability.  ",
    ProductItemIsSearchableDE: "True",
    ProductItemIsSearchableEN: "True",
    ProductItemIsBundled: null,
    ProductItemIsQuantitySplittable: null,
    ProductItemAttributes:
      "ablagenfarbe/Buche-Dekor/ablagenfarbe/Buche-Dekor/ablagenfarbe/beech decor//////",
    ProductCurrentPrice: 25,
    ProductOldPrice: 75,
    ProductRating: 3,
    ProductDiscount: 15,
    ProductCategory: "Lorem Jackson",
    ProductImages: ProductImg1,
    Ressources: [],
  },
  {
    ProductId: 3,
    ProductItemAbstractSku: "M21189",
    ProductItemConcreteSku: "517630",
    ProductItemNameDE:
      "Smit Visual Rednerpult, hÃ¶henverstellbar - mobil mit 4 Rollen - schwarz / Buche-Dekor",
    ProductItemNameEN:
      "Smit Visual lectern, height-adjustable - mobile, with 4 rollers - black / beech decor",
    ProductItemDescriptionDE:
      " Schlichtes, sehr flexibles Rednerpult fÃ¼r den schnellen Einsatz! Leicht zu transportieren, ideal fÃ¼r Konferenzen und Seminare. Das Rednerpult ist auf 4 Rollen mobil und steht mit 2 feststellbaren Rollen sicher auf dem Podium. Die pulverbeschichtete Stahlkonstruktion sorgt fÃ¼r hÃ¶chste StabilitÃ¤t.  ",
    ProductItemStore: "US",
    ProductItemDescriptionEN:
      " Simple, very flexible lectern for fast use! Easy to transport, ideal for conferences and seminars. The lectern is mobile on 4 rollers and, with 2 adjustable rollers, stands securely on the podium. The powder-coated steel construction ensures the highest stability.  ",
    ProductItemIsSearchableDE: "True",
    ProductItemIsSearchableEN: "True",
    ProductItemIsBundled: null,
    ProductItemIsQuantitySplittable: null,
    ProductItemAttributes:
      "ablagenfarbe/Buche-Dekor/ablagenfarbe/Buche-Dekor/ablagenfarbe/beech decor//////",
    ProductCurrentPrice: 25,
    ProductOldPrice: 75,
    ProductRating: 4,
    ProductDiscount: 15,
    ProductCategory: "Lorem Jackson",
    ProductImages: ProductImg1,
    Ressources: [],
  },
];

const ProductGrid = () => {
  return (
    <div className="product-main">
      <h2 className="title" style={{margin:'10px 50px'}}>Products</h2>
      <div className="product-grid">
        {products.map((item) => (
          <CardProduct key={item.ProductId} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
