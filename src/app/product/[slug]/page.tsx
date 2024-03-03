import ProductView from '@/components/product/productView';
import { productList } from '@/constants';
import { useRouter } from 'next/router'
 
export default async function TextProduct({ params }: { params: { slug: string } }) {

  console.log("params", params);
  
  return <ProductView product={productList[0]} />;
}
