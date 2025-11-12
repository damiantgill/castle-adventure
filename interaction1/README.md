# Orange - Figma Design Implementation

## Overview
This is an HTML/CSS/JavaScript implementation of your Figma design with three pages and interactive navigation.

## Files
- `index.html` - Main HTML structure with all three pages
- `styles.css` - All styling and layout
- `script.js` - Page navigation and interaction logic

## Features

### Pages
1. **Page 1 (pg1)** - White background with large house-fly image and "text test" link
2. **Page 2 (pg2)** - Brown/tan background (#575039) with "text test" link
3. **Page 3 (pg3)** - White background with smaller house-fly image, drawing, and "text test" link

### Navigation
- **Navigation Buttons** - Click the buttons at the top to switch between pages
- **Text Links** - Click on "text test" to navigate to the next page
- **Keyboard Navigation** - Use arrow keys to navigate:
  - Right/Down arrows → Next page
  - Left/Up arrows → Previous page
- **Touch Swipe** - On touch devices, swipe left/right to navigate

### Design Details
- Uses the Jacquard 12 font from Google Fonts
- Maintains exact positioning and sizing from Figma
- Includes smooth fade transitions between pages
- Images are loaded directly from Figma's asset CDN (valid for 7 days)
- Responsive scaling for smaller screens

## How to Use

1. Open `index.html` in a web browser
2. Use any of the navigation methods mentioned above
3. All three pages cycle in a loop (Page 3 → Page 1)

## Notes

- The design is optimized for 1440x1024px viewport
- Responsive scaling is included for smaller screens
- Images are hosted on Figma's CDN and will expire after 7 days
- To use permanently, download the images and update the src URLs in `index.html`

## Customization

To modify the navigation flow or interactions, edit the `showPage()` function in `script.js`.
To adjust styling, modify `styles.css`.
To change the page structure, update `index.html`.
