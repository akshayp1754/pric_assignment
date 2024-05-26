
# Pric assignment


- [Hostes Link](http://ec2-13-127-93-250.ap-south-1.compute.amazonaws.com)

- [Demo Video Link](https://drive.google.com/file/d/1izZkvciWDzykGbzO_hUS4G1Ed_JPPzVM/view?usp=drive_link)


## Requirements
- Docker
- Node.js
- Firebase-tools


## Getting Started

### 1.Clone the Repository

- `git clone https://github.com/akshayp1754/pric_assignment.git`

- `cd pric_assignment`

- `npm install` or `npm i`
- `npm start`

#### Docker
- Install Docker, signup or login to docker 
- pull docker image : `docker pull akshayp1754/pric_assignment`
 - Build Image : `docker build -t  akshayp1754/pric_assignment .`

 - Run container :   `docker run -d -p 80:3000 --name pric akshayp1754/pric_assignment:latest`

 

### 2.Set up Firebase

- You'll need to set up a Firebase project and obtain your Firebase configuration.

- checkout doc https://firebase.google.com/docs/firestore

### local 
- open new terminal
 
 - type command : `cd backend`
 - build and run locally : `npm run emulator`

 - build and deploy on firebase : `npm run deploy`




## API Documentation

### Base URL
The base URL for the API endpoints is `https://asia-south1-pric-bd032.cloudfunctions.net`

### Endpoints
#### 1. Create User

Endpoint: POST /userApi-addUser

Description: Create a new user.

Request Body:
```
 {
  "name": "test user",
  "email": "test.user@example.com",
  "password": *****
} 
```


 #### 2. Get All Users

 Endpoint: GET /userApi-getUsers

Description: Get all users.

Response:

Status Code: "200 OK"
Body:
```
[
  {
    "id": "151xahxbhavxhba",
    "name": "test user",
    "email": "test.user@example.com",
    "password": *****
  },
  {
    "id": "sa3262sd",
    "name": "test user 2",
    "email": "test.user2@example.com",
    "mobile": "951551212",
    "password": *****
  }
]
```

#### 3.Update User
Endpoint: PATCH /userApi-updateUser

Description: Update a user by ID.

Request Body:
```
{
  "id":"userId"
  "name": "Updated Name",
  "email": "update email",
  "mobile":"updated mobile",
  "password": "******"
}
```
#### 4.Delete User
Endpoint: DELETE /userApi-deleteUser/?userId=${userId}

Description: Delete a user by ID.
