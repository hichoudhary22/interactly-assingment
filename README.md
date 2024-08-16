# FreshSales CRM CRUD Application

This Node.js application provides a CRUD (Create, Read, Update, Delete) interface for managing contacts in FreshSales CRM using Express.js framework and FreshSales CRM API.

## Features

- Create new contacts in FreshSales CRM
- Retrieve contact information from FreshSales CRM
- Update existing contacts in FreshSales CRM
- Delete contacts from FreshSales CRM

## Prerequisites

- Node.js
- npm (Node Package Manager)
- FreshSales CRM account and API key

## Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```
   cd freshsales-crm-crud
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add the following environment variables:
   ```
   PORT=3000
   FRESHWORKS_BUNDLE_ALIAS=<your-freshworks-bundle-alias>
   API_KEY=<your-freshsales-api-key>
   ```

## Usage

1. Start the server:

   ```
   node app.js
   ```

2. The server will start running on `http://localhost:3000` (or the port specified in your .env file).

3. Use the following endpoints to interact with the FreshSales CRM:

   - Create Contact: `POST /createContact`
   - Get Contact: `GET /getContact`
   - Update Contact: `POST /updateContact`
   - Delete Contact: `DELETE /deleteContact`

## API Endpoints

### Create Contact

- **URL**: `/createContact`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "first_name": "string",
    "last_name": "string",
    "email": "string",
    "mobile_number": "string"
  }
  ```

### Get Contact

- **URL**: `/getContact`
- **Method**: `GET`
- **Body**:
  ```json
  {
    "contact_id": "string"
  }
  ```

### Update Contact

- **URL**: `/updateContact`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "contact_id": "string",
    "email": "string",
    "mobile_number": "string"
  }
  ```

### Delete Contact

- **URL**: `/deleteContact`
- **Method**: `DELETE`
- **Body**:
  ```json
  {
    "contact_id": "string"
  }
  ```

## Project Structure

```
.
├── README.md
├── app.js
├── handlerFunctions
│   ├── createContact.js
│   ├── deleteContact.js
│   ├── getContact.js
│   └── updateContact.js
├── package-lock.json
├── package.json
└── project freshworks CRM.postman_collection.json
```

## Notes

- This implementation only includes the CRM part of the CRUD operations.
- The bonus part (MySQL database operations) has not been implemented.
- Make sure to keep your API key confidential and not expose it in your code or version control system.

## Testing

A Postman collection (`project freshworks CRM.postman_collection.json`) is included in the project for testing the API endpoints.
