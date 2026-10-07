"use client";

import { useState } from "react";
import Image from "next/image";

type MemberPhotoProps = {
  src: string;
  alt: string;
  initials: string;
};

/**
 * Full-bleed head-shot renderer. If the image path is missing or fails to
 * load, the agent's initials render on a warm tinted tile instead so the card
 * and profile still read as a designed surface.
 */
export function MemberPhoto({ src, alt, initials }: MemberPhotoProps) {
  const [showFallback, setShowFallback] = useState(false);

  if (!showFallback && src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 520px) 25vw, 100vw"
        style={{ objectFit: "cover" }}
        onError={() => setShowFallback(true)}
      />
    );
  }

  return <div className="wt-photo-fallback">{initials}</div>;
}