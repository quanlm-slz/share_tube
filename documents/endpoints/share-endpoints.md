## [Back to Master](../backend-api-doc.md)

## End point `GET /shares/`

### Description:

- Allow user to get a list of youtube shares video

### Params:

```json
{
  "page": 1,
  "limit": 20
}
```

### Reponse data

```json
{
  "items": {
    {
      "url": "https:///",
      "description": "description"
    }
  }
}
```

## End point `POST /shares/`

### Description:

- Allow user to create a youtube share using url and description

### Body:

```json
{
  "share": {
    "url": "https:////",
    "description": "description"
  }
}
```

### Validation:

- Only logged in user can create a share
- Validate if url actually point to video

### Response data:

```json
{
  "url": "https:////",
  "descriptoin": "description"
}
```
