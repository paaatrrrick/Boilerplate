# World's Best Full-Stack Boilerplate 🌍

A full-stack boilerplate with Next.js (React), TypeScript, Node.js, Express, MongoDB, and TailwindCSS. Authentication, Navbars, Databases, Error Handling, Loading Screens, and project setup are already done.

You can demo this project live here -> [View Live](https://worlds-best-boilerplate.vercel.app/)

<img width="1440" alt="Screen Shot 2023-12-06 at 12 46 48 PM" src="https://github.com/paaatrrrick/Boilerplate/assets/88113528/d4bf3583-9e51-4f65-ada7-baebd19bc9dc">

### What is included?

This boilerplate aims to save you 6 hours every time you start a new project and prevents common bugs from happening.

But don't just take it from me, this website is the boilerplate. Feel free to explore.

#### Authentication:

Authentication is handled through Firebase with Google and Email Login. Adding a page to the `client/src/app/(protected)` folder makes it accessible only to logged-in users. Endpoints can be easily protected with the Authenticate middleware. A demo of this can be seen in `src/server/routes/profile.ts`.

There is Regex for email and password validation with error messages on authentication screens.

#### Navbar:

There are two Navbars (one for the homepage and one for logged-in users). It is responsive to both mobile and desktop.

#### Error Handling / Loading:

In all components, using the `useError()` and `useLoader()` context, you can add error messages and loading screens. There are three types of error messages: error, warning, and success.

### 10 Minute Setup:

**General:**
- Fork the repo
- Run `npm install` in both the client and server folders
- Create a Firebase project and add a web app with Google and Email Authentication

**Client:**
- In `firebase.ts`, add your Firebase config
- Once you have deployed your server, in constants.ts update it to your server url
- In `tailwind.config.js`, update the brandColors to the colors you want to use
- Change the `favicon.ico` and `images/logo192.png` to your own logo
- Deploy (I recommend Vercel)

**Server:**
- In .env, add your CLIENT_URL (initially http://localhost:3000)
- In .env, add your DB_URL
- In .env, add each private key from your Firebase project using the naming in `server/src/methods/firebase.ts`
  - Go to [Firebase Analytics](https://console.firebase.google.com/u/0/project), then go to Settings > Project Settings > Service Accounts > Generate New Private Key
- Deploy (I recommend Railway.app)

If you are struggling to get it running or have any questions, feel free to reach out at patrick.123.foster@gmail.com
