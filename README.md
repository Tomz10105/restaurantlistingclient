
# Restaurant Listing App

This project is a ReactJS application that displays a categorized list of restaurants based on their location states. The application fetches restaurant data from a provided API endpoint and presents it in a user-friendly format.

## Project Structure

### Server-side (ExpressJS)
The server-side code resides in the `proxy-server` folder. It utilizes ExpressJS to set up a middleware for CORS handling and defines a route to fetch restaurant data from the provided API endpoint.

### Client-side (ReactJS)
The client-side code is located in the `client` folder. It's a ReactJS application that utilizes React Router to navigate between different views/components. The main components include:
- `Home`: Displays the homepage
- `RestaurantList`: Displays the list of restaurants
- `About`: About page
- `NotFound`: 404 error page

## Getting Started

### Prerequisites
- Node.js
- npm or yarn

### Installation
1. Clone this repository.
2. Navigate to the `proxy-server` folder and run `npm install` to install server dependencies.
3. Navigate to the `client` folder and run `npm install` to install client dependencies.

## Running the Application
1. Start the server:
   ```
   cd proxy-server
   npm start
   ```
   The server will run on port 5000.

2. Start the client:
   ```
   cd client
   npm start
   ```
   The React app will run on port 3000.

## API Integration
The Express server fetches restaurant data from the provided API endpoint: [https://nextjs-orpin-omega-98.vercel.app/api/restaurants](https://nextjs-orpin-omega-98.vercel.app/api/restaurants)

## Deployment
The application is deployed on Vercel and accessible via a public URL provided by Vercel.

## Testing
API testing can be performed using tools like Postman or `curl` before integrating it into the application.

## Code Sharing
The project is available on GitHub at [repository link](#insert-your-repository-link-here). The repository is public and accessible to view the codebase.

## Expected Output
The homepage of the application lists restaurants under categorized subtitles based on their locations, following a format similar to:
```
New York:
- Restaurant 1
- Restaurant 2
- Restaurant 3

Texas:
- Restaurant 4
- Restaurant 5
- Restaurant 6
```

## Notes
- The application is designed to be responsive and user-friendly.
- Emphasis has been placed on maintaining clean and maintainable code practices.

---

Feel free to tailor the content to better fit your project's specifics and add more details or sections as needed. Adjust the placeholders like the repository link with the actual URLs and information specific to your deployment.