## Build an analytics dashboard with React

For this project, we have developed a new user profile page retrieving data from the back-end.

## Setup

  Clone git: https://github.com/Sharkoux/Projet-12.git
  
  
## How to launch application locally?

  Back-end:
   cd back-end
   npm install
   npm start
  
  Front-end: 
   cd front-end
   cd sportsee
   npm install
   npm start
  
## Back-end UserId and endpoint: 
Current UserId: 12 / 18

This project includes four endpoints that you will be able to use:

http://localhost:3100/user/${userId} - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
http://localhost:3100/user/${userId}/activity - retrieves a user's activity day by day with kilograms and calories.
http://localhost:3100/user/${userId}/average-sessions - retrieves the average sessions of a user per day. The week starts on Monday.
http://localhost:3100/user/${userId}/performance - retrieves a user's performance (energy, endurance, etc.).
Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.

Examples of queries
http://localhost:3100/user/12/performance - Retrieves the performance of the user with id 12
http://localhost:3100/user/18 - Retrieves user 18's main information.


## Front-end url :

http://localhost:3100/user/${userId} 

