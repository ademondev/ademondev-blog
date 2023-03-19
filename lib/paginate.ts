export const paginate = <T>(items: T[], page: number, perPage: number) => {
  const start = (page - 1) * perPage;
  const end = page * perPage;
  return items.slice(start, end);
}