#### IOET DIRECTORY:
* Workshop to learn about Angular. Includes MongoDB, Mongoose, Node.js, Express.js, mLab, Docker.
* Its a simple application to search information about ioet employees.

#### Tested on:
* Lubuntu 17.10
* Angular CLI: 1.7.1
* Node: 8.9.4
* Angular: 5.2.6

#### Cloning the repository:
* Run `git clone https://github.com/Boscoand/ioet_directory`
* Run `npm install`
* Create MongoDB called "ioet_directory"
* Create Collections called "staff"
* Add data to "staff" collection
* Run `npm start`

#### Also can be executed with Docker:
* Run `docker run -p 4000:3000 boscoand/ioet_directory:part2`

#### To Do:
##### Part 1: 
- [ ] Show "reports to" and "direct reports" of a selected employee. 
- [ ] Show employee detail in popup.
- [ ] Services by add, update, and delete employees.
- [ ] Interface by add, update, and delete employees.
##### Part 2: 
- [ ] Add mongo database in other Docker container.

