let editBookIndex = -1; 
let editVisitorIndex = -1; 

function showSection(sectionId) {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.style.display = 'block';
    } else {
        console.error(`Section with id ${sectionId} not found.`);
    }
}

// General //

const books = [];

function renderBooks(bookList = books) {
    const bookListElement = document.getElementById('book-list');
    bookListElement.innerHTML = '';
    bookList.forEach((book, index) => {
        const li = document.createElement('li');
        li.textContent = `${book.name} by ${book.author} - ${book.quantity} copies`;
        li.innerHTML += ` <button onclick="editBook(${index})">Edit</button>`;
        li.innerHTML += ` <button onclick="deleteBook(${index})">Delete</button>`;
        bookListElement.appendChild(li);
    });
}

function searchBooks() {
    const search = document.getElementById('search').value.toLowerCase();
    const filteredBooks = books.filter(book =>
        book.name.toLowerCase().includes(search) ||
        book.author.toLowerCase().includes(search) ||
        book.publisher.toLowerCase().includes(search)
    );
    renderBooks(filteredBooks);
}

function sortBooks() {
    const sortOption = document.getElementById('sortBooks').value;
    books.sort((a, b) => {
        if (sortOption === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortOption === 'author') {
            return a.author.localeCompare(b.author);
        } else if (sortOption === 'quantity') {
            return a.quantity - b.quantity;
        }
    });
    renderBooks();
}

function toggleForm(show) {
    const form = document.getElementById('book-form');
    form.style.display = show ? 'block' : 'none';
    if (!show) {
        document.getElementById('book-name').value = '';
        document.getElementById('book-author').value = '';
        document.getElementById('book-publisher').value = '';
        document.getElementById('book-quantity').value = '';
        document.getElementById('form-title').textContent = 'Add a new book';
    }
}

function editBook(index) {
    const book = books[index];
    document.getElementById('book-name').value = book.name;
    document.getElementById('book-author').value = book.author;
    document.getElementById('book-publisher').value = book.publisher;
    document.getElementById('book-quantity').value = book.quantity;
    document.getElementById('form-title').textContent = 'Edit book';
    toggleForm(true);
    editBookIndex = index; 
}
function saveBook() {
    const name = document.getElementById('book-name').value.trim();
    const author = document.getElementById('book-author').value.trim();
    const publisher = document.getElementById('book-publisher').value.trim();
    const quantity = parseInt(document.getElementById('book-quantity').value);

    if (!name || !author || !publisher || isNaN(quantity) || quantity < 0) { 
        return;
    }

    if (editBookIndex > -1) {
        и
        books[editBookIndex] = { name, author, publisher, quantity };
        editBookIndex = -1; 
    } else {
        
        books.push({ name, author, publisher, quantity });
    }

    toggleForm(false);
    renderBooks();
}

function deleteBook(index) {
    if (confirm('Are you sure you want to delete this book?')) {
        books.splice(index, 1);
        renderBooks();
    }
}


renderBooks();
// Works with books //


const visitors = [];

function renderVisitors(visitorList = visitors) {
    const visitorListElement = document.getElementById('visitor-list');
    visitorListElement.innerHTML = ''; 
    visitorList.forEach((visitor, index) => {
        const li = document.createElement('li');
        li.textContent = `ID: ${visitor.id} - ${visitor.name} - ${visitor.phone}`;
        li.innerHTML += ` <button onclick="editVisitor(${index})">Edit</button>`;
        li.innerHTML += ` <button onclick="deleteVisitor(${index})">Delete</button>`;
        visitorListElement.appendChild(li);
    });
}

function searchVisitors() {
    const search = document.getElementById('visitor-search').value.toLowerCase();
    const filteredVisitors = visitors.filter(visitor =>
        visitor.name.toLowerCase().includes(search) ||
        visitor.phone.toLowerCase().includes(search)
    );
    renderVisitors(filteredVisitors);
}

function sortVisitors() {
    const sortOption = document.getElementById('sortVisitors').value;
    visitors.sort((a, b) => {
        if (sortOption === 'id') {
            return a.id - b.id;
        } else if (sortOption === 'name') {
            return a.name.localeCompare(b.name);
        }
    });
    renderVisitors();
}

function toggleVisitorForm(show) {
    const form = document.getElementById('visitor-form');
    form.style.display = show ? 'block' : 'none';
    if (!show) {
        document.getElementById('visitor-id').value = '';
        document.getElementById('visitor-name').value = '';
        document.getElementById('visitor-phone').value = '';
        document.getElementById('visitor-form-title').textContent = 'Add a new visitor';
    }
}

function editVisitor(index) {
    const visitor = visitors[index];
    document.getElementById('visitor-id').value = visitor.id;
    document.getElementById('visitor-name').value = visitor.name;
    document.getElementById('visitor-phone').value = visitor.phone;
    document.getElementById('visitor-form-title').textContent = 'Edit visitor';
    toggleVisitorForm(true);
    editVisitorIndex = index; 
}

function saveVisitor() {
    const id = parseInt(document.getElementById('visitor-id').value);
    const name = document.getElementById('visitor-name').value.trim();
    const phone = document.getElementById('visitor-phone').value.trim();

    if (isNaN(id) || !name || !phone) {
        alert('Fill in all fields correctly.');
        return;
    }

    if (editVisitorIndex > -1) {
        
        visitors[editVisitorIndex] = { id, name, phone };
        editVisitorIndex = -1; 
    } else {
       
        visitors.push({ id, name, phone });
    }

    toggleVisitorForm(false);
    renderVisitors();
}

function deleteVisitor(index) {
    if (confirm('Are you sure you want to delete this visitor?')) {
        visitors.splice(index, 1);
        renderVisitors();
    }
}

renderVisitors();
