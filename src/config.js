export const CONFIG = {
  appName: "SketchVault",
  defaultDescription:
    "A curated SketchVault resource for Sketchware Pro project files, Java snippets, custom blocks, libraries, and icons.",
  supabaseUrl: "https://rpbdsbchbswofzjddxgx.supabase.co",
  supabaseAnonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwYmRzYmNoYnN3b2Z6amRkeGd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxMTcwNDAsImV4cCI6MjA5NTY5MzA0MH0.GT4bTxmd1IViOGzVHb6q6Gj6p4f9qZqRivUjljjC3k4",
  docsUrl: "docs.html",
  toolsUrl: "tools.html",
  downloads: {
    sketchwareStable: "https://example.com/downloads/sketchware-pro-stable.apk",
    sketchwareBeta: "https://example.com/downloads/sketchware-pro-beta.apk",
    sketchwareClassic: "https://example.com/downloads/sketchware-pro-classic.apk",
    allInOne: "https://example.com/downloads/sketchware-pro-all-in-one-resources.zip"
  },
  categories: [
    "UI/UX",
    "Toolkit",
    "Tutorial",
    "More Blocks",
    "Frontend",
    "Backend",
    "Firebase",
    "Animation",
    "Material",
    "Utilities"
  ],
  sortOptions: [
    { label: "Newest", value: "newest" },
    { label: "Oldest", value: "oldest" },
    { label: "Name A-Z", value: "name-asc" },
    { label: "Name Z-A", value: "name-desc" },
    { label: "Favorites", value: "favorites" }
  ]
};

export function isSupabaseConfigured() {
  const hasUrl = /^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(CONFIG.supabaseUrl);
  const hasKey = CONFIG.supabaseAnonKey && !CONFIG.supabaseAnonKey.includes("YOUR_");
  return Boolean(hasUrl && hasKey);
}
