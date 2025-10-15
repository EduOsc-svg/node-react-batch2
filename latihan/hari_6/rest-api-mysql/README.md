Short instructions

1. Copy `.envExample` to `.env` in the project root.
2. Edit DB_USER, DB_PASSWORD, DB_NAME to match your MySQL credentials.
3. Install dependencies: `npm install`.
4. Start the app: `node app.js`.

Notes: Do not commit `.env` to source control. If you see an error `Access denied for user ''@'localhost'`, it means the DB_USER value is empty or not loaded. Ensure you have a `.env` with DB_USER set and that `dotenv` is installed.