I've created a modular image gallery with the following features:

Responsive grid layout
Lightbox with keyboard navigation
Image hover effects
Next/Previous navigation
Keyboard shortcuts (Escape, Arrow keys)
The code is organized into small, focused components:

ImageGrid: Handles the grid layout
ImageItem: Individual image tile with hover effects
Lightbox: Modal display of enlarged images
useLightboxControls: Custom hook for lightbox logic
Try it out by:

Clicking any image to open the lightbox
Using arrow keys or buttons to navigate
Press Escape or click the X to close
Hover over images to see titles

The gallery uses sample images from Pinterest - replace them with your own images by updating the sampleImages array in App.tsx.


