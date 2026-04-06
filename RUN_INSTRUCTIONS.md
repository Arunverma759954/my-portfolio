# Portfolio Run Karne Ke Liye - Step by Step

## ❌ Problem
1. **"memory allocation failed"** - Node.js ko zyada RAM chahiye
2. **Multiple servers** - 3000, 3001, 3002... sab ports busy

## ✅ Solution (Bilkul ye steps follow karo)

### Step 1: Saare Node BAND karo (ZAROORI!)
1. **Ctrl + Shift + Esc** → Task Manager
2. **Details** tab → **node.exe** dhoondo
3. Har **node.exe** pe Right Click → **End task**
4. Cursor ke saare terminals band karo (trash icon)

### Step 2: Naya terminal kholo
- Sirf EK terminal - koi aur npm run dev nahi chalna chahiye

### Step 3: Ye commands chalao
```powershell
cd f:\arun-portfolio\arun-portfolio
npm install
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
npm run dev
```

### Step 4: WAIT karo (1-2 minute)
- Pehli compile me time lagta hai
- "✓ Compiled" aane tak refresh mat karo
- Phir browser me `http://localhost:3000` kholo

---

## Fix applied
- **4GB RAM** Node ko allocate ho chuka hai (cross-env se)
- Pehle sirf ~512MB tha - isliye crash hota tha
