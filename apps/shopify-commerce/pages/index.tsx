import { InferGetStaticPropsType } from 'next';
import { getAllProducts } from '@shopify';

export async function getStaticProps() {
    const products = getAllProducts();
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
    return <>{products}</>;
}

export default Index;
