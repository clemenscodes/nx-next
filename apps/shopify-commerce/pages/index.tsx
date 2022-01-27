import { InferGetStaticPropsType } from 'next';
import { getAllProducts } from '@shopify';

export async function getStaticProps() {
    const products = await getAllProducts();
    return {
        props: {
            products,
        },
        revalidate: 4 * 60 * 60,
    };
}

export function Index({
    products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return <>{JSON.stringify(products)}</>;
}

export default Index;
