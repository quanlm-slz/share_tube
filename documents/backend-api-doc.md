# Share Tube

## Description

- A simple application to allow people to share youtube video

## Key Feature

- User registration and login
- Create shares for YouTube videos
- Viewing a list of shared videos
- Notification of shared videos

## Database

### Users

| Column Name | Data Types  | Constraints          |
| ----------- | ----------- | -------------------- |
| id          | uuid        | Primary Key          |
| email       | varchar(50) | Not Null <br> Unique |
| username    | varchar(50) | Not Null <br> Unique |

### Shares

| Column Name | Data Types   | Constraints |
| ----------- | ------------ | ----------- |
| id          | uuid         | Primary Key |
| url         | varchar(300) | Not Null    |
| description | varchar(300) | Not Null    |

## Api Format

### Error Response

```json
{
  "status": 400,
  "message": "error",
  "errors": ["error message"]
}
```

### Success Response

``json
{
"status": 200,
"message": "success",
"data": "data"
}

``

### Paginated Response

```json
{
  "status": 200,
  "message": "success",
  "data": {
    "items": [],
    "pagination": {
      "current_page": 1,
      "next_page": null,
      "prev_page": null,
      "page_limit": 25,
      "total_item": 1
    }
  }
}
```

### Broadcast message

```json
{
  "indentifier": "{
    \"channel\": channel,
    \"guid\": uuid
  }",
  "message": {
    "status": "success",
    "data": "data"
  }
}
```

## End Points:

### User end points: [link](./endpoints/user-endpoints.md)

### Shares end points: [link](./endpoints/share-endpoints.md)
