import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
};

function IconBase({ size = 24, children, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return <IconBase {...props}><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></IconBase>;
}

export function CalendarDays(props: IconProps) {
  return <IconBase {...props}><path d="M8 2v4" /><path d="M16 2v4" /><path d="M3 10h18" /><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /></IconBase>;
}

export function Check(props: IconProps) {
  return <IconBase {...props}><path d="m20 6-11 11-5-5" /></IconBase>;
}

export function ChevronDown(props: IconProps) {
  return <IconBase {...props}><path d="m6 9 6 6 6-6" /></IconBase>;
}

export function ChevronLeft(props: IconProps) {
  return <IconBase {...props}><path d="m15 18-6-6 6-6" /></IconBase>;
}

export function ChevronRight(props: IconProps) {
  return <IconBase {...props}><path d="m9 18 6-6-6-6" /></IconBase>;
}

export function Clock(props: IconProps) {
  return <IconBase {...props}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></IconBase>;
}

export function Coffee(props: IconProps) {
  return <IconBase {...props}><path d="M5 8h10v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4Z" /><path d="M15 9h2a3 3 0 0 1 0 6h-2" /><path d="M6 2v2" /><path d="M10 2v2" /><path d="M14 2v2" /></IconBase>;
}

export function Flame(props: IconProps) {
  return <IconBase {...props}><path d="M12 22a7 7 0 0 0 7-7c0-4-3-6-4-10-2 2-3 4-3 6-2-1-3-3-3-5-2 2-4 5-4 9a7 7 0 0 0 7 7Z" /></IconBase>;
}

export function Gamepad2(props: IconProps) {
  return <IconBase {...props}><path d="M6 12h4" /><path d="M8 10v4" /><path d="M15 13h.01" /><path d="M18 11h.01" /><rect x="2" y="6" width="20" height="12" rx="4" /><path d="m6 18-2 3" /><path d="m18 18 2 3" /></IconBase>;
}

export function Gem(props: IconProps) {
  return <IconBase {...props}><path d="M6 3h12l4 6-10 12L2 9Z" /><path d="M2 9h20" /><path d="m6 3 6 18 6-18" /></IconBase>;
}

export function Instagram(props: IconProps) {
  return <IconBase {...props}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></IconBase>;
}

export function MapPin(props: IconProps) {
  return <IconBase {...props}><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="3" /></IconBase>;
}

export function Maximize2(props: IconProps) {
  return <IconBase {...props}><path d="M15 3h6v6" /><path d="m21 3-7 7" /><path d="M9 21H3v-6" /><path d="m3 21 7-7" /></IconBase>;
}

export function Menu(props: IconProps) {
  return <IconBase {...props}><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></IconBase>;
}

export function MessageCircle(props: IconProps) {
  return <IconBase {...props}><path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.1-5.2A8.5 8.5 0 1 1 21 11.5Z" /></IconBase>;
}

export function Music2(props: IconProps) {
  return <IconBase {...props}><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></IconBase>;
}

export function Navigation(props: IconProps) {
  return <IconBase {...props}><path d="m3 11 19-8-8 19-3-8Z" /></IconBase>;
}

export function Phone(props: IconProps) {
  return <IconBase {...props}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.7 19.7 0 0 1-8.6-3.1 19.2 19.2 0 0 1-6-6A19.7 19.7 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" /></IconBase>;
}

export function Share2(props: IconProps) {
  return <IconBase {...props}><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="m8.6 13.5 6.8 4" /><path d="m15.4 6.5-6.8 4" /></IconBase>;
}

export function Sparkles(props: IconProps) {
  return <IconBase {...props}><path d="m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8Z" /><path d="m19 14 .9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9Z" /><path d="m5 14 .8 1.8L8 16.5l-2.2.7L5 19l-.8-1.8-2.2-.7 2.2-.7Z" /></IconBase>;
}

export function Star(props: IconProps) {
  return <IconBase {...props}><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21 7 14.2 2 9.3l6.9-1Z" /></IconBase>;
}

export function Trophy(props: IconProps) {
  return <IconBase {...props}><path d="M8 21h8" /><path d="M12 17v4" /><path d="M7 4h10v5a5 5 0 0 1-10 0Z" /><path d="M5 5H3v2a4 4 0 0 0 4 4" /><path d="M19 5h2v2a4 4 0 0 1-4 4" /></IconBase>;
}

export function X(props: IconProps) {
  return <IconBase {...props}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></IconBase>;
}
