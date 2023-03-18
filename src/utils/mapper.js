export const mapper = data => {
  return data.map(({ id, original_title }) => ({
    id,
    original_title,
  }));
};
