const fetchApi = async () => {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await res.json();
    return { data };
};
export const getAllProducts = async (): Promise<unknown> => {
    const { data } = await fetchApi();
    return data;
};
