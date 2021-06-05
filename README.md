![Cover](https://github.com/diegovinci/project-sds3/blob/main/frontend/src/assets/img/project-cover.png)

![Languages](https://img.shields.io/github/languages/count/diegovinci/dsvendas?color=%23FF851D)
![Top Language](https://img.shields.io/github/languages/top/diegovinci/dsvendas?color=%23FF851D)
![Repository Size](https://img.shields.io/github/repo-size/diegovinci/dsvendas?color=%23FF851D)
![Made By](https://img.shields.io/badge/made%20by-diegovinci-%23FF851D)
![License](https://img.shields.io/badge/license-MIT-%23FF851D)

## About

DSVendas consists of a web API that provides sales data to a frontend application that displays reports to the end-user.

## Getting Started

### Prerequisites
In order run this project locally the following software must be installed on your machine:
  - [GIT](https://git-scm.com)
  - [Java 11](https://www.oracle.com/br/java/technologies/javase-jdk11-downloads.html)
  - [Maven](https://maven.apache.org/download.cgi)
  - [PostgreSQL](https://www.postgresql.org) or [Docker](https://www.docker.com)
  - [Node.js 14](https://nodejs.org/en/)
  - [Yarn](https://yarnpkg.com)

### Steps
Follow the steps below to set up and run the project:

#### 1. Clone this repository
```bash
$ git clone https://github.com/diegovinci/project-sds3.git
```
#### 2. Database
```bash
# Set up a PostgreSQL database
$ docker run --name sds3-postgres -e POSTGRES_PASSWORD=1234567 -p 5432:5432 -d postgres

$ docker start sds3-postgres
```

#### 3. Back-end
```bash
# Go into the backend directory
$ cd backend

# Clear target directory
$ mvn clean

# Create the fat JAR
$ mvn package

# Go into the target directory
$ cd target

# Run the fat JAR
$ java -jar dsvendas-0.0.1-SNAPSHOT.jar

```
#### 4. Front-end
```bash
# Go into the frontend directory
$ cd frontend

# Install the dependencies
$ yarn install

# Start the application
$ yarn start
```
## License
This project is under MIT license. See the [LICENSE](https://github.com/diegovinci/project-sds3/blob/main/LICENSE) file for more details.

Made by Diego Vinciguerra :wave: [Get in touch!](https://www.linkedin.com/in/diegovinci)
