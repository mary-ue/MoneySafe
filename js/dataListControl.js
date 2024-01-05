import { getData } from './service.js';

const categoryList = document.querySelector('#categoryList');

const getCategories = (category) => {
  const option = document.createElement('option');
  option.value = category;
  return option;
};

export const dataListControl = async () => {
  categoryList.textContent = '';

  const categories = await getData('/categories');
  console.log(categories);

  const optionsIncome = categories.income.map(category => getCategories(category));
  const optionsExpenses = categories.expenses.map(category => getCategories(category));

  categoryList.append(...optionsExpenses, ...optionsIncome);
};
