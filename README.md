# vega-backend

A simple chat app using `express`, `socket.io`, `typescript`, `docker` and `tdd`.

## Getting Started

To get started with this project you will need to create a `.env` file in the root directory of the project and define the following three env variables.

```text
PORT=
POSTGRES_LOCALHOST_URI=
POSTGRES_URI=
```

- The `PORT` variable tells the app on which port to run.
- The `POSTGRES_LOCALHOST_URI` variable is used by the `db:init` script to create the database tables of the project.
- The `POSTGRES_URI` variable is used to connect to the db when the project is running.

### Development with Docker

#### 1. Configure the project

Before running this project using docker, you will also need to create a `.docker-compose.env` file defining the following variables

```text
POSTGRES_PASSWORD=<your-pg-user>
POSTGRES_USER=<your-pg-password>
```

Then in your `.env` file, `PORT`, `POSTGRES_LOCALHOST_URI` and `POSTGRES_URI` variables will be equal to:

```text
PORT=3000
POSTGRES_LOCALHOST_URI='postgres://<your-pg-user>:<your-pg-password>@localhost:5000'
POSTGRES_URI='postgres://<your-pg-user>:<your-pg-password>@postgres-database:5432'
```

Remember to replace `<your-pg-user>` and `<your-pg-password>` with your actual postgres user and password.

#### 2. Start the project

Once defined all the above variables simply run the command `docker-compose up` to start the app and the postgres database.

If it is the first time running the project, you will also need to run the command `npm run db:init` to create all the database tables needed to run the project correctly.

Every time a change is made to one of the files, the project will automatically restart as a volume is defined to link the docker container with your project folder.
