# Rick and Morty Character Notes App

This is a simple Next.js application that uses the [Rick and Morty API](https://rickandmortyapi.com/) to display character information and allows users to add notes to characters.

## Features

- View a list of characters from the Rick and Morty API.
- Search through characters by name, location name or type.
- Click on a character to view more details and add notes.
- Add notes to characters and them later.

## Technologies Used

- Next.js
- JavaScript
- Tailwind CSS
- Rest Client
- MongoDB
- mongoose

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/username/rick-and-morty-character-notes-app.git
   ```

2. Install dependencies:

   ```bash
   cd ricknmorty
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open http://localhost:3000 in your browser to view the application.


## Implementation Details

- **REST API**: The application uses RESTful API endpoints to fetch character data from the Rick and Morty API. The `/character` endpoint fetches a list of characters, and the `/character/{id}` endpoint fetches the details of a specific character.

- **REST API Calls**: The application uses Axios to make HTTP requests to the RESTful API endpoints. Axios is a popular HTTP client library that provides a simple and intuitive way to make requests and handle responses.

- **MONGO DB**: MongoDB is a good choice for applications that need a flexible, scalable, and high-performance database. It's particularly well-suited for applications that need to handle large amounts of data or high traffic, or that need to work with data that doesn't fit neatly into a relational model..

- **Why use DATABASE over local storage**: local storage is a convenient and lightweight option for storing small amounts of data but  databases provide a more robust and scalable solution for applications that need to store data that can be accessed in the case of multiple devices.

## Why REST?

- **Simplicity**: REST is simpler and follow a predictable structure and use standard HTTP methods, making them easier to work with.

- **Compatibility**: RESTful APIs are widely supported by various programming languages and frameworks, including Next.js. This makes it easier to integrate the Rick and Morty API with a Next.js application.

- **Caching**: RESTful APIs are cacheable by default, meaning responses can be cached at various levels (browser, CDN, ) to improve performance and reduce server load. This is especially useful for static data like character information in the Rick and Morty API, where the data doesn't change frequently.

- **Tooling**: REST has been around for a long time and has a mature ecosystem of tools and libraries for building and consuming APIs. This includes libraries for making HTTP requests (e.g., Axios), generating API documentation (e.g., Swagger), and testing APIs (e.g., Postman).

Overall, while GraphQL offers more flexibility and efficiency for complex data fetching scenarios, REST is a better fit for the simple data fetching requirements of the Rick and Morty API. It aligns well with the API's structure and provides a straightforward way to access and manipulate the data.

 
## Why JavaScript?

- **Compatibility**: JavaScript is widely supported by various programming languages and frameworks, including Next.js. This makes it easier to integrate the Rick and Morty API with a Next.js application.

- **Dynamic Typing**: JavaScript is a dynamically typed language, meaning you don't need to specify the type of a variable when you declare it. This can make the code more concise and easier to write, especially for small projects.

- **Familiarity**: Many developers are already familiar with JavaScript, making it easier to onboard new team members and collaborate on projects.

 JavaScript is a good fit for the simple data fetching requirements of the Rick and Morty API. It aligns well with the API's structure and provides a straightforward way to access and manipulate the data.

## Conclusion

This application demonstrates how to build a full-stack Next.js application with TypeJavaScript, Tailwind CSS, Rest Client. It provides a simple and intuitive user interface for viewing character information and adding notes to characters.
