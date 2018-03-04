#### IOET DIRECTORY:
* Workshop to learn about Angular. Includes MongoDB, Mongoose, Node.js, Express.js, mLab, Docker.
* It's a simple application to search information about ioet employees.

#### Tested on:
* Lubuntu 17.10
* Angular CLI: 1.7.1
* Node: 8.9.4
* Angular: 5.2.6

#### Cloning the repository:
* Run `git clone https://github.com/Boscoand/ioet_directory`.
* Run `npm install`.
* Create a database in MongoDB called "ioet_directory".
* Create a collection called "staff".
* Add data to "staff" collection.
* Run `npm start`.

#### Also can be executed with Docker Container and Database in mLab:
* This option run the second part where the app works in a Docker container and the database in mLab.
* Run `docker run -p 4000:3000 boscoand/ioet_directory:part2`.

#### Also can be executed with docker-compose:
* This option run the third part that works with two containers, one for the app, and the other for the database. 
* Copy the file called `docker-compose.yml` that is in this repository. 
* After, run `docker-compose up`, in a folder that contain `docker-compose.yml`.

#### To Do:
##### Part 1: 
- [ ] Show "reports to" and "direct reports" of a selected employee. 
- [ ] Show employee detail in popup.
- [ ] Services by add, update, and delete employees.
- [ ] Interface by add, update, and delete employees.
##### Part 2: 
- [x] Add the app in a Docker container.
##### Part 3: 
- [x] Add mongo database in other Docker container.

