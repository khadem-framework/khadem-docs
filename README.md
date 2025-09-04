# 📘 Khadem Documentation

Welcome to the official documentation for the **Khadem** backend framework for Dart.

Khadem is a modular, developer-friendly backend framework built to simplify API development using Dart, offering a clean, intuitive structure and a growing set of core features.

---

## 🚀 Live Documentation

📖 View the live docs:  
[https://khadem-framework.github.io/khadem-docs](https://khadem-framework.github.io/khadem-docs)

---

## 🧱 Structure

This site is statically generated using **Nuxt Content Docs** and deployed via **GitHub Pages**.

```
.
├── docs/            # Built static site for GitHub Pages
├── content/         # Main documentation markdown files
├── public/          # Static assets (favicon, images, etc.)
├── app.vue
├── nuxt.config.ts
└── ...
```

---

## 🛠️ Build Locally

To preview or build the docs locally:

```bash
# Install dependencies
npm install

# Run dev server (for local preview)
npm run dev

# Build static site
npx nuxi generate

# Copy built files to /docs for GitHub Pages
mkdir -p docs
cp -r .output/public/* docs/
```

> ⚠️ Ensure your `docs/` folder is committed and pushed to the `main` branch to enable GitHub Pages.

---

## 📦 Deployment

This documentation is deployed automatically using **GitHub Pages** from the `/docs` folder of the `main` branch.

To enable GitHub Pages:

1. Go to your repository on GitHub
2. Navigate to `Settings > Pages`
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/docs`
4. Save and wait for a few seconds. Your site will be available at:

```
https://khadem-framework.github.io/khadem-docs/
```

---

## 🤝 Contributing

We welcome contributions to improve the documentation!

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-topic`
3. Commit your changes: `git commit -am 'Add new topic'`
4. Push and create a pull request

---

## 📄 License

This documentation is open-sourced under the [MIT License](LICENSE).