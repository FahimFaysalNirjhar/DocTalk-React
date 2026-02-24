# 🏥 Medical Appointment Booking Application

A **React-based Medical Appointment Booking Web Application** that
allows users to explore doctors, view details, book appointments, manage
bookings, and visualize appointment fees with interactive charts.

The application focuses on **modern UI/UX, routing, state persistence,
and data visualization** while ensuring responsiveness and smooth user
experience.

---

## 🚀 Features Overview

### 🔝 Navbar

Visible on all pages (including error routes)

Includes: - Website Logo & Name - 4 Navigation Menus - Call-to-Action
Button

---

### 🔚 Footer

Visible on all pages **except error routes**

Includes: - Centered Logo - Navigation Menus - 3 Social Media Icons
(developer profiles)

---

## 🏠 Homepage

### ➤ Banner Section

- Gradient background with border
- Center aligned heading & description
- Two positioned images

### ➤ Doctors Section

- Displays **6 doctors** initially in a **3×2 grid**
- "Show All" button loads all **12 doctors**

Each doctor card contains: - Doctor Image - Name - Education -
Speciality - Experience - Registration Number - View Details Button

---

### ➤ Success Section

Displays **4 statistic cards** with: - Icon - Animated Number
(react-countup) - Title

---

## 👨‍⚕️ Doctor Details Page

Includes: - Doctor Profile Info - Availability Section - Appointment
Booking Card

### Book Now Behavior

- ✅ If not booked → create appointment, show success toast, redirect
  to booking page
- ❌ If already booked → show error toast

---

## 📅 Bookings Page

Displays all booked appointments in **single-column layout**

Each card contains: - Doctor Name - Fee - Education - Speciality -
Cancel Appointment Button

Features: - Persistent data using **localStorage** - Cancel removes
appointment - If empty → show message + button to Homepage

---

## 📊 Recharts Integration

- Appointment fees visualized using **Recharts**
- Chart updates automatically after canceling appointments
- Chart hidden when no data exists

---

## 📝 Blogs Page

Includes answers for:

1.  What is `useState` and how does it work?
2.  Purpose of `useEffect`
3.  Custom hooks in React
4.  Controlled vs uncontrolled components
5.  `useFormStatus()` explanation

---

## ❌ Error Page

Shown for: - Invalid routes - Invalid dynamic routes

Features: - Navbar visible - Footer hidden - Button to return Homepage

---

## ✨ Additional Features

✅ Loading spinner on route change\
✅ Fallback loader during data fetch\
✅ Dynamic page titles using `useLocation()`\
✅ App reload safe (no crash)\
✅ Responsive design\
✅ Toast notifications\
✅ Availability validation (optional)

---

## 🛠️ Technologies Used

- React.js
- React Router DOM
- Tailwind CSS
- React CountUp
- Recharts
- LocalStorage
- React Icons
- React Toastify

---

## 📂 Folder Structure

    src/
    │── components/
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   ├── DoctorCard.jsx
    │   ├── Loader.jsx
    │
    │── pages/
    │   ├── Home.jsx
    │   ├── DoctorDetails.jsx
    │   ├── Bookings.jsx
    │   ├── Blogs.jsx
    │   ├── ErrorPage.jsx
    │
    │── routes/
    │   ├── Router.jsx
    │
    │── hooks/
    │   ├── useLocalStorage.js
    │
    │── data/
    │   ├── doctors.json
    │
    │── App.jsx
    │── main.jsx

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/medical-appointment-app.git
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run Development Server

```bash
npm run dev
```

---

## 🔥 Key Functional Requirements

✔ Doctor Listing & Details\
✔ Appointment Booking Logic\
✔ Duplicate Booking Prevention\
✔ LocalStorage Persistence\
✔ Cancel Appointment\
✔ Dynamic Routing\
✔ Error Handling\
✔ Charts Visualization\
✔ Animated Counters\
✔ Responsive Layout

---

## 🌍 Deployment

You can deploy using:

- Vercel
- Netlify
- Surge

---

## 👨‍💻 Developer Info

**Name:** Fahim Faysal Nirjhar
**GitHub:** https://github.com/FahimFaysalNirjhar

---

## 📜 License

This project is created for educational purposes.

---

⭐ If you like this project, give it a star!
