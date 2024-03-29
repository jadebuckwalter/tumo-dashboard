# TUMO Dashboard

This is a dashboard to create, edit, and display TUMO student profiles.

## Setup instructions
- Install [MySQL](https://dev.mysql.com/downloads/installer/) and [Node.js](https://nodejs.org/en/download).
- Clone the repository from GitHub, and navigate to the main directory of the repository in your terminal.
- Create a `.env` file in your main directory. This stores the information needed to connect to your database. Paste the following into your `.env` file, and add your information in the appropriate spaces:
```
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=tumodashboard
PORT=3000
```
- Fill the database with some example student profiles by running `mysql -u root -p < setup/setup.sql` in the terminal. Enter the password from your `.env` file when prompted.
- Install the necessary dependencies by running `npm install`.
- Run `npm run build` to run the build script.
- Run `npm run start` in one terminal window and `npm run front` in another terminal window.
- Visit `localhost:5050` in your browser.
