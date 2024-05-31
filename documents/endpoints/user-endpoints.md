## [Back to backend doc](../backend-api-doc.md)

## End point: `GET /users/me`

### Description

- Allow user to fetch token data

### Response data:

```json
{
  "username": "username",
  "email": "email@test.com",
  "created_at": "created_at",
  "updated_at": "updated_at"
}
```

## End point: `POST /users/sign_up'

### Description

- Allow user to register into the system

### Body:

```json
{
  "user": {
    "username": "username",
    "email": "email@test.com",
    "password": "password"
  }
}
```

### Response data:

```json
{
  "username": "username",
  "email": "email@test.com",
  "created_at": "created_at",
  "updated_at": "updated_at"
}
```

## End point: `POST /users/sign_in'

### Description

- Allow user to log into the system

### Body:

```json
{
  "user": {
    "email": "email@test.com",
    "password": "password"
  }
}
```

### Response data:

```json
{
  "username": "username",
  "email": "email@test.com",
  "token": "Bearer token",
  "created_at": "created_at",
  "updated_at": "updated_at"
}
```

## End point: `DELETE /users/sign_out'

### Description

- Allow user to log out of the system

### Header

```json
{
  "Authorization": "Bearer token"
}
```

### Validation

- Only allow valid user to logout

### Response data:

```
No Content
```
