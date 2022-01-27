import { getAllProducts } from './get-all-products';

describe('frameworkShopify', () => {
    it('should work', async () => {
        const products = [1,2,3]
        expect(await getAllProducts()).toEqual(products);
    });
});
