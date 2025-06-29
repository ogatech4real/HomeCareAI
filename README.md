# CarePal Health Companion

Your intelligent, caring health partner designed to make wellness simple, accessible, and personal.

---

## Table of Contents

* [Inspiration](#inspiration)
* [Features](#features)
* [How It Works](#how-it-works)
* [Technology Stack](#technology-stack)
* [Challenges Encountered](#challenges-encountered)
* [Accomplishments](#accomplishments)
* [Lessons Learned](#lessons-learned)
* [What's Next](#whats-next)
* [Installation & Deployment](#installation--deployment)
* [Screenshots](#screenshots)
* [Author](#author)
* [License](#license)

---

## Inspiration

The inspiration for **HomeCare AI**, branded as **CarePal Health Companion**, came from witnessing the daily health struggles of seniors and individuals managing chronic conditions like hypertension, diabetes, and heart diseases. Many face isolation, forget medications, or delay seeking help during emergencies.

The mission was to build a compassionate digital assistant that blends healthcare support, real-time communication, and AI-powered emotional engagement—especially for people living alone or away from their caregivers.

With an ageing global population, improving proactive care and making health management more accessible is essential.

---

## Features

* 💬 AI-powered health conversations with GPT-4 integration
* 💊 Medication tracking with reminders and caregiver alerts
* 📊 Health vitals monitoring with abnormal reading detection
* 🚨 Emergency contact management with voice-triggered alerts
* 🤖 Secure chat system connecting users, caregivers, doctors, and communities
* 🎤 Voice-first interaction with both speech recognition and realistic text-to-speech
* 🌐 Offline functionality with hybrid storage (local & MongoDB cloud sync)
* 📱 Fully responsive, mobile-first PWA with installable features
* 🎯 Personalized, senior-friendly design focused on emotional support
* 🔒 Privacy-first architecture with encrypted local storage

---

## How It Works

Users install **CarePal** as a Progressive Web App (PWA) on their device. Once onboarded, they can:

* Track medications, receive reminders, and mark doses as taken
* Record vital signs like blood pressure, glucose, heart rate, and more
* Get alerts for abnormal readings with emergency contact notifications
* Chat with caregivers, doctors, community groups, or CarePal AI
* Use voice commands for hands-free interaction
* Receive personalized encouragement and AI-powered health support
* Sync data to the cloud with MongoDB or use offline with local storage

---

## Technology Stack

* **Frontend**: React, TypeScript, Vite, TailwindCSS
* **PWA Features**: Vite PWA Plugin (offline support, install prompts)
* **Database**: MongoDB Atlas (Cloud) + LocalStorage fallback
* **AI Integration**: OpenAI GPT-4 for contextual health conversations
* **Speech Technologies**:

  * Web Speech API for speech recognition
  * ElevenLabs TTS (planned post-hackathon)
* **Real-time Communication**: Socket.io for chat and messaging
* **Authentication**: JWT tokens with refresh token flow, email verification, password resets
* **Hosting**: Netlify

---

## Challenges Encountered

* 🔐 Secure, scalable user authentication with email verification
* 🌐 Voice integration required extensive tuning for accessibility and accuracy
* 🛠️ Ensuring reliable offline PWA functionality and background sync
* 🤖 Building AI that provides contextual, empathetic responses while maintaining privacy
* ⚙️ Email configuration for domain-based communication via `admin@homecareai.me`

---

## Accomplishments

* ✅ Delivered a functional, installable PWA for health support
* ✅ Integrated intelligent AI chat with real-time context handling
* ✅ Enabled secure, role-based chat system (caregivers, doctors, community)
* ✅ Seamlessly merged cloud and local storage for reliability
* ✅ Designed for seniors with accessibility, large buttons, and simple navigation
* ✅ Implemented emergency voice commands and caregiver alerts

---

## Lessons Learned

* Empathy-driven design is crucial, especially for seniors and vulnerable users
* Privacy-first development protects sensitive health data
* PWA technology can bridge accessibility gaps for health apps
* AI is impactful but must be aligned with real human needs
* Robust fallback systems (offline mode, local storage) are essential for reliability

---

## What's Next

* 📱 Wrap with **Capacitor** for native Android/iOS app deployment
* 🌍 Enhance community features for peer support groups
* 🗣️ Finalize ElevenLabs high-quality TTS for natural AI speech
* 💡 Improve AI with deeper health knowledge for triage and guidance
* 🔒 Implement advanced security (2FA, encrypted storage)
* 🚀 Prepare for pilot programs with care providers and senior homes

---

## Installation & Deployment

1. Clone this repository:

   ```bash
   git clone https://github.com/ogatech4real/HomeCareAI.git
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Configure environment variables:

   * `VITE_MONGODB_URI`
   * `VITE_OPENAI_API_KEY`
   * `VITE_ELEVENLABS_API_KEY` (optional)
4. Run the development server:

   ```bash
   npm run dev
   ```
5. Build for production:

   ```bash
   npm run build
   ```
6. Deploy to Netlify or preferred hosting provider.

---

## Screenshots

![CarePal Dashboard](screenshots/dashboard.png)

---

## Author

**Adewale Ogabi**
👤 Health-Tech Enthusiast & AI Developer
📧 [ogabi.adewale@gmail.com](mailto:ogabi.adewale@gmail.com)
🔗 [LinkedIn Profile](https://www.linkedin.com/in/ogabiadewale/)
🌍 [HomeCare AI](https://homecareai.me)

---

## License

This project is licensed under the [MIT License](LICENSE).

---

CarePal — Your intelligent, compassionate health companion.
