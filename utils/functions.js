export function generateCategories(menu) {
  // Initialize an empty array to store categories
  let categories = [];
  console.log("!!!!! menu[0][langkey]", menu[0].langKey);
  // Iterate over menu items for the first language
  const firstLanguage = menu[0].langKey;
  console.log(menu[0].items[firstLanguage]);
  menu[0].items.forEach((menuItem) => {
    const { category } = menuItem;

    console.log("category", category);

    // Check if category already exists in categories
    let existingCategory = categories.find((el) => el.name === category);

    // If not, add a new category entry to the array
    if (!existingCategory) {
      categories.push({ name: category, ids: [] });
    }
  });

  console.log(categories);

  // Iterate over all languages and merge categories based on ids
  menu[0].items.forEach((lang) => {
    lang.forEach((menuItem) => {
      categories.forEach((category) => {
        if (category.name === menuItem.category) {
          category.ids.push(menuItem._id);
        }
      });
    });
  });

  // Handle subcategories
  menu[0].items[firstLanguage].forEach((menuItem) => {
    const { subCategory } = menuItem;

    if (subCategory) {
      // Check if subcategory already exists in categories
      let existingSubCategory = categories.find(
        (el) => el.subName === subCategory
      );

      // If not, add a new subcategory entry to the array
      if (!existingSubCategory) {
        categories.push({ subName: subCategory, ids: [] });
      }
    }
  });

  // Iterate over all languages and merge subcategories based on ids
  menu[0].items.forEach((lang) => {
    lang.forEach((menuItem) => {
      const subCategory = menuItem.subCategory;

      if (subCategory) {
        categories.forEach((el) => {
          if (el.subName === subCategory) {
            el.ids.push(menuItem._id);
          }
        });
      }
    });
  });

  // Create a result object with unique category and subcategory values
  let result = {};
  categories.forEach((el, i) => {
    if (el.name) {
      result[i + 1] = [el.name];
    }
    if (el.subName) {
      result[i + 100] = [el.subName];
    }
  });

  // Remove empty entries from the result object
  for (const key in result) {
    const entry = result[key];
    if (entry.length < 1) {
      delete result[key];
    }
  }

  return result;
}
