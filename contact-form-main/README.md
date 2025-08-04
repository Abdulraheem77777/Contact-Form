# Frontend Mentor | Contact Form

The form includes validation for required fields, email format, radio button selection, and a consent checkbox before submission. It features error messages, a success message toast, and responsive design with media queries for mobile and desktop screens.

Live Demo https://todoapp757.netlify.app

![Project Screenshot](./preview.jpg)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Built With](#built-with)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Accessibility](#accessibility)
- [Contributing](#contributing)
- [Acknowledgments](#acknowledgments)
- [Live Demo](#live-demo)

---

## Overview

This project is a **Contact Form** built following a [Frontend Mentor challenge](https://www.frontendmentor.io/challenges/contact-form-NqpKt39at) to practice building accessible and user-friendly forms using semantic HTML, CSS, and JavaScript.

## Features

- Semantic and accessible HTML form markup
- Client-side form validation using JavaScript:
  - Required fields validation for First Name, Last Name, Email, Message
  - Email format validation using regex
  - Radio button group validation for query type
  - Consent checkbox required before submission
- Real-time error message display next to inputs
- Success message toast on valid submission
- Responsive design with mobile-first approach and media queries
- Custom styled radio buttons and checkboxes
- Keyboard navigable and screen-reader friendly

---

## Built With

- HTML5
- CSS3 (including custom styles and media queries)
- JavaScript (ES6+ classes and event handling)
- Google Fonts ([Belleza](https://fonts.google.com/specimen/Belleza) and others)
- Assets: SVG icons for success and checkboxes

---

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Code editor (VS Code recommended)

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git

   ```

2. Open index.html in your browser to view the form.

Usage
Fill in the First Name, Last Name, Email, select a Query Type (General Enquiry or Support Request), write your message, and check the consent box.

If any validation fails, an error message will appear next to the relevant input.

On successful submission, a toast success message will display for 5 seconds.

The form resets after submission and focuses on the First Name field.

Accessibility
Proper semantic elements (<form>, <fieldset>, <legend>, <label>) used.

Focus styles applied to inputs and buttons for keyboard navigation.

Error messages and success messages are clearly visible.

Inputs and interactive elements have accessible labels.

The design and code aim to be screen-reader friendly.

Contributing
Contributions, issues, and feature requests are welcome!

Feel free to fork the project and submit pull requests.

📌 Acknowledgments
Thanks to Frontend Mentor for the challenge and design inspiration.

Google Fonts for beautiful typography.

SVG icons sourced from Frontend Mentor assets.
