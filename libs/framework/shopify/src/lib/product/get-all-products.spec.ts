import { getAllProducts } from './get-all-products';

const mockTodo = {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
};

const mockResponse = {
    json: jest.fn().mockResolvedValue(mockTodo),
};

global.fetch = jest.fn().mockResolvedValue(mockResponse);

describe('getAllProducts', () => {
    it('should work', async () => {
        expect(await getAllProducts()).toBeDefined();
    });
});
