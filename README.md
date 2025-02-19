# E-Waste Management E-Commerce Website

## Overview
This project aims to create an e-commerce platform for buying and selling electronic waste (e-waste). Users can register, list their e-waste items, and purchase recycled electronics. The website promotes environmental sustainability by encouraging responsible disposal and recycling of electronic devices.

## Features
- User registration and login
- Product listing and search
- Secure payment gateway integration
- Order history and tracking
- Seller dashboard for managing listings and orders

## Prerequisites
- Node.js and npm installed
- Firebase (for storing user data and product information)
- Stripe API key (for payment processing)

## Installation
1. Clone this repository:
   ```
   git clone https://github.com/Puru-G/e-waste-ecommerce.git
   cd e-waste-ecommerce
   ```

2. Install dependencies:
   ```
   npm init
   npm i firebase express.js bcrypt nodemon dotenv stripe
   ```

3. Set up your Firebase connection in `server.js`.

4. Add your Stripe API key in `.env`.

## Usage
1. Start the server:
   ```
   npm start
   ```

2. Open the website in your browser:
   ```
   http://localhost:3000
   ```

3. Register or log in.

4. Browse e-waste listings, add items to your cart, and proceed to checkout.

## Security Considerations
- Implement proper authentication and authorization.
- Validate user input to prevent security vulnerabilities.
- Use HTTPS for production deployment.
- Regularly update dependencies.

