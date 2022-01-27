import { getAllProducts } from './get-all-products';

describe('frameworkShopify', () => {
    it('should work', () => {
        expect(getAllProducts()).toEqual('get-all-products');
    });
});
