# JavaScript Library Management Application

This is a single-page web application (SPA) for managing a small library's inventory of books and its registered visitors. The application is built entirely with **vanilla JavaScript, HTML, and CSS**, demonstrating how to create a dynamic and interactive user interface without the need for external frameworks.

## About The Project

This project serves as an excellent portfolio piece, showcasing the ability to build a complete, functional web application from scratch. It features two main sections—one for managing books and one for visitors—and provides full CRUD (Create, Read, Update, Delete) functionality for both.

### Key Concepts and Features

*   **Single-Page Application (SPA) Architecture**: The application uses JavaScript to show and hide different sections of the page dynamically, providing a smooth user experience without requiring page reloads.
*   **DOM Manipulation**: The entire user interface is rendered and updated dynamically using core JavaScript DOM manipulation methods (e.g., `document.getElementById`, `createElement`, `innerHTML`, `appendChild`).
*   **Full CRUD Functionality**:
    *   **Create**: Add new books or visitors via a modal-like form.
    *   **Read**: Display lists of all books and visitors.
    *   **Update**: Edit the details of existing books or visitors.
    *   **Delete**: Remove entries with a confirmation prompt.
*   **Data Management in Memory**: The application state (the list of books and visitors) is stored in JavaScript arrays in memory.
*   **Interactive UI Components**:
    *   **Search**: Real-time filtering of lists based on user input.
    *   **Sorting**: Dropdown menus allow the user to sort the lists by different criteria (e.g., book name, author, visitor ID).
    *   **Modal Forms**: Add/Edit forms are implemented as divs that can be shown or hidden, acting like modals.
*   **Modern CSS Styling**: Includes a clean layout, custom fonts, and a subtle pulse animation on the search buttons for better user engagement.

## Application Structure

The project is composed of three main files:

*   **`index.html`**: The single HTML file that provides the basic structure and containers for the application. It includes the header, navigation menu, and the `<section>` elements for books and visitors.
*   **`style.css`**: The stylesheet that defines the look and feel of the application, including the layout, typography, form styling, and animations.
*   **`app.js`**: The core of the application. This file contains all the JavaScript logic:
    *   Data storage (in-memory arrays for `books` and `visitors`).
    *   Functions to render and re-render the lists.
    *   Event handlers for all user interactions (adding, editing, deleting, searching, sorting).
    *   Logic for toggling the visibility of sections and forms.

## How to Use the Application

Because this is a static web project with no server-side dependencies, it is very easy to run.

1.  **Clone or Download the Repository**:
    ```sh
    git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
    ```
2.  **Navigate to the Project Directory**:
    ```sh
    cd YOUR_REPOSITORY_NAME
    ```
3.  **Open the HTML File**:
    *   Simply open the `index.html` file in any modern web browser (like Chrome, Firefox, or Edge).

### Interacting with the App

*   Use the top navigation menu ("- Works with books -", "- Works with authors -") to switch between the book management and visitor management sections.
*   Use the "Add a new book/visitor" button to open the form for creating a new entry.
*   Use the "Edit" and "Delete" buttons next to each list item to manage existing entries.
*   Use the search bar and sort dropdown to find and organize the data.

## Note on Data Persistence

This application stores all data **in memory**. This means that if you add, edit, or delete any books or visitors, **your changes will be lost when you refresh the page**. To make the data persistent, the application would need to be integrated with a backend server or use browser-based storage like `localStorage`.
```
