# Polling System API
Establish and administer a poll, engaging participants to contribute their votes and insights.

- Create Question:-
    - User can create question
 
- Add Option on Question to vote:-
    - User can add option to their question.
    - A question can’t be deleted if one of it’s options has votes

- Delete Question:-
    - User can delete the question
    - A question can’t be deleted if one of it’s options has votes

- Get Question:-
    - User can get the question from database

- Delete Option:-
    - User can delete the option
    - An option can’t be deleted if even one vote is given to it.

- Add vote to Option:-
    - User can add vote to options

- Mongodb database:-
    - All the response data is saved in mongodb database using mongoose

## Description 
  A greate project which is use to create question and submit their votes to the question by giving valuable insights on the quetion.
  
## Tech stack used
  MongoDB is used for database, nodejs express as a server and javacript for coding.
  
# How to setup the project on local system
  1. Clone this project
  2. Start by installing npm if you don't have it already.
  3. Navigate to Project Directory by : Using
  ```
  cd Polling-System-Api
  
  ```
  
  After reaching to the this preoject directory yo have to run this following command :
  ```
  $ npm install
  $ node index.js 
  ```
  
  ## Directory Structure
  ```bash
    .
  ├── src
  │    └── config
  │          ├ <!--Database connection to mongodb--!>
  │    └── feature
  │          └── option
  │                └── controller
  │                └── models
  │                └── routes
  │          └── question
  │                └── controller
  │                └── models
  │                └── routes
  │
  │── .env
  │── .gitignore
  │── index.js
  └── package.json
```
&#xa0;

<a href="#top">Back to top</a>
