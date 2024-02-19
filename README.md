# Soft Timer
A timer that won't set off a loud alarm like Google's. The screen changes color when the time is reached. This timer might be nice when you don't want to make noise or if your hands are busy.

I wrote this project to solve this niche issue I was having. It was also nice practice going through the development process of starting up the app, getting the code working, tweaking the frontend flow and design of the app, and deploying it on netlify. I haven't done that much coding in my free time so it was nice getting that practice.

From a coding perspective, it was annoying messing with the DateTime library in JavaScript functions and the timing functions. For the timing function, I used a `useEffect` function that loaded a `setInterval` function that would increment the timer's second. I tried updating the timer by the millisecond but that was way too slow. It would take like 10 seconds to increment the timer by a second.

## Tech Stack
NextJS, TypeScript / JavaScript, and Tailwind CSS

# Deployment

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
