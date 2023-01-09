# Project-3-Backend

## Description 
This project is the backend of a MERN Stack project Whatsapp clone that me and my partner has worked together on. 
Essentially what I created was a database and website so my partner could fetch the data as a API call. 

## How to use 

To use this website you would need to install the following dependencies.
Once you cloned this repository and open it in your respected framework you would need to install the dependencies we have used in this project. 

you can follow along with these commands 

- npm init -y 
- npm i express
- npm i mongodb
- npm i mongoose
- npm i node 
- npm i nodemon 
- npm i dotenv
- npm i cors 
- npm i morgan 

## Technologies 
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

## Database Models and ERD 

<img width="1246" alt="Screenshot 2023-01-09 at 2 14 11 PM" src="https://user-images.githubusercontent.com/105845188/211419125-06af194d-5fd2-4efa-95c6-c904f740581f.png">

I have set up the data base to have 3 objects. User, Chats, Message  

User and Message is One User can have Many Messages 
One to Many relationship

User and Chat is Many Users can have Many Messages 
Many to Many relationship

Chat and Message is One Chat can have Many Messages 
One to Many relationship 

