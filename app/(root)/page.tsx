import ProductList from '@/components/shared/product/product-list';
//import sampleData from '@/db/sample-data';
import { getLatestProducts } from '@/lib/actions/product.actions';
import { LATEST_PRODUCTS_LIMIT } from '@/lib/constants';

//export default async function Home() {
  const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  return (
    <>
      <ProductList
        data={latestProducts}
        title='Newest Arrivals'
        limit={LATEST_PRODUCTS_LIMIT}
      />
    </>
  );
}

export default Homepage;
