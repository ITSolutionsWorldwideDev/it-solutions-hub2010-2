// components/ui/LazyOnView.tsx
"use client";
import { useEffect, useRef, useState, ComponentType } from "react";

type LazyModule = { default: ComponentType<any> } | Record<string, ComponentType<any>>;

interface LazyOnViewProps {
  loader: () => Promise<LazyModule>;
  props?: Record<string, unknown>;
  fallback?: React.ReactNode;
  rootMargin?: string;
  className?: string; // ✅ className add kiya
}

export function LazyOnView({
  loader,
  props,
  fallback = null,
  rootMargin = "300px",
  className = "", // ✅ default empty
}: LazyOnViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [Comp, setComp] = useState<ComponentType<any> | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  useEffect(() => {
    if (inView && !Comp) {
      loader().then((mod) => {
        const resolved = (mod as any).default || mod;
        setComp(() => resolved);
      });
    }
  }, [inView, Comp, loader]);

  // ✅ className ko wrapper div par apply kar diya
  return (
    <div ref={ref} className={className}>
      {Comp ? <Comp {...(props ?? {})} /> : fallback}
    </div>
  );
}