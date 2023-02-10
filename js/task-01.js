const allItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${allItems.length}`);

const categories = [...allItems].map((category) => `Category: ${category.children[0].textContent}\nElements:${category.children[1].children.length}`).join(`\n`);
console.log(categories);



