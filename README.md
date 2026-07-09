# 🚚 FleetDash — Real-Time Fleet Telemetry Dashboard

[![MERN Stack](https://img.shields.io/badge/Stack-MERN-informational)]()
[![License](https://img.shields.io/badge/License-MIT-green)]()
[![Status](https://img.shields.io/badge/Status-Active-brightgreen)]()

**FleetDash** is a high-performance, real-time fleet management platform built on the MERN stack. It enables logistics operators to monitor vehicle location, driver activity, and geofence compliance at scale — with an event-driven backend architecture designed to handle high-frequency GPS telemetry without sacrificing responsiveness.

---

## 📌 Overview

Logistics companies manage thousands of vehicles simultaneously, and conventional tracking systems often struggle under the volume and frequency of real-time GPS updates.

FleetDash addresses this by combining:

- **Real-time WebSocket communication** for instant data delivery
- **Optimized telemetry ingestion** using worker threads to offload processing
- **MongoDB Bucket Pattern storage** for efficient time-series data handling
- **Live map visualization** with minimal render overhead
- **Geofence monitoring** with instant breach detection
- **Event-driven backend processing** for horizontal scalability

---

## ✨ Key Features

### 🚛 Fleet Tracking
- Live vehicle location monitoring
- Real-time vehicle status updates
- Driver and trip metadata
- Active / inactive vehicle segmentation

### 🗺️ Real-Time Map Dashboard
- Live, smoothly animated vehicle markers
- High-performance rendering optimized for large fleets
- Efficient incremental map updates (no full re-renders)

### 🚨 Geofence Alerts
- Define custom geographic boundaries
- Automatic zone-breach detection
- Instant push notifications on violation

### 📊 Analytics Dashboard
- Fleet-wide vehicle counts
- Active vehicle metrics
- Alert history and trends
- Exportable performance reports

### 🔐 Authentication & Security
- JWT-based authentication
- Secured, role-aware API access

---

## 🛠 Tech Stack

| Layer        | Technologies |
|--------------|--------------|
| **Frontend** | React, Vite, Material UI, React Router, Leaflet, Socket.io Client, Framer Motion, Recharts, Zustand, Axios |
| **Backend**  | Node.js, Express.js, MongoDB, Mongoose, Socket.io, Redis Pub/Sub, Worker Threads, JWT, Turf.js |

---

## 📁 Project Structure

```
FleetDash/
├── Frontend/
│   └── src/
│       ├── assets/
│       ├── components/
│       │   ├── layout/       # Sidebar, Navbar
│       │   ├── dashboard/    # StatsCard, AlertPanel, VehicleTable
│       │   └── map/          # LiveMap, VehicleMarker
│       ├── pages/            # Dashboard, Tracking, Vehicles, Alerts, Analytics
│       ├── hooks/
│       ├── services/
│       ├── store/
│       ├── App.jsx
│       └── main.jsx
│
├── Backend/
│   └── src/
│       ├── config/
│       ├── models/
│       ├── controllers/
│       ├── routes/
│       ├── middleware/
│       ├── socket/
│       ├── workers/
│       └── server.js
│
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB instance (local or Atlas)
- Redis instance

### Clone the Repository
```bash
git clone <repository-url>
cd FleetDash
```

### Frontend Setup
```bash
cd Frontend
npm install
npm run dev
```
Frontend available at: **http://localhost:5173**

### Backend Setup
```bash
cd Backend
npm install
npm run dev
```
Backend available at: **http://localhost:5000**

---

## 🔑 Environment Variables

Create a `.env` file inside the `Backend/` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
```

> ⚠️ Never commit your `.env` file. Add it to `.gitignore` and use a `.env.example` template for collaborators.

---

## 📡 Real-Time Data Architecture

```
Vehicle GPS
     │
     ▼
Node.js Ingestion Engine
     │
     ▼
Worker Threads (parallel processing)
     │
     ▼
MongoDB (persistence) + Redis (pub/sub)
     │
     ▼
Socket.io (real-time broadcast)
     │
     ▼
React Live Dashboard
```

This pipeline ensures GPS updates are ingested, validated, and distributed to connected clients with minimal latency, even under high-throughput conditions.

---

## 🗺 Roadmap

- [ ] AI-based route prediction
- [ ] Driver behavior analytics
- [ ] Mobile application
- [ ] Fuel optimization insights
- [ ] Advanced reporting suite

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to open an issue or submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👤 Author
MERN Stack Developer 🚀
