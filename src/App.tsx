import Header from "./components/Header";
import Timeline from "./components/Timeline";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      {/* Site Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 p-6" role="main">
        <section
          aria-labelledby="timeline-heading"
          className="max-w-4xl mx-auto"
        >
          <h2
            id="timeline-heading"
            className="text-2xl font-bold mb-4 text-gray-900"
          >
            Interactive Timeline
          </h2>
          <p className="mb-6 text-gray-700">
            Use arrow keys to navigate between events. Press <kbd>Enter</kbd> or
            <kbd>Space</kbd> to open an event. Press <kbd>Esc</kbd> to close the
            modal.
          </p>

          <Timeline />
        </section>
      </main>

      {/* Footer */}
      <footer className="p-4 bg-gray-100 text-center text-sm text-gray-700">
        © {new Date().getFullYear()} Timeline App – Accessible by design
      </footer>
    </div>
  );
}
