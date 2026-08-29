type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const IconPause = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M10 9v6M14 9v6" />
  </svg>
);

export const IconBowl = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M3 11h18a9 9 0 0 1-18 0Z" />
    <path d="M9 7c0-1.5 1.2-1.5 1.2-3M14 7c0-1.5 1.2-1.5 1.2-3" />
  </svg>
);

export const IconCup = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M5 8h11v6a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5V8Z" />
    <path d="M16 10h2a2.5 2.5 0 0 1 0 5h-2" />
    <path d="M3 22h15" />
  </svg>
);

export const IconLaptop = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <rect x="4" y="5" width="16" height="11" rx="1.5" />
    <path d="M2 19h20" />
  </svg>
);

export const IconPin = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const IconStar = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.7l5.9-.8Z" />
  </svg>
);

export const IconPhone = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M5 3h3l2 5-2.2 1.4a12 12 0 0 0 5.8 5.8L15 13l5 2v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3 5.2 2 2 0 0 1 5 3Z" />
  </svg>
);

export const IconClock = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5.3l3.2 2" />
  </svg>
);

export const IconCar = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M4 15h16v-3l-2-4H6l-2 4v3Z" />
    <circle cx="7.5" cy="17.5" r="1.5" />
    <circle cx="16.5" cy="17.5" r="1.5" />
  </svg>
);

export const IconLeaf = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M20 4c0 9-5.5 13-11 13a5 5 0 0 1 0-10c4 0 6-3 11-3Z" />
    <path d="M4 20c3-5 7-8 12-10" />
  </svg>
);

export const IconAccess = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="4.5" r="1.6" />
    <path d="M8 8.5h8M12 8.5v6h5M9 14a5 5 0 1 0 6 5" />
  </svg>
);

export const IconArrow = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconExternal = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6" />
  </svg>
);

export const IconArrowDown = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M12 5v14M6 13l6 6 6-6" />
  </svg>
);

export const IconInstagram = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="0.8" fill="currentColor" />
  </svg>
);

export const IconGoogle = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M20.5 12.2c0 4.6-3.3 7.8-8.3 7.8a8 8 0 1 1 5.5-13.9l-2.3 2.2a4.8 4.8 0 1 0-3.2 8.4c2.6 0 4.2-1.4 4.6-3.4h-4.6v-3h8.2c.1.6.1 1.2.1 1.9Z" />
  </svg>
);
