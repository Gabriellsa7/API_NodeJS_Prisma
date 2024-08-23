# User and Post API

## Description

This API allows for the management of users and posts. Users can create, delete, and list posts, with each user able to create multiple posts. Each post includes a title, content, and a reference to the user who created it. Users are registered with a unique name and email address. The API is built using **Node.js**, **TypeScript**, **Prisma**, and **MySQL**.

## Features

- **User Management:**
  - **Create Users:** Register new users with a unique name and email address.
  - **Unique Email:** Ensures that each email address is unique across all users.

- **Post Management:**
  - **Create Posts:** Users can create posts with a title, content, and userId.
  - **Delete Posts:** Users can delete their posts.
  - **List Posts:** List posts by their ID, including posts from specific users.

## Technologies Used

- **Node.js:** JavaScript runtime for building server-side applications.
- **TypeScript:** Superset of JavaScript that adds static typing to the code.
- **Prisma:** ORM (Object-Relational Mapper) for interacting with the MySQL database.
- **MySQL:** Relational database for storing user and post data.

## Setup

### Prerequisites

- Node.js and npm installed
- MySQL server running
- Prisma CLI installed (`npm install -g prisma`)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Gabriellsa7/API_NodeJS_Prisma.git
