import getProducts from "@/actions/get-products";
import getBillboard from "@/actions/get-billboard";
import Billboard from "../components/billboard";
import Container from "../components/ui/container";
import ProductList from "../components/product-list";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("559ee6c1-a029-4ca8-b3d7-44b2a91d2974");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products} />
      </div>
    </Container>
  );
};

export default HomePage;
