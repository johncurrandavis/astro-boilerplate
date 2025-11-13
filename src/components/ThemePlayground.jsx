import { useState, useEffect } from "preact/hooks";

/* --------------------------------------------------
   Theme definitions (same as before)
-------------------------------------------------- */
const themes = {
  warmVintage: {
    name: "Warm & Vintage",
    colors: {
      "--background": "40 40% 97%",
      "--foreground": "30 15% 20%",
      "--card": "40 35% 95%",
      "--card-foreground": "30 25% 15%",
      "--primary": "25 45% 35%",
      "--primary-foreground": "40 60% 95%",
      "--secondary": "30 35% 80%",
      "--secondary-foreground": "30 20% 20%",
      "--muted": "35 25% 88%",
      "--muted-foreground": "25 10% 40%",
      "--accent": "10 40% 60%",
      "--accent-foreground": "0 0% 98%",
      "--destructive": "0 70% 45%",
      "--destructive-foreground": "0 0% 98%",
      "--border": "30 30% 80%",
      "--input": "35 20% 85%",
      "--ring": "25 45% 35%",
    },
  },
  coolModern: {
    name: "Cool & Modern",
    colors: {
      "--background": "210 20% 98%",
      "--foreground": "220 15% 20%",
      "--card": "0 0% 100%",
      "--card-foreground": "220 15% 20%",
      "--primary": "210 60% 45%",
      "--primary-foreground": "0 0% 100%",
      "--secondary": "220 15% 90%",
      "--secondary-foreground": "220 20% 20%",
      "--muted": "220 15% 85%",
      "--muted-foreground": "220 10% 40%",
      "--accent": "180 60% 50%",
      "--accent-foreground": "0 0% 100%",
      "--destructive": "0 70% 50%",
      "--destructive-foreground": "0 0% 100%",
      "--border": "210 10% 85%",
      "--input": "220 10% 85%",
      "--ring": "210 60% 45%",
    },
  },
  naturalOrganic: {
    name: "Natural & Organic",
    colors: {
      "--background": "90 25% 96%",
      "--foreground": "100 15% 20%",
      "--card": "80 20% 94%",
      "--card-foreground": "100 10% 20%",
      "--primary": "120 25% 40%",
      "--primary-foreground": "0 0% 98%",
      "--secondary": "60 15% 80%",
      "--secondary-foreground": "120 15% 25%",
      "--muted": "90 10% 85%",
      "--muted-foreground": "100 10% 35%",
      "--accent": "150 20% 45%",
      "--accent-foreground": "0 0% 98%",
      "--destructive": "0 60% 45%",
      "--destructive-foreground": "0 0% 98%",
      "--border": "90 10% 80%",
      "--input": "90 10% 80%",
      "--ring": "120 25% 40%",
    },
  },
  playfulCreative: {
    name: "Playful & Creative",
    colors: {
      "--background": "320 50% 98%",
      "--foreground": "260 20% 20%",
      "--card": "0 0% 100%",
      "--card-foreground": "260 20% 20%",
      "--primary": "280 70% 65%",
      "--primary-foreground": "0 0% 100%",
      "--secondary": "190 70% 80%",
      "--secondary-foreground": "220 25% 20%",
      "--muted": "50 70% 85%",
      "--muted-foreground": "260 20% 30%",
      "--accent": "340 80% 70%",
      "--accent-foreground": "0 0% 100%",
      "--destructive": "0 70% 50%",
      "--destructive-foreground": "0 0% 98%",
      "--border": "260 15% 85%",
      "--input": "260 15% 85%",
      "--ring": "280 70% 65%",
    },
  },
  darkElegant: {
    name: "Dark & Elegant",
    colors: {
      "--background": "240 10% 8%",
      "--foreground": "45 30% 95%",
      "--card": "240 10% 12%",
      "--card-foreground": "45 20% 90%",
      "--primary": "45 30% 55%",
      "--primary-foreground": "0 0% 10%",
      "--secondary": "240 5% 20%",
      "--secondary-foreground": "45 25% 90%",
      "--muted": "240 5% 25%",
      "--muted-foreground": "45 20% 80%",
      "--accent": "50 50% 60%",
      "--accent-foreground": "0 0% 10%",
      "--destructive": "0 70% 45%",
      "--destructive-foreground": "0 0% 98%",
      "--border": "240 5% 25%",
      "--input": "240 5% 25%",
      "--ring": "45 30% 55%",
    },
  },
};

/* --------------------------------------------------
   Playground component
-------------------------------------------------- */
export default function ThemePlayground() {
  const [theme, setTheme] = useState("warmVintage");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const root = document.documentElement;
    const colors = themes[theme].colors;

    root.classList.add("theme-transition");
    for (const key in colors) root.style.setProperty(key, colors[key]);

    const timeout = setTimeout(() => root.classList.remove("theme-transition"), 1200);
    localStorage?.setItem("theme", theme);
    return () => clearTimeout(timeout);
  }, [theme]);

  return (
    <div
      className="min-h-screen transition-all duration-1000"
      style={{
        backgroundColor: `hsl(var(--background))`,
        color: `hsl(var(--foreground))`,
      }}
    >
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
        <header className="flex justify-between items-center">
          <h1 className="text-3xl font-serif">Theme Playground</h1>

          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="px-3 py-2 rounded-md border text-sm font-medium outline-none hover:shadow-md transition-all"
            style={{
              backgroundColor: `hsl(var(--card))`,
              color: `hsl(var(--card-foreground))`,
              borderColor: `hsl(var(--border))`,
            }}
          >
            {Object.keys(themes).map((key) => (
              <option key={key} value={key}>
                {themes[key].name}
              </option>
            ))}
          </select>
        </header>

        <section className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <button
            className="rounded-md px-4 py-2 font-medium transition-colors"
            style={{
              backgroundColor: `hsl(var(--primary))`,
              color: `hsl(var(--primary-foreground))`,
            }}
          >
            Primary Button
          </button>

          <button
            className="rounded-md px-4 py-2 font-medium border transition-colors"
            style={{
              backgroundColor: `hsl(var(--secondary))`,
              color: `hsl(var(--secondary-foreground))`,
              borderColor: `hsl(var(--border))`,
            }}
          >
            Secondary
          </button>

          <button
            className="rounded-md px-4 py-2 font-medium transition-colors"
            style={{
              backgroundColor: `hsl(var(--accent))`,
              color: `hsl(var(--accent-foreground))`,
            }}
          >
            Accent
          </button>
        </section>

        <section className="grid sm:grid-cols-2 gap-6 mt-10">
          <div
            className="rounded-lg p-6 border shadow-sm"
            style={{
              backgroundColor: `hsl(var(--card))`,
              color: `hsl(var(--card-foreground))`,
              borderColor: `hsl(var(--border))`,
            }}
          >
            <h2 className="text-xl font-semibold mb-2">Card Title</h2>
            <p className="text-sm opacity-80">
              This card adapts to the selected theme’s background and text
              colors. Borders and shadows adjust automatically too.
            </p>
          </div>

          <div
            className="rounded-lg p-6 border shadow-sm"
            style={{
              backgroundColor: `hsl(var(--muted))`,
              color: `hsl(var(--muted-foreground))`,
              borderColor: `hsl(var(--border))`,
            }}
          >
            <h2 className="text-xl font-semibold mb-2">Muted Section</h2>
            <p className="text-sm opacity-80">
              Useful for showing subtle differences in background or tone.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
