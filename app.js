const express = require("express"); // Imports the Express module [1-4]
const path = require("path"); // Imports the path module to handle file paths [2]
const app = express(); // Creates an Express application [1-4]
const port = 3000; // Defines the port number for the server to listen on [1-7]

// Serves static files from the 'public' directory [4]
// path.join(__dirname, "/public") is used to correctly join the current directory
// with the 'public' folder, ensuring cross-platform compatibility [2].
app.use(express.static(path.join(__dirname, "/public")));
[2];

// Starts the server and listens for incoming requests on the specified port [1-4].
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`); // Logs a message to the console once the server is active [1-3, 5-7]
});
