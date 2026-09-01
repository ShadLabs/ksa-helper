# KSA Helper

A simple bilingual (English/Arabic) web app that helps people in Saudi Arabia understand which official service to use for common everyday problems.

## MVP features

- Problem finder for common residency, employment, visa, traffic, municipal, justice and family-service questions
- English / Arabic toggle with RTL support
- Official service directory (Absher, Qiwa, Najiz, Balady, Musaned, HRSD)
- Local-only expiry tracker using `localStorage`
- Official HRSD end-of-service calculator link
- Mobile-friendly static design
- No backend and no account system

## Run locally

Because this version is plain HTML/CSS/JavaScript, you can simply open `index.html`.

For a local server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy on GitHub Pages

1. Create a new GitHub repository, for example `ksa-helper`.
2. Upload all files from this project to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder.
6. Save. GitHub Pages will publish the site.

## Suggested next versions

- Add 30–50 more guided situations.
- Add Arabic/English search aliases and typo handling.
- Add PWA support so the app can be installed on a phone.
- Add optional notification/reminder support.
- Add a carefully sourced knowledge-data file with `lastVerified` dates.
- Add analytics without collecting sensitive personal data.
- Add feedback buttons: “This solved my problem / I still need help.”
- Add Urdu, Hindi, Bengali and Tagalog.

## Data/privacy principle

Do not ask users to enter Iqama numbers, passport numbers, passwords, OTPs or government-login credentials. Expiry dates in this MVP remain in the user’s own browser via `localStorage`.

## Disclaimer

KSA Helper is an independent guidance project and is not affiliated with the Government of Saudi Arabia. Government rules, fees, eligibility conditions and platform flows can change; important actions should always be verified on the linked official service.
