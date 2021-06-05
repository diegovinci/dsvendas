# DSVendas

![Languages](https://img.shields.io/github/languages/count/diegovinci/dsvendas?color=%23FF851D)
![Top language](https://img.shields.io/github/languages/top/diegovinci/dsvendas?color=%23FF851D)
![Made By](https://img.shields.io/badge/made%20by-diegovinci-%23FF851D)
![License](https://img.shields.io/badge/license-MIT-%23FF851D)

DSVendas is a web application built during the 3rd edition of the event Semana DevSuperior. The project consists of a web API that provides fictitious sales data to a frontend application that displays simple reports to the end-user based on this data.

![Cover](https://github.com/diegovinci/project-sds3/blob/main/.assets/project-cover.svg)

## Getting started

### Prerequisites
  - [GIT](https://git-scm.com)
  - [Java 11](https://www.oracle.com/br/java/technologies/javase-jdk11-downloads.html)
  - [Spring Boot](https://spring.io/projects/spring-boot)
  - [Maven](https://maven.apache.org/download.cgi)
  - [PostgresSQL](https://www.postgresql.org) or [Docker](https://www.docker.com)
  - [Node.js](https://github.com/nodejs)
  - [Yarn](https://yarnpkg.com)
  - [ReactJS](https://reactjs.org)

### Steps
#### 1 Clone the repository
```bash
$ git clone https://github.com/diegovinci/project-sds3.git
```
#### 2 Database
```bash
# Set up a PostgreSQL database
$ docker run --name sds3-postgres -e POSTGRES_PASSWORD=1234567 -p 5432:5432 -d postgres

$ docker start sds3-postgres
```

#### 3 Backend
```bash
# Access the backend directory
$ cd backend

# Clear target directory
$ mvn clean

# Create the fat JAR
$ mvn package

# Access the target directory
$ cd target/ 

# Run the fat JAR
$ java -jar dsvendas-0.0.1-SNAPSHOT.jar

```
#### 4 Frontend
```bash
# Access the backend directory
$ cd frontend

# Install the dependencies
$ yarn

# Start the application
$ yarn start
```
## License
This project is under MIT license. See the [LICENSE](https://github.com/diegovinci/project-sds3/blob/main/LICENSE) file for more details.
