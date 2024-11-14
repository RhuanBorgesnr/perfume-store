export const savePerfumes = (perfumes) => {
  localStorage.setItem('perfumes', JSON.stringify(perfumes));
};

export const getPerfumes = () => {
  const perfumes = localStorage.getItem('perfumes');
  return perfumes ? JSON.parse(perfumes) : [];
};
