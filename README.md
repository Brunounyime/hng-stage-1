# Profile Card Web App

A simple, responsive profile card web application built with HTML, CSS, and JavaScript. Users can view a profile, connect via social links, see hobbies/dislikes, and upload a custom avatar image that persists across page refreshes.

## Features

- **Profile Card:** Displays user info, bio, hobbies, dislikes, and social links.
- **Live Timestamp:** Shows the current time in milliseconds, updating every second.
- **Avatar Upload:** Click the avatar to upload a new image (max 2MB, image files only). Avatar persists using `localStorage`.
- **Avatar Reset:** Right-click the avatar to reset to the default image.
- **Responsive Design:** Works well on desktop and mobile screens.

## Project Structure

```
index.html
assets/
  _DSC0109 (1).jpg
  _DSC0109.jpg
css/
  style.css
js/
  script.js
```

- [`index.html`](index.html): Main HTML file containing the profile card markup.
- [`about.html`](about.html): HTML file containing the about page.
- [`contact.html`](contact.html): HTML file containing the contact page.
- [`css/style.css`](css/style.css): Styles for layout, colors, responsiveness, and accessibility.
- [`js/script.js`](js/script.js): Handles avatar upload/reset, timestamp updates, and localStorage logic.
- [`js/nav.js`](js/nav.js): Handles the navigation logic for mobile screens.
- [`js/contact.js`](js/contact.js): Handles the contact form submission and validation.
- [`assets/`](assets/): Contains default avatar images.

## Usage

1. **Open `index.html` in your browser.**
2. **Click the avatar** to upload a new image (JPG, PNG, GIF, etc., under 2MB).
3. **Right-click the avatar** to reset to the default image.
4. **Connect via social links** (Twitter, GitHub, LinkedIn).

## Accessibility

- Uses semantic HTML and ARIA attributes for better accessibility.
- Keyboard and screen reader friendly.

## Customization

- Update profile info, hobbies, dislikes, or social links in [`index.html`](index.html).
- Change styles in [`css/style.css`](css/style.css).
- Replace default avatar in [`assets/_DSC0109 (1).jpg`](<assets/_DSC0109%20(1).jpg>).

---

Feel free to modify and extend this project!
