# React Debounce Library

This is a simple React library that allows users to search ,filter & display hints while making an API call. It consists of a search bar where users can input their search query and a list component to display the search results with regards to performance.

## Features

- Search and filter api content.
- Display search results in a list format.

## Prerequisites

Before running this application, ensure you have the following installed:

- Node.js
- npm or yarn

## Getting Started

To get started with this application, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone <repository-url>

Open http://localhost:3000 in your web browser to view the application.

Components
Search
The Search component renders a search bar where users can input their search query. It receives a callback function onChange as a prop, which is called whenever the input value changes.

List
The List component displays the search results in a list format. It receives the searchTerm prop from its parent component and fetches the search results from the Wikipedia API using the getWikiSearchResults function. The search results are then rendered using the Item component.

Item
The Item component represents an individual search result item. It receives the result prop containing the data for a single search result and renders it accordingly.

API
The application uses the Wikipedia API to fetch search results. The getWikiSearchResults function in the api/wikiApi.js file handles the API request and returns the search results data.

Contributing
Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.
