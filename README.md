# Food Ordering App

## Overview
Main Features:
- view list of foods
- add food to cart
- check summary of transaction
- order food
- view transaction history
- response fetch request with static mock data

## Technologies used
Built using Next.js, typescript, @tanstack/react-query, and TailwindCSS

## Project Demo
> This project is using mock data / static api response, so it might not behave like fully integrated data as in real api response. If you add items to cart and checkout, it will fetch the data from mock api, not from client state.


Demo: https://food-ordering-swart.vercel.app/

## How to Clone & Run Locally
1. clone this repository from main branch
2. run `npm install` on project directory
3. run `npm run dev` to start dev server

## Build & Deployment
This project is Deployed to Vercel and triggered by git event (push)

To build production code, run `npm run build`