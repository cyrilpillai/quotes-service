# Quotify Service

Quotify Service is a REST server that enables you to manage a collection of quotes, providing functionality for adding, updating, deleting, retrieving quotes. It's built using [ExpressJS](https://expressjs.com/) and leverages [DynamoDB](https://aws.amazon.com/dynamodb/) as the underlying database. Hosted on [fly.io](https://fly.io/), it ensures scalability and reliability.

![Architecture](/assets/architecture.png)

## Features

- **Add New Quotes:** Add new quotes by specifying the title, description & author of the quote.

- **Update Quotes:** Update existing quotes using their ID.

- **Delete Quotes:** Remove quotes that are no longer relevant using their ID.

- **Fetch Quotes:** Retrieve a quote by ID or fetch the entire list of quotes.

## API Endpoints

**Base URL:** https://api.cyrilpillai.com

### Add a Quote

- **Endpoint:** `POST /quotes`
- **Request Payload:**
  ```json
  {
    "title": "Hello World",
    "description": "Programming is fun when it works as expected",
    "author": "Cyril Pillai"
  }
  ```
- **Response Payload:**
  ```json
  {
    "uuid": "d4ebcb5-1423-7d72-830z-39716dgh123c",
    "title": "Hello World!",
    "description": "Programming is fun when it works as expected",
    "author": "Cyril Pillai",
    "updated_at": "2023-01-04T16:15:55.300Z",
    "created_at": "2023-01-04T16:15:55.300Z"
  }
  ```

### Update a Quote

- **Endpoint:** `PUT /quotes/:id`
- **Request Payload:**
  ```json
  {
    "title": "Hello World!",
    "description": "Programming is fun when it works as expected. But it doesn't most of the time",
    "author": "Cyril Pillai"
  }
  ```
- **Response Payload:**
  ```json
  {
    "uuid": "d4ebcb5-1423-7d72-830z-39716dgh123c",
    "title": "Hello World!",
    "description": "Programming is fun when it works as expected. But it doesn't most of the time",
    "author": "Cyril Pillai",
    "updated_at": "2023-01-04T16:15:55.300Z",
    "created_at": "2023-01-04T16:16:00.300Z"
  }
  ```

### Delete a Quote

- **Endpoint:** `PUT /quotes/:id`
- **Response Payload:**
  ```json
  {
    "uuid": "d4ebcb5-1423-7d72-830z-39716dgh123c",
    "title": "Hello World!",
    "description": "Programming is fun when it works as expected. But it doesn't most of the time",
    "author": "Cyril Pillai",
    "updated_at": "2023-01-04T16:15:55.300Z",
    "created_at": "2023-01-04T16:16:00.300Z"
  }
  ```

### Get Quote by ID

- **Endpoint:** `GET /quotes/:id`
- **Response Payload:**
  ```json
  {
    "uuid": "d4ebcb5-1423-7d72-830z-39716dgh123c",
    "title": "Hello World!",
    "description": "Programming is fun when it works as expected. But it doesn't most of the time",
    "author": "Cyril Pillai",
    "updated_at": "2023-01-04T16:15:55.300Z",
    "created_at": "2023-01-04T16:16:00.300Z"
  }
  ```

### Get All Quotes

- **Endpoint:** `GET /quotes/:id`
- **Response Payload:**
  ```json
  [
    {
        "uuid": "la36bo9b-d447-4d63-ad9b-153f7cfb9g50",
        "title": "Hello World!",
        "description": "Programming is fun when it works as expected. But it doesn't most of the time",
        "author": "Cyril Pillai",
        "updated_at": "2023-02-04T16:12:25.300Z",
        "created_at": "2023-02-04T16:17:00.300Z"
    },
    {
        "uuid": "d4ebcb5-1423-7d72-830z-39716dgh123c",
        "title": "Joey doesn't share food!",
        "description": "After a date deigned to eat two of his french fries, Joey revealed his biggest dealbreaker",
        "author": "Joey Tribbiani",
        "updated_at": "2023-01-04T16:15:55.300Z",
        "created_at": "2023-01-04T16:16:00.300Z"
    }
  ]
  ```


## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [AWS DynamoDB](https://aws.amazon.com/dynamodb/) account
- [fly.io](https://expressjs.com/) account

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/cyrilpillai/quotes-service.git
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd quotes-service
   ```

3. **Install dependencies:**
   ```bash
   cd quote-service
   npm install
   ```

### Configuration

1. Create a .env file in the project root by replicating the `.env.example` and make sure you have the following environment variables:

```env
    PORT=8080
    AWS_ACCESS_KEY_ID={{your-aws-access-key-id}}
    AWS_SECRET_ACCESS_KEY={{your-aws-secret-access-key}}
    AWS_DEFAULT_REGION={{your-aws-default-region}}
```

Replace `{{your-aws-access-key-id}}`, `{{your-aws-secret-access-key}}` & `{{your-aws-default-region}}` with your actual credentials and preferences.


### Running the Server

Start the server by running:

   ```bash
   npm start
   ```

The server will be accessible at http://localhost:8080 by default.


## Deployment

Quotify Service is hosted on fly.io. To deploy Quotify Service, follow these steps:

1. Create an account on [fly.io](https://fly.io) if you haven't already.

2. Install the Fly command-line tool by following the instructions on the [Fly documentation](https://fly.io/docs/hands-on/install-flyctl/).

3. Set up your Fly project by running:

   ```bash
   flyctl launch
   ```

4. Configure your Fly project using the generated `fly.toml` file with environment variables for AWS connection and other necessary configurations.

5. Deploy the application to Fly:

   ```bash
   flyctl deploy
   ```

6. Once the deployment is complete, you will receive a URL where Quotify Service is accessible.

## Quotify App

Checkout [Quotify App](https://github.com/cyrilpillai/quotes-client) - A flutter app that consumes these APIs and shows it in an elegant manner.

## Contributions

Contributions to Quotify Service are welcome! If you would like to contribute, please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m "Add your commit message"
   ```

4. Push your changes to your forked repository:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Open a pull request on the main repository.

Please ensure that your code adheres to the existing code style and includes appropriate tests.

## License
```
Copyright 2023 Cyril Pillai
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
   http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

