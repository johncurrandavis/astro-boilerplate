import { useState, useEffect } from "preact/hooks";

// Themes object
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
      "--ring": "25 45% 35%"
    }
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
      "--ring": "210 60% 45%"
    }
  },

  naturalOrganic: {
    name: "Natural & Organic",
    colors: {
      "--background": "90 15% 95%",
      "--foreground": "100 20% 25%",
      "--card": "90 20% 90%",
      "--card-foreground": "100 20% 25%",
      "--primary": "120 35% 35%",
      "--primary-foreground": "90 15% 95%",
      "--secondary": "60 20% 80%",
      "--secondary-foreground": "100 20% 25%",
      "--muted": "30 15% 85%",
      "--muted-foreground": "100 20% 35%",
      "--accent": "150 40% 50%",
      "--accent-foreground": "90 15% 95%",
      "--destructive": "10 70% 50%",
      "--destructive-foreground": "90 15% 95%",
      "--border": "60 15% 75%",
      "--input": "90 15% 90%",
      "--ring": "120 35% 35%"
    }
  },

  playfulCreative: {
    name: "Playful & Creative",
    colors: {
      "--background": "210 20% 98%",
      "--foreground": "340 15% 20%",
      "--card": "50 20% 98%",
      "--card-foreground": "340 15% 20%",
      "--primary": "320 40% 70%",
      "--primary-foreground": "50 20% 98%",
      "--secondary": "180 50% 80%",
      "--secondary-foreground": "340 15% 20%",
      "--muted": "40 20% 90%",
      "--muted-foreground": "340 15% 20%",
      "--accent": "45 70% 65%",
      "--accent-foreground": "0 0% 10%",
      "--destructive": "0 80% 65%",
      "--destructive-foreground": "0 0% 98%",
      "--border": "210 15% 85%",
      "--input": "50 20% 95%",
      "--ring": "320 40% 70%"
    }
  },

  darkElegant: {
    name: "Dark & Elegant",
    colors: {
      "--background": "240 10% 5%",
      "--foreground": "50 15% 95%",
      "--card": "240 10% 10%",
      "--card-foreground": "50 15% 95%",
      "--primary": "45 60% 55%",
      "--primary-foreground": "240 10% 5%",
      "--secondary": "40 20% 30%",
      "--secondary-foreground": "50 15% 95%",
      "--muted": "0 0% 15%",
      "--muted-foreground": "50 15% 95%",
      "--accent": "50 80% 60%",
      "--accent-foreground": "240 10% 5%",
      "--destructive": "0 80% 50%",
      "--destructive-foreground": "50 15% 95%",
      "--border": "240 10% 15%",
      "--input": "240 10% 15%",
      "--ring": "45 60% 55%"
    }
  }
};

export default function ThemeSelector() {
  const [theme, setTheme] = useState("warmVintage");

  // Apply theme variables to <html>
  useEffect(() => {
    const root = document.documentElement;
    const colors = themes[theme].colors;
    for (const key in colors) {
      root.style.setProperty(key, colors[key]);
    }
  }, [theme]);

  return (
    <div className="flex gap-2">
      {Object.keys(themes).map((key) => (
        <button
          key={key}
          onClick={() => setTheme(key)}
          className={`px-3 py-1 rounded border text-sm font-medium transition-all ${
            theme === key
              ? "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]"
              : "bg-transparent border-[hsl(var(--border))] hover:bg-[hsl(var(--secondary))]"
          }`}
        >
          {themes[key].name}
        </button>
      ))}
    </div>
  );
}
