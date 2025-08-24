import { useEffect, useRef } from "react";

interface EventModalProps {
  event: { title: string; description: string };
  onClose: () => void;
  triggerRef?: React.RefObject<HTMLElement>;
}

export default function EventModal({ event, onClose, triggerRef }: EventModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Focus first focusable element
    const focusable = modalRef.current?.querySelector<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    focusable?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        triggerRef?.current?.focus(); // return focus
      }
      if (e.key === "Tab") {
        const focusables = modalRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables || focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      ref={modalRef}
      tabIndex={-1}
      className="fixed inset-0 flex items-center justify-center bg-black/50"
    >
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full">
        <h2 id="modal-title" className="text-xl font-bold mb-2">{event.title}</h2>
        <p id="modal-description" className="mb-4">{event.description}</p>
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="px-4 py-2 rounded-lg bg-blue-600 text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
}
