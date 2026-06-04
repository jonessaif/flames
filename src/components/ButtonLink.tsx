import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  icon?: ReactNode;
  ariaLabel?: string;
};

const variants = {
  primary: "bg-gold text-charcoal shadow-gold-soft hover:bg-ember",
  secondary: "border border-gold/30 bg-ivory/5 text-ivory hover:bg-ivory/10",
  ghost: "text-ivory/80 hover:text-gold"
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  icon,
  ariaLabel
}: ButtonLinkProps) {
  const sharedClassName = cn(
    "focus-ring group/button motion-sheen inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 active:translate-y-0",
    variants[variant],
    className
  );

  const content = (
    <>
      <span className="relative z-10 inline-flex items-center gap-2">
        {icon}
        <span>{children}</span>
      </span>
    </>
  );

  const isInternal = href.startsWith("/");

  if (!isInternal) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        className={sharedClassName}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={ariaLabel} className={sharedClassName}>
      {content}
    </Link>
  );
}
