# BACKEND 1
# 📊 Data Plotting Server

A robust Express server designed for data collection and retrieval, seamlessly integrated with MongoDB. This server provides specialized endpoints for adding and retrieving data, making it the perfect solution for applications requiring data visualization and plotting capabilities with centralized database storage.

## 📋 Table of Contents

- [Setup](#setup)
- [Environment Variables](#environment-variables)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Usage Examples](#usage-examples)

## 🚀 Setup

1. Clone the repository and navigate to the project directory:
   ```bash
   git clone <repository-url>
   cd data-plot-server
   ```

2. Install required dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory (see [Environment Variables](#environment-variables) section)

## ⚙️ Environment Variables

| Variable   | Description                    | Required |
|------------|--------------------------------|----------|
| MONGO_URI  | MongoDB connection string      | Yes      |
| PORT       | Server port (default: 5000)    | Yes      |

Example `.env` file:
```plaintext
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

## 🎯 Getting Started

Launch the server with:
```bash
node server.js
```

The server will be accessible at `http://localhost:<PORT>` (default: `http://localhost:5000`)

## 🔌 API Endpoints

### Add Data Entry
```http
POST /data
```

**Request Body:**
```json
{
    "temperature": 23.5,
    "humidity": 60
}
```

**Required Fields:**
- `temperature` (Number): Temperature value
- `humidity` (Number): Humidity value

**Success Response** (200 OK):
```json
{
    "_id": "64c0b20f9f08c830b1341e2f",
    "timestamp": "2024-11-08T14:53:12.836Z",
    "temperature": 23.5,
    "humidity": 60,
    "__v": 0
}
```

### Retrieve Data
```http
GET /data
```

**Query Parameters:**
| Parameter   | Type              | Description                                    | Required |
|-------------|-------------------|------------------------------------------------|----------|
| start_date  | ISO 8601 string   | Start of date range (e.g., 2024-11-01T00:00:00.000Z) | No       |
| end_date    | ISO 8601 string   | End of date range (e.g., 2024-11-07T23:59:59.999Z)   | No       |

**Success Response** (200 OK):
```json
[
    {
        "_id": "64c0b20f9f08c830b1341e2f",
        "timestamp": "2024-11-01T14:53:12.836Z",
        "temperature": 23.5,
        "humidity": 60
    },
    {
        "_id": "64c0b21f9f08c830b1341e30",
        "timestamp": "2024-11-05T08:20:00.000Z",
        "temperature": 24.2,
        "humidity": 58
    }
]
```

## 🔍 Usage Examples

### Adding a New Data Entry
```bash
curl -X POST http://localhost:5000/data \
  -H "Content-Type: application/json" \
  -d '{
    "temperature": 23.5,
    "humidity": 60
  }'
```

### Retrieving Data for a Date Range
```bash
curl "http://localhost:5000/data?start_date=2024-11-01T00:00:00.000Z&end_date=2024-11-07T23:59:59.999Z"
```

## 🛠️ Development

### Prerequisites
- Node.js
- MongoDB
- npm or yarn

### Local Development
1. Set up your MongoDB database
2. Configure your environment variables
3. Install dependencies
4. Start the server

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📮 Support

For support, please open an issue in the GitHub repository or contact the development team.

# BACKEND 2

# Educational Resource Backend API

A robust backend server built with Express and MongoDB for managing educational resources. This API provides comprehensive endpoints for CRUD operations on categories and resources, with content organized into different proficiency levels (Basic, Intermediate, Advanced) to support literacy and skill development.

## 🚀 Getting Started

### Prerequisites
- MongoDB (local installation or MongoDB Atlas cluster)
- Node.js
- npm

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory
   ```bash
   MONGO_URI=your_mongodb_connection_string
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

## 📚 API Documentation

### Categories

#### Get All Categories
```http
GET /categories
```
**Response** (200 OK)
```json
[
    {
        "_id": "6488b53c028f8c16c44e4567",
        "name": "Basic English",
        "description": "Basic level English resources."
    }
]
```

#### Create Category
```http
POST /categories
```
**Request Body**
```json
{
    "name": "Basic English",
    "description": "Basic level English resources."
}
```

### Resources

#### Get All Resources
```http
GET /resources
```
**Query Parameters**
- `category` (optional): Category ID to filter resources
- `level` (optional): Level to filter resources (basic, intermediate, advanced)

#### Create Resource
```http
POST /resources
```
**Request Body**
```json
{
    "title": "Introduction to English",
    "type": "video",
    "url": "http://example.com/video1",
    "description": "Basic English introduction video",
    "category": "6488b53c028f8c16c44e4567",
    "level": "basic"
}
```

#### Get Resource by ID
```http
GET /resources/:id
```

#### Update Resource
```http
PUT /resources/:id
```
**Request Body**
```json
{
    "title": "Updated Title",
    "description": "Updated description"
}
```

#### Delete Resource
```http
DELETE /resources/:id
```

## 📋 Data Models

### Category Schema
| Field       | Type   | Required | Description           |
|-------------|--------|----------|-----------------------|
| name        | String | Yes      | Category name         |
| description | String | No       | Category description  |

### Resource Schema
| Field       | Type     | Required | Description                              |
|-------------|----------|----------|------------------------------------------|
| title       | String   | Yes      | Resource title                          |
| type        | String   | Yes      | Enum: video, document, link             |
| url         | String   | Yes      | Resource URL                            |
| description | String   | No       | Resource description                     |
| category    | ObjectId | Yes      | Reference to Category                    |
| level       | String   | Yes      | Enum: basic, intermediate, advanced     |

## 🛠️ Development

### Environment Variables

Create a `.env` file with the following variables:

```plaintext
MONGO_URI=your_mongodb_uri
```

### Example Usage

#### Creating a Category
```bash
curl -X POST http://localhost:3000/categories \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Basic English",
    "description": "Basic level English resources."
  }'
```

#### Creating a Resource
```bash
curl -X POST http://localhost:3000/resources \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Introduction to English",
    "type": "video",
    "url": "http://example.com/video1",
    "description": "Basic English introduction video",
    "category": "6488b53c028f8c16c44e4567",
    "level": "basic"
  }'
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request