# 🚚 FleetDash - Real-Time Fleet Telemetry Dashboard

FleetDash is a high-performance MERN Stack application designed for real-time vehicle tracking, fleet monitoring, geofence alerts, and telemetry data visualization.

The system handles high-frequency vehicle location updates using event-driven architecture and provides a smooth live dashboard experience.

---

## 📌 Project Overview

Logistics companies manage thousands of vehicles every day. Traditional tracking systems struggle with large volumes of real-time GPS updates.

FleetDash solves this by using:

- Real-time WebSocket communication
- Optimized telemetry data processing
- MongoDB Bucket Pattern storage
- Live map visualization
- Geofence monitoring
- Event-driven backend processing

---

## ✨ Features

### 🚛 Fleet Tracking

- Live vehicle location monitoring
- Vehicle status updates
- Driver and trip information
- Active / inactive vehicle tracking


### 🗺 Real-Time Map Dashboard

- Live moving vehicle markers
- High-performance rendering
- Optimized map updates


### 🚨 Geofence Alerts

- Create location boundaries
- Detect vehicle zone breaches
- Instant alert notifications


### 📊 Analytics Dashboard

- Total vehicles
- Active vehicles
- Alerts count
- Performance reports


### 🔐 Authentication

- JWT based authentication
- Secure API access


---

# 🛠 Tech Stack

## Frontend

- React JS
- Vite
- Material UI
- React Router
- Leaflet Map
- Socket.io Client
- Framer Motion
- Recharts
- Zustand
- Axios


## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.io
- Redis Pub/Sub
- Worker Threads
- JWT Authentication
- Turf.js


---

# 📁 Project Structure


```
FleetDash/

├── Frontend/
│
│── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Sidebar.jsx
│   │   │   └── Navbar.jsx
│   │   │
│   │   ├── dashboard/
│   │   │   ├── StatsCard.jsx
│   │   │   ├── AlertPanel.jsx
│   │   │   └── VehicleTable.jsx
│   │   │
│   │   └── map/
│   │       ├── LiveMap.jsx
│   │       └── VehicleMarker.jsx
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Tracking.jsx
│   │   ├── Vehicles.jsx
│   │   ├── Alerts.jsx
│   │   └── Analytics.jsx
│   │
│   ├── hooks/
│   ├── services/
│   ├── store/
│   │
│   ├── App.jsx
│   └── main.jsx
│
│
├── Backend/
│
│── src/
│   ├── config/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── socket/
│   ├── workers/
│   └── server.js
│
└── README.md
```

---

# ⚙️ Installation

Clone repository

```bash
git clone <repository-url>
```

---

## Frontend Setup

```bash
cd Frontend

npm install

npm run dev
```

Frontend running:

```
http://localhost:5173
```

---

## Backend Setup


```bash
cd Backend

npm install

npm run dev
```

Backend running:

```
http://localhost:5000
```


---

# 🔑 Environment Variables

Create `.env` file inside Backend folder


```env
PORT=5000

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_secret_key

CLIENT_URL=http://localhost:5173
```


---

# 📡 Real-Time Architecture


```
Vehicle GPS

     ↓

Node.js Ingestion Engine

     ↓

Worker Threads

     ↓

MongoDB + Redis

     ↓

Socket.io

     ↓

React Live Dashboard
```


---

# Future Improvements

- AI based route prediction
- Driver behavior analytics
- Mobile application
- Fuel optimization
- Advanced reports


---

# Author

Developed by  


MERN Stack Developer 🚀