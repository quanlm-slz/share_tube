# README

## 1. Introduction:

- This is a project make to allow user to be able to share youtube video with each other
- Key features of this project includes:
  - User login/logout
  - User registration
  - Display list of share
  - Create share (only available for logged in user)

## 2. Prerequisites:

- Docker version 26.1.1

## 3. Installation and configuration:

- Step 1: Add .env for backend, the necessary fields can be copy from .env.example and configurate accordingly(**Note**: .env.example env is workable if no other configuration is made)
- Step 2: Run `docker compose build`

## 4. Database setup:

- Step 1: Navigate into backend container's bash with the command `docker compose run backend bash`
  \*\* The following steps will be performed inside backend container's bash
- Step 2: Run `EDITOR=vim rails credentials:edit`
- Step 3: Add jwt_secret_token into the file then press `:q` to close it
- Step 4: Run `rails db:create db:migrate`
- Step 5: Run `exit` to get out of bash enviroment

## 5. Running the Application:

\*\* The following steps will be performed outside backend container's bash

- Run `docker compose up` to initialize the server/client pair

## 6. Usage:

- Allow login/logout/registration functionalities and sharing youtube embedded video see [frontend document](./documents/frontend-ui-doc.md) for more information
