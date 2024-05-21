## Express Server using Docker

This repository contains a basic Node.js server application using Express.js and Docker. The server is set up to respond to requests on the /home route, returning a JSON response.

## Installation

#### 1. Clone the Repository

```
git clone https://github.com/NishantDongre/Node.js-Dockerized-Server.git
```

### 2. Set Up Environment Variables

Create a .env file in the root directory and add the following:

```
PORT=3000
```

## Running the Application

### Using Docker

-   #### Build the Docker image:

```
docker build -t nodejs_dockerized_server .
```

-   #### Run the Docker container:

```
docker run -it --publish 5000:3000 nodejs_dockerized_server:latest
```

The server will be accessible at http://localhost:5000/home

### Expected response:

```
{
  "success": true,
  "message": "Home Route up and running"
}
```
