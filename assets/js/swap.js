document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('product-container');
    const modal = document.getElementById('modal');
    const modalDetails = document.getElementById('modal-details');
    const closeButton = document.querySelector('.close-button');
    const searchBar = document.getElementById('search-bar');
    const categoryList = document.getElementById('category-list');

    let allProducts = [];

    modal.style.display = 'none';

    async function fetchProductData() {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        allProducts = data;
        displayProducts(data);
        populateCategories(data);
        return data;
    }
    function displayProducts(products) {
        productContainer.innerHTML = '';
        products.forEach(product => createProductCard(product));
    }

    function populateCategories(products) {
        const categories = [...new Set(products.map(product => product.category))];
        categories.forEach(category => {
            const li = document.createElement('li');
            li.textContent = category;
            li.addEventListener('click', () => filterProductsByCategory(category));
            categoryList.appendChild(li);
        });
        const allCategory = document.createElement('li');
        allCategory.textContent = 'Todos';
        allCategory.id = 'all';
        allCategory.addEventListener('click', () => filterProductsByCategory('Todos'));
        categoryList.appendChild(allCategory);
    }
    
    function filterProductsByCategory(category) {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            if (category === 'Todos') {
                card.style.display = 'block';
            } else {
                const cardCategory = card.querySelector('.category').textContent;
                if (cardCategory === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            }
        });
    }

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'card';
    
    const category = document.createElement('p'); 
    category.className = 'category'; 
    category.textContent = product.category; 
    card.appendChild(category);

    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.title;
    img.onclick = () => {
        openModal(product);
    };

    const title = document.createElement('h2');
    title.textContent = product.title;

    const description = document.createElement('p');
    description.textContent = product.description;

    const readMoreButton = document.createElement('button');
    readMoreButton.className = 'read-more-button';
    readMoreButton.textContent = 'Leer más';
    readMoreButton.onclick = () => {
        openModal(product);
    };

    const offerButton = document.createElement('button');
    offerButton.className = 'offer-button';
    offerButton.textContent = 'Ofertar';
    offerButton.onclick = () => {
        alert(`Has ofertado por el producto: ${product.title}`);
    };

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(readMoreButton);
    card.appendChild(offerButton);

    productContainer.appendChild(card);
}
    // Open modal
    function openModal(product) {
        modalDetails.innerHTML = `
            <img src="${product.image}" alt="${product.title}" style="width: 100%; height: 200px; object-fit: cover;">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
        `;
        modal.style.display = 'block';
    }
    closeButton.onclick = () => {
        modal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
    searchBar.addEventListener('keyup', () => {
        const searchTerm = searchBar.value.toLowerCase();
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const title = card.querySelector('h2').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
    async function init() {
        const products = await fetchProductData();
        products.forEach(product => createProductCard(product));
    }

    init();
});
