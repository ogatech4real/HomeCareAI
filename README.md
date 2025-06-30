# CarePal Health Companion

Your intelligent, caring health partner is designed to make wellness simple, accessible, and personal.

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

The inspiration for **HomeCare AI**, branded as CarePal Health Companion, stemmed from witnessing the daily health challenges faced by seniors and individuals managing conditions such as hypertension, diabetes, or loneliness. Many forget medications, face health emergencies alone, or lack emotional support. 

I wanted to build a compassionate, intelligent digital assistant blending healthcare support, real-time communication, and AI-powered engagement — especially for those living independently or away from caregivers.

With a rapidly ageing global population, making proactive health management accessible is not just desirable — it's essential.


---

## Features

- 💬 AI-powered health conversations (OpenAI GPT-4)
- 🎥 Real-time Tavus AI video agent (CarePal Avatar)
- 🗣️ Natural AI speech with ElevenLabs (with fallback to browser TTS)
- 🎤 Voice-first interaction with speech recognition commands
- 💊 Medication tracking with smart reminders and caregiver alerts
- 📊 Vitals monitoring (blood pressure, glucose, temperature, weight) with abnormal reading detection
- 🚨 Emergency contacts with one-tap and voice-triggered alerts
- 🤖 Secure chat with caregivers, doctors, and the CarePal community
- 🌐 Works offline with hybrid storage (local + Supabase cloud sync)
- 🎯 Accessible, senior-friendly interface with large buttons and clean design
- 🔒 Privacy-first architecture with optional user profiles
- 🩺 Emotional engagement with AI-powered support and progress tracking

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

## 🛠️ How it was built

CarePal was developed using [Bolt.new], combining AI tools, and cloud infrastructure:

| Technology       | Purpose                                |
|-----------------|-----------------------------------------|
| React + TypeScript | Frontend architecture |
| Vite + TailwindCSS | Rapid UI development |
| Vite PWA Plugin | Full PWA capabilities, offline-ready |
| Supabase | Scalable backend, user auth, cloud database |
| OpenAI GPT-4 | Conversational AI chat with context |
| Tavus AI Video | Real-time video agent integration |
| ElevenLabs | Realistic text-to-speech voice AI |
| SpeechRecognition API | Voice commands and interaction |
| Socket.io | Real-time messaging for chat and community |
| RevenueCat SDK | Subscription and monetization system *(planned)* |
| Netlify | Full-stack hosting and deployment |
| IONOS + Entri | Custom domain management |

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

## Accomplishments

- ✅ Fully functional, installable health PWA for web and mobile
- ✅ AI chat powered by OpenAI with real health context
- ✅ Tavus AI video agent providing human-like engagement
- ✅ Realistic ElevenLabs voice responses with fallback
- ✅ Scalable backend with Supabase replacing MongoDB
- ✅ Role-based secure chat for caregivers, doctors, and users
- ✅ Accessible, senior-friendly UI with voice-first design
- ✅ Emergency voice detection and caregiver alerts

---

## Lessons Learned

- Empathy-first design transforms AI into meaningful health support  
- Privacy-first architecture is critical for healthcare apps  
- PWA tech bridges the gap between mobile accessibility and performance  
- Voice and video interaction greatly enhance usability for seniors  
- Cloud platforms like Supabase simplify scalability without complexity  

---

## What's Next

- 📱 Capacitor build for Android/iOS native apps  
- 💰 RevenueCat subscription integration for premium features  
- 🌍 Expanding real-time CarePal community chat and peer support  
- 🗣️ Polishing ElevenLabs AI speech for smoother conversation  
- 🎥 Advanced Tavus avatars with medical knowledge  
- 💡 AI symptom triage and health insights development  
- 🔒 Two-factor auth and encrypted health data storage  
- 🚀 Pilot testing with healthcare providers, caregivers, and senior communities  

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
   * `VITE_ELEVENLABS_API_KEY`
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

https://youtu.be/wiGi4HNjEgo

---

## Author

**Adewale Ogabi**
👤 Health-Tech Enthusiast & AI Developer
📧 [ogabi.adewale@gmail.com](mailto:ogabi.adewale@gmail.com)
🔗 [LinkedIn Profile](https://www.linkedin.com/in/ogabiadewale/)
🌍 Visit the deployed version: [https://homecareai.me](https://homecareai.me)  
🏷️ Proudly built with [Bolt.new](https://bolt.new) | Domain powered by IONOS

---

## License

This project is licensed under the [MIT License](LICENSE).

---

CarePal — Your intelligent, compassionate health companion.
