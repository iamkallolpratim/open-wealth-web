
# OpenWealth Application

## Table of Contents
- [Introduction](#introduction)
- [Assumptions](#assumptions)
- [Instructions](#instructions)
  - [Prerequisites](#prerequisites)
  - [Running the Application](#running-the-application)
  - [Running Tests](#running-tests)
- [Design Choices](#design-choices)

## Introduction
OpenWealth is a web application designed to help users manage and track their financial assets, view their portfolio summary, and perform actions such as adding assets, making deposits, and checking real-time price changes.

The application supports multiple languages, including English and Spanish, using i18n for internationalization.

---

## Assumptions
- The user is familiar with Node.js and npm.
- The application assumes a basic understanding of financial assets and portfolio management.
- The app will use static data for assets and portfolio summaries unless connected to a backend API.
- The i18n file has been implemented for both English and Spanish localization.
  
---

## Instructions

### Prerequisites
- Node.js (version 14.x or higher)
- npm (version 6.x or higher)

### Running the Application
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/username/openwealth.git
   cd openwealth
   ```

2. **Install Dependencies:**
   Install the necessary dependencies by running:
   ```bash
   pnpm install
   ```

3. **Run the Application:**
   To start the application in development mode, run:
   ```bash
   pnpm run dev
   ```

4. **View in Browser:**
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```



---

## Design Choices

### 1. **Internationalization (i18n)**
   The application includes multi-language support for English and Spanish using the i18n framework. This decision allows the application to scale and support users in different regions. All strings used in the application are managed in a separate `i18n` file for ease of maintenance and localization.

### 2. **Component-Based Architecture**
   The application uses a component-based architecture with React. Each UI element such as `Asset`, `PortfolioSummary`, `Dashboard`, etc., is encapsulated into individual reusable components. This allows for better organization, reusability, and maintainability.

### 3. **Responsive Design**
   The design was made with responsiveness in mind, ensuring the application looks good on both desktop and mobile devices. Flexbox and CSS Grid were used for layout structure.

### 4. **Asset Management**
   The application assumes a simplistic model for managing assets where the user can:
   - View all assets with details like price, 24h change, and holdings.
   - Add new assets to their portfolio.
   - See overall portfolio summaries such as total value and the number of assets.
   This structure was chosen to make it intuitive and easy for users to track their assets without overwhelming them with too much data.

### 5. **State Management**
   For now, the application uses React’s built-in state management (useState, useEffect) for managing state across components. If the application grows in complexity, a global state management tool like Redux can be integrated.

---

## License
MIT License



