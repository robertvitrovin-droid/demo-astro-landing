# Сайт для веломайстерні «Спиця» (демо, Astro)

> **Демо-проєкт для портфоліо.** Велосервіс «Спиця» вигаданий, контакти не справжні, відгуків і клієнтів немає.

Односторінковий лендинг для малого бізнесу: перший екран з пропозицією, послуги з цінами, «як ми працюємо», FAQ, запис.

- Статичний HTML (Astro), **0 KB JavaScript** у браузері, без зовнішніх шрифтів і трекерів; сторінка ~11 KB.
- Ілюстрація та іконки — inline SVG, немає важких зображень.
- Доступність: skip-link, семантичні landmarks, `aria-label`, видимий фокус, контраст тексту (перевірка Lighthouse), зони натискання ≥ 44px, `prefers-reduced-motion`, `<details>` для FAQ без JS.
- SEO: title/description, canonical, Open Graph, schema.org (`BicycleStore`), robots.txt.

**Живе демо:** https://robertvitrovin-droid.github.io/demo-astro-landing/

## Lighthouse
Умови: Lighthouse **12.8.2**, профіль mobile за замовчуванням (емуляція телефона, simulated throttling) і `--preset=desktop`,
локальна збірка через `astro preview` (до налаштування base-шляху для Pages), **2026-10-09**.
HTML-звіти: [mobile](https://robertvitrovin-droid.github.io/demo-astro-landing/lighthouse/mobile.report.html) · [desktop](https://robertvitrovin-droid.github.io/demo-astro-landing/lighthouse/desktop.report.html) (також у `lighthouse/`).
Accessibility 100 — автоматична перевірка Lighthouse, а не повний аудит WCAG.

| Профіль | Performance | Accessibility | Best Practices | SEO | LCP |
|---|---|---|---|---|---|
| Mobile | 100 | 100 | 100 | 100 | 0.7 s |
| Desktop | 100 | 100 | 100 | 100 | 0.2 s |

Звіти: `lighthouse/*.report.html|json`, скриншоти: `lighthouse/lighthouse-*-scores.png`
(на скриншотах вимкнено лише святкову анімацію-конфеті, яку Lighthouse показує при 100/100).
На реальному хостингу значення залежать від сервера й CDN.

## Запуск
```bash
npm install
npm run dev       # розробка
npm run build     # статичний dist/
npm run preview   # перевірка збірки на :4321
```
Скриншоти сайту: `screenshots/desktop-1440.png`, `screenshots/mobile-390.png`.
