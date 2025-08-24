# Accessibility Improvements

This app was updated to meet WCAG 2.1 AA standards:

## Modal (EventModal.tsx)
- Uses `role="dialog"` with `aria-modal="true"`.
- Focus is trapped inside modal while open.
- Modal closes with **Esc key**.
- Focus returns to triggering element when closed.

## Timeline Markers (EventMarker.tsx)
- Each marker is a `<button>`, tabbable via keyboard.
- Active marker uses `aria-current="step"`.
- Arrow key navigation: **Left/Right arrows** move between markers.

## Keyboard Support
- **Tab/Shift+Tab** for focus navigation.
- **Arrow keys** for timeline navigation.
- **Esc** closes modal.

## Color Contrast
- All text/backgrounds tested to meet **WCAG AA contrast ratio (≥4.5:1)**.
- Highlight color uses accessible blue `#005fcc`.

## Other
- Header button has `aria-label`.
- Semantic tags and proper headings used for screen reader support.
