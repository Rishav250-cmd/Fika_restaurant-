import { useEffect, useRef } from "react";
import { IconExternal } from "@/components/icons";

type BookingOption = {
  name: string;
  url: string;
  note: string;
};

const options: BookingOption[] = [
  {
    name: "Swiggy Dineout",
    url: "https://www.swiggy.com/restaurants/allahabad/civil-lines/fika-plates-coffee-culture-914161/dineout",
    note: "Reserve with Swiggy",
  },
  {
    name: "District",
    url: "https://www.district.in/dining/allahabad/fika-plates-coffee-culture-2-civil-lines/book?utm_source=rwg&rwg_token=AE37R_jgBb9SmaI_dr2mb6ssjrQHDprLPld3mTLRyrd7IAt1I298vdXSPqTNWyU3PDv-I04vP-1H_tRrXhqgp6HG-1mq_9imXS-ckluDt3C71hbuTVmflR0%3D",
    note: "Book via District",
  },
  {
    name: "Zomato",
    url: "https://www.zomato.com/allahabad/fika-plates-coffee-culture-2-civil-lines/book",
    note: "Reserve on Zomato",
  },
  {
    name: "Google Maps",
    url: "https://www.google.com/maps/reserve/v/dine/c/72TPFL0zeHQ?source=pa&opi=79508299&hl=en-IN&gei=PuyRatSQBqD0juMP0-HFgAw&ahbb=1&sourceurl=https://www.google.com/maps/preview/place?authuser%3D0%26hl%3Den%26gl%3Din%26pb%3D!1m17!1s0x399acb842615414b:0x4286f6c85c0e6bc0!3m12!1m3!1d580.8835849278928!2d81.84029350223894!3d25.44942357642615!2m3!1f0!2f0!3f0!3m2!1i990!2i743!4f13.1!4m2!3d25.449300557818834!4d81.83961510658264!12m4!2m3!1i360!2i120!4i8!13m57!2m2!1i203!2i100!3m2!2i4!5b1!6m6!1m2!1i86!2i86!1m2!1i408!2i240!7m33!1m3!1e1!2b0!3e3!1m3!1e2!2b1!3e2!1m3!1e2!2b0!3e3!1m3!1e8!2b0!3e3!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e10!2b0!3e4!1m3!1e9!2b1!3e2!2b1!9b0!15m8!1m7!1m2!1m1!1e2!2m2!1i195!2i195!3i20!14m2!1srOuRaojNEbaZ4-EPkOeW4QU!7e81!15m111!1m29!4e2!13m9!2b1!3b1!4b1!6i1!8b1!9b1!14b1!20b1!25b1!18m17!3b1!4b1!5b1!6b1!9b1!13b1!14b1!17b1!20b1!21b1!22b1!30b1!32b1!33m1!1b1!34b1!36e2!10m1!8e3!11m1!3e1!17b1!20m2!1e3!1e6!24b1!25b1!26b1!27b1!29b1!30m1!2b1!36b1!37b1!39m3!2m2!2i1!3i1!43b1!52b1!54m1!1b1!55b1!56m1!1b1!61m2!1m1!1e1!65m5!3m4!1m3!1m2!1i224!2i298!72m22!1m8!2b1!5b1!7b1!12m4!1b1!2b1!4m1!1e1!4b1!8m10!1m6!4m1!1e1!4m1!1e3!4m1!1e4!3sother_user_google_review_posts__and__hotel_and_vr_partner_review_posts!6m1!1e1!9b1!89b1!90m2!1m1!1e2!98m3!1b1!2b1!3b1!103b1!113b1!114m3!1b1!2m1!1b1!117b1!122m1!1b1!126b1!127b1!128m1!1b1!21m28!1m6!1m2!1i0!2i0!2m2!1i530!2i743!1m6!1m2!1i940!2i0!2m2!1i990!2i743!1m6!1m2!1i0!2i0!2m2!1i990!2i20!1m6!1m2!1i0!2i723!2m2!1i990!2i743!22m2!1e81!8e1!29m0!30m6!3b1!6m1!2b1!7m1!2b1!9b1!34m5!7b1!10b1!14b1!15m1!1b0!37i792!39zRklLQSDgpKvgpYDgpJXgpL4%26q%3DFIKA%2B%25E0%25A4%25AB%25E0%25A5%2580%25E0%25A4%2595%25E0%25A4%25BE",
    note: "Reserve with Google",
  },
];

export function ReserveModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);

    const firstLink = panelRef.current?.querySelector("a") as HTMLElement | null;
    firstLink?.focus();

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="reserve-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="absolute inset-0 bg-espresso/60 backdrop-blur-sm" />
      <div
        ref={panelRef}
        className="relative w-full max-w-md overflow-hidden rounded-2xl bg-background p-7 shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="label-eyebrow">a table is waiting</p>
            <h2 id="reserve-title" className="mt-2 font-display text-2xl">
              Reserve your table
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-sand hover:text-espresso"
            aria-label="Close reservation options"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p className="mt-3 text-sm text-muted-foreground">
          Pick the platform you prefer. Each opens in a new tab so you can book the way that suits you.
        </p>

        <div className="mt-7 space-y-3">
          {options.map((opt) => (
            <a
              key={opt.name}
              href={opt.url}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/60 hover:bg-background hover:shadow-sm"
            >
              <div>
                <p className="font-medium text-espresso">{opt.name}</p>
                <p className="text-sm text-muted-foreground">{opt.note}</p>
              </div>
              <IconExternal className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
            </a>
          ))}
        </div>

        <div className="mt-7 flex items-center justify-center gap-2 border-t border-border pt-5 text-sm text-muted-foreground">
          <span>Or call</span>
          <a href="tel:+919918901681" className="font-medium text-espresso underline-offset-4 hover:underline">
            +91 99189 01681
          </a>
        </div>
      </div>
    </div>
  );
}
