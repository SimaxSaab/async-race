type Cars = {
  items: [];
  count: string | null;
};

const getCars = async (page: number, limit = 7): Promise<Cars> => {
  const response = await fetch(
    `http://localhost:3000/garage?_page=${page}&_limit=${limit}`,
  );

  return {
    items: await response.json(),
    count: response.headers.get('X-Total-Count'),
  };
};

const { items: items, count: count } = await getCars(1);

export default {
  items,
  count,
  page: 1, 
};