📸 Fitness Image Tracker App (**Work in Progress**)

A mobile-first app to track muscle growth over time using image uploads and AI-based segmentation. Users can upload gym photos, log workouts, and receive visual feedback on muscle gain.

What it does (goal)
	•	Upload progress photos from camera or gallery
	•	Automatically segment muscle groups (planned)
	•	Log workouts and view progress
	•	Personalized feedback (planned)

Current status
	•	Built basic React Native UI with image picker (camera + gallery) using Expo
	•	State updates working across views
	•	Web and mobile views debugged (e.g., tab visibility differences)
	•	Working toward AI model integration (DeepLabV3)

Tech Stack

React Native + Expo • Firebase Auth • Supabase • Tailwind • Workers AI (planned)

Next steps
	•	Integrate segmentation model + inference
	•	Set up backend storage and logging
	•	Polish navigation + workout tracking
