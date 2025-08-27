"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import css from "./BackModal.module.css";

export default function BackModal({ children }: { children: ReactNode }) {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <div className={css.overlay} onClick={handleClose}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
