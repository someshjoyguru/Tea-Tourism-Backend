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