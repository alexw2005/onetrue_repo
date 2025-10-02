import { useEffect, useRef } from "react";

export function usePortal(id = "onetrue-portal-root") {
  const elRef = useRef<HTMLElement | null>(null);
  if (!elRef.current && typeof document !== "undefined") {
    const existing = document.getElementById(id);
    elRef.current = existing || Object.assign(document.createElement("div"), { id });
  }
  useEffect(() => {
    const el = elRef.current!;
    if (!el.parentElement && typeof document !== "undefined") {
      document.body.appendChild(el);
    }
    return () => {
      if (el.parentElement) el.parentElement.removeChild(el);
    };
  }, [id]);
  return elRef.current;
}
