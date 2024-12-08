import Card from '@/app/components/card';
import p2 from '@/app/assets/p2.png';
import p3 from '@/app/assets/p3.png'; // Importing image
import p4 from '@/app/assets/p4.png';
import p5 from '@/app/assets/p5.png';


const ProductPage = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="text-[32px] font-medium ml-4 sm:ml-0 mb-8 text-center sm:text-left">
        Featured Products
      </div>

      {/* Responsive Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
        <Card
          title="Library Stool Chair"
          price="$20"
          label="New"
          image={p2} // Passing the imported image
          addToCartLink="/cart"
        />
        <Card
          title="Library Stool Chair"
          price="$20"
          label="Sale"
          image={p3} // Another image
          addToCartLink="/cart"
        />
        <Card
          title="Library Stool Chair"
          price="$20"
          label=""
          image={p4} // Another image
          addToCartLink="/cart"
        />
        <Card
          title="Library Stool Chair"
          price="$20"
          label=""
          image={p5} // Another image
          addToCartLink="/cart"
        />
      </div>
    </div>
  );
};

export default ProductPage;
