const STRINGS = {
  en: {
    "lang.en": "English",
    "lang.my": "Burmese",
    "theme.light": "Light",
    "theme.dark": "Dark",
    "theme.system": "System",
    "theme.aria": "Theme",
    "nav.dashboard": "Main Dashboard",
    "nav.projects": "Project Files",
    "nav.java": "Java Source Code",
    "nav.blocks": "Custom Blocks Files",
    "nav.libraries": "Library Files",
    "nav.icons": "Icon Files",
    "nav.appearance": "Appearance",
    "common.cancel": "Cancel",
    "common.save": "Save Changes",
    "common.upload": "Upload",
    "common.delete": "Delete",
    "common.edit": "Edit",
    "common.copy": "Copy",
    "common.details": "Details",
    "common.download": "Download",
    "common.retry": "Retry",
    "common.signOut": "Sign Out",
    "common.getStarted": "Get Started",
    "common.documentation": "Documentation",
    "common.tools": "Other Tools",
    "common.favorites": "Favorites",
    "common.addNew": "Add New",
    "common.admin": "Admin",
    "common.member": "Member",
    "common.workspace": "Workspace",
    "auth.signIn": "Sign In",
    "auth.signUp": "Sign Up",
    "auth.forgot": "Reset",
    "auth.welcome": "Welcome back",
    "auth.createAccount": "Create your account",
    "auth.resetAccess": "Reset access",
    "auth.setNewPassword": "Set a new password",
    "auth.secureWorkspace": "Secure workspace",
    "auth.subtitle": "Use email or GitHub to manage Sketchware resources with private storage.",
    "auth.email": "Email",
    "auth.password": "Password",
    "auth.username": "Username",
    "auth.showPassword": "Show password",
    "auth.hidePassword": "Hide password",
    "auth.forgotLink": "Forgot password?",
    "auth.github": "Continue with GitHub",
    "auth.reset.step1": "Enter your email and request a reset link",
    "auth.reset.step2": "Open the link from your inbox",
    "auth.reset.step3": "Set your new password",
    "auth.reset.send": "Send reset link",
    "auth.reset.recoveryLink": "Already opened the link? Set new password",
    "auth.reset.update": "Update password",
    "auth.reset.backSignIn": "Back to sign in",
    "appearance.title": "Appearance",
    "appearance.subtitle": "Theme and display preferences. Choices are saved on this device.",
    "appearance.language": "Language",
    "appearance.languageHint": "English is the default.",
    "appearance.sidebar": "Navigation density",
    "appearance.sidebarHint": "Collapse the sidebar to icon-only mode on desktop.",
    "appearance.toggleSidebar": "Toggle sidebar",
    "landing.eyebrow": "Sketchware Pro resource platform",
    "landing.hero": "A mobile-first workspace for Sketchware project files, Java code, blocks, libraries, and icons.",
    "dashboard.welcome": "Welcome",
    "dashboard.subtitle": "A real-time control center for your Sketchware Pro resources.",
    "dashboard.loading": "Loading your Sketchware resource workspace.",
    "dashboard.stat.projects": "Project Files",
    "dashboard.stat.java": "Java Snippets",
    "dashboard.stat.files": "Files Total",
    "dashboard.stat.categories": "Categories",
    "java.codeName": "Code Name",
    "java.description": "Description",
    "java.descriptionPlaceholder": "What is this snippet used for?",
    "java.source": "Java Source Code",
    "java.uploadTitle": "Upload Java Source Code",
    "java.editTitle": "Edit Java Source Code",
    "java.detailTitle": "Java Source Details",
    "java.uploaded": "Uploaded",
    "resource.fileName": "File Name",
    "resource.description": "Description",
    "resource.noMatch": "No matching files",
    "resource.noMatchHint": "Upload a resource or adjust search, category, sort, and favorites.",
    "upload.preparing": "Preparing upload…",
    "upload.session": "Checking session…",
    "upload.failed": "Upload failed",
    "upload.complete": "Upload complete!",
    "upload.cancelled": "Upload cancelled."
  },
  my: {
    "lang.en": "English",
    "lang.my": "မြန်မာ",
    "theme.light": "အလင်း",
    "theme.dark": "အမှောင်",
    "theme.system": "စနစ်",
    "theme.aria": "အပြင်အဆင်",
    "nav.dashboard": "ပင်မဒက်ရှ်ဘုတ်",
    "nav.projects": "ပရောဂျက်ဖိုင်များ",
    "nav.java": "Java ကုဒ်များ",
    "nav.blocks": "Custom Blocks",
    "nav.libraries": "Library ဖိုင်များ",
    "nav.icons": "Icon ဖိုင်များ",
    "nav.appearance": "အပြင်အဆင်",
    "common.cancel": "ပယ်ဖျက်မည်",
    "common.save": "သိမ်းဆည်းမည်",
    "common.upload": "တင်သွင်းမည်",
    "common.delete": "ဖျက်မည်",
    "common.edit": "ပြင်ဆင်မည်",
    "common.copy": "မိတ္တူကူးမည်",
    "common.details": "အသေးစိတ်",
    "common.download": "ဒေါင်းလုဒ်ဆွဲမည်",
    "common.retry": "ပြန်လည်ကြိုးစားမည်",
    "common.signOut": "အကောင့်မှထွက်မည်",
    "common.getStarted": "စတင်အသုံးပြုမည်",
    "common.documentation": "လမ်းညွှန်ချက်များ",
    "common.tools": "အခြားကိရိယာများ",
    "common.favorites": "အနှစ်သက်ဆုံးများ",
    "common.addNew": "အသစ်ထည့်သွင်းမည်",
    "common.admin": "စီမံခန့်ခွဲသူ",
    "common.member": "အဖွဲ့ဝင်",
    "common.workspace": "Workspace",
    "auth.signIn": "အကောင့်ဝင်မည်",
    "auth.signUp": "အကောင့်ဖွင့်မည်",
    "auth.forgot": "စကားဝှက် ပြန်လည်သတ်မှတ်ရန်",
    "auth.welcome": "ပြန်လည်ကြိုဆိုပါသည်",
    "auth.createAccount": "အကောင့်အသစ်ဖွင့်ရန်",
    "auth.resetAccess": "ဝင်ရောက်ခွင့် ပြန်လည်သတ်မှတ်ရန်",
    "auth.setNewPassword": "စကားဝှက်အသစ် သတ်မှတ်ရန်",
    "auth.secureWorkspace": "လုံခြုံစိတ်ချရသော Workspace",
    "auth.subtitle": "Email သို့မဟုတ် GitHub အသုံးပြု၍ သင်၏ Sketchware အရင်းအမြစ်များကို စီမံခန့်ခွဲပါ။",
    "auth.email": "Email",
    "auth.password": "စကားဝှက်",
    "auth.username": "အသုံးပြုသူအမည်",
    "auth.showPassword": "စကားဝှက်ပြမည်",
    "auth.hidePassword": "စကားဝှက်ဖျောက်မည်",
    "auth.forgotLink": "စကားဝှက် မေ့နေပါသလား?",
    "auth.github": "GitHub ဖြင့် ဆက်လုပ်ရန်",
    "auth.reset.step1": "သင်၏ Email ကိုရိုက်ထည့်ပြီး ပြန်လည်သတ်မှတ်ရန် လင့်ခ်တောင်းဆိုပါ",
    "auth.reset.step2": "သင်၏ Email ထဲတွင် ရောက်လာသည့် လင့်ခ်ကို ဖွင့်ပါ",
    "auth.reset.step3": "စကားဝှက်အသစ်ကို သတ်မှတ်ပါ",
    "auth.reset.send": "လင့်ခ်ပို့ရန်",
    "auth.reset.recoveryLink": "လင့်ခ်ဖွင့်ပြီးပြီလား? စကားဝှက်အသစ် သတ်မှတ်ပါ",
    "auth.reset.update": "စကားဝှက် အပ်ဒိတ်လုပ်မည်",
    "auth.reset.backSignIn": "အကောင့်ဝင်ရန်သို့ ပြန်သွားမည်",
    "appearance.title": "အပြင်အဆင်",
    "appearance.subtitle": "Theme နှင့် display ဆိုင်ရာ ရွေးချယ်မှုများ။ ဤစက်ပစ္စည်းအတွက် သိမ်းဆည်းထားပါမည်။",
    "appearance.language": "ဘာသာစကား",
    "appearance.languageHint": "English ကို မူလထားရှိသည်။",
    "appearance.sidebar": "ဘေးတန်း (Sidebar)",
    "appearance.sidebarHint": "Desktop ပေါ်တွင် Sidebar ကို icon-only မုဒ်သို့ ပြောင်းလဲနိုင်သည်။",
    "appearance.toggleSidebar": "Sidebar ပြောင်းလဲမည်",
    "landing.eyebrow": "Sketchware Pro အရင်းအမြစ် ပလက်ဖောင်း",
    "landing.hero": "Sketchware ပရောဂျက်ဖိုင်များ၊ Java ကုဒ်များ၊ Blocks၊ Libraries နှင့် Icons များကို စီမံနိုင်သော Workspace။",
    "dashboard.welcome": "ကြိုဆိုပါသည်",
    "dashboard.subtitle": "Sketchware Pro အရင်းအမြစ်များအတွက် စီမံခန့်ခွဲမှုစင်တာ။",
    "dashboard.loading": "Workspace ဖွင့်နေသည်...",
    "dashboard.stat.projects": "ပရောဂျက်ဖိုင်များ",
    "dashboard.stat.java": "Java ကုဒ်များ",
    "dashboard.stat.files": "ဖိုင်စုစုပေါင်း",
    "dashboard.stat.categories": "အမျိုးအစားများ",
    "java.codeName": "ကုဒ်အမည်",
    "java.description": "ဖော်ပြချက်",
    "java.descriptionPlaceholder": "ဤကုဒ်ကို ဘာအတွက်အသုံးပြုသလဲ?",
    "java.source": "Java Source Code",
    "java.uploadTitle": "Java ကုဒ်တင်သွင်းမည်",
    "java.editTitle": "Java ကုဒ်ပြင်ဆင်မည်",
    "java.detailTitle": "Java ကုဒ်အသေးစိတ်",
    "java.uploaded": "တင်သွင်းပြီးသည့်နေ့စွဲ",
    "resource.fileName": "ဖိုင်အမည်",
    "resource.description": "ဖော်ပြချက်",
    "resource.noMatch": "ဖိုင်မတွေ့ရှိပါ",
    "resource.noMatchHint": "ဖိုင်အသစ်တင်ပါ သို့မဟုတ် ရှာဖွေမှုစစ်ထုတ်ခြင်းများကို ပြန်လည်စစ်ဆေးပါ။",
    "upload.preparing": "တင်သွင်းရန် ပြင်ဆင်နေသည်...",
    "upload.session": "Session စစ်ဆေးနေသည်...",
    "upload.failed": "တင်သွင်းခြင်း မအောင်မြင်ပါ",
    "upload.complete": "တင်သွင်းခြင်း အောင်မြင်ပါသည်!",
    "upload.cancelled": "တင်သွင်းခြင်းကို ပယ်ဖျက်လိုက်ပါပြီ။"
  }
};





    
let currentLocale = localStorage.getItem("locale") || "en";

export function getLocale() {
  return currentLocale;
}

export function setLocale(locale) {
  currentLocale = STRINGS[locale] ? locale : "en";
  localStorage.setItem("locale", currentLocale);
  document.documentElement.lang = currentLocale === "my" ? "my" : "en";
}

export function t(key, vars = {}) {
  const table = STRINGS[currentLocale] || STRINGS.en;
  let text = table[key] ?? STRINGS.en[key] ?? key;
  Object.entries(vars).forEach(([name, value]) => {
    text = text.replaceAll(`{${name}}`, String(value));
  });
  return text;
}

export function languageSwitcherHtml(compact = false) {
  const options = [
    { id: "en", label: t("lang.en") },
    { id: "my", label: t("lang.my") }
  ];
  return `<div class="lang-switch${compact ? " lang-switch--compact" : ""}" role="group" aria-label="${t("appearance.language")}">
    ${options
      .map(
        (opt) =>
          `<button type="button" class="lang-switch-btn${currentLocale === opt.id ? " active" : ""}" data-action="set-locale" data-locale="${opt.id}">${opt.label}</button>`
      )
      .join("")}
  </div>`;
}

setLocale(currentLocale);
