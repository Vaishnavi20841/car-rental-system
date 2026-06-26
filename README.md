# 🚗 Car Rental System

A full-stack Car Rental Management System that allows users to browse available cars, book rentals, make secure online payments, and manage bookings. The project also includes an admin panel for managing cars and customer bookings.

## Features

### User

* User Registration & Login
* Browse Available Cars
* View Car Details
* Book Cars
* Secure Stripe Test Payment Integration
* View Booking History

### Admin

* Add New Cars
* Manage Cars
* View Customer Bookings
* Update Vehicle Availability

## Tech Stack

**Frontend**

* React.js
* Vite
* Tailwind CSS
* Axios
* React Router

**Backend**

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Stripe Payment Gateway

## Project Structure

```
Car-Rental/
│── frontend/
│── backend/
│── admin/
```

## Installation

### Clone Repository

```bash
git clone https://github.com/Vaishnavi20841/car-rental-system.git
```

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Admin

```bash
cd admin
npm install
npm run dev
```

## Environment Variables

Create a `.env` file inside the `backend` folder and add:

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
FRONTEND_URL=http://localhost:5173
```

## Screenshots

Add screenshots of:

* Home Page
* Car Listing
* Car Details
* Booking Page
* Payment Page
* Admin Dashboard

## Future Improvements

* Email Notifications
* Booking Cancellation
* Car Availability Calendar
* User Profile Management

## Author

**Vaishnavi Pawar**

GitHub: https://github.com/Vaishnavi20841
