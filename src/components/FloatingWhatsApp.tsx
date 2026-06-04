import { MessageCircle } from "@/components/Icons";
import { whatsappHref } from "@/lib/utils";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappHref("Hi Flames of Arabia, I want to reserve a table tonight.")}
      data-channel="wa.me"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Flames of Arabia on WhatsApp"
      className="focus-ring fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-charcoal shadow-[0_18px_50px_rgba(37,211,102,0.35)] transition hover:scale-105"
    >
      <MessageCircle size={26} aria-hidden />
    </a>
  );
}
