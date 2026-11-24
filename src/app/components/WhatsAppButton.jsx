import { AUTHOR } from "../site";

// Floating "chat on WhatsApp" button, bottom-right on every page.
export default function WhatsAppButton() {
  const href = `${AUTHOR.whatsapp.url}?text=${encodeURIComponent(
    "Hi Tolulope, I found your website and would like to talk about a project."
  )}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Tolulope on WhatsApp (opens in a new tab)"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.45)] transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#455CE9] md:bottom-8 md:right-8"
    >
      <svg aria-hidden="true" viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor">
        <path d="M16.04 4C9.41 4 4.03 9.37 4.03 16c0 2.12.55 4.18 1.6 6L4 28l6.18-1.6A12 12 0 0 0 16.04 28C22.66 28 28 22.63 28 16S22.66 4 16.04 4Zm0 21.9c-1.8 0-3.57-.48-5.12-1.4l-.37-.22-3.67.95.98-3.57-.24-.37A9.86 9.86 0 0 1 6.1 16c0-5.47 4.46-9.92 9.94-9.92A9.93 9.93 0 0 1 25.98 16c0 5.47-4.46 9.9-9.94 9.9Zm5.45-7.42c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48a9 9 0 0 1-1.66-2.07c-.17-.3 0-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.63-.93-2.24-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.47 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.48.71.31 1.27.5 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z"/>
      </svg>
    </a>
  );
}
