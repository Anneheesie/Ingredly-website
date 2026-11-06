# Ingredly branding (website)

Bron: de officiële logo-kit `ingredly-logo-kit` (november 2026). De volledige kit,
inclusief handleiding (`CLAUDE-LOGO-INSTRUCTIES.md`, `README.md`), app- en store-iconen,
staat in de app-repo onder `~/ingredly-real/assets/brand/ingredly-logo-kit/`. Hier staan
alleen de mappen die de website nodig heeft: `logo/` en `web/`, in `public/brand/`.

> **Status:** fase 2 doorgevoerd op 2026-11-05 (nog niet gedeployed). Favicons, manifest,
> `index.html` en `IngredlyBrand.tsx` gebruiken de kit. De tabel hieronder beschrijft de
> uitgevoerde migratie.

## Officiële identiteit

Het Ingredly-logo bestaat uit **drie gelaagde bladeren met een "i"**, los of met het
woordmerk "ingredly" (Poppins Bold, lowercase, omgezet naar vectorvormen). De "i" en de
lijnen tussen de bladeren zijn uitsparingen en tonen altijd de ondergrond.

Het oude logo met drie horizontale balken (`public/favicon.svg`,
`src/brand/IngredlyBrand.tsx`) is daarmee **verouderd**.

## Twee kleurvarianten

| Laag | Variant A: logo (lichte ondergrond) | Variant B: donkere ondergrond en iconen |
|---|---|---|
| Achterste blad | `#7AA688` | `#2F7A4E` (`--brand-deep`) |
| Middelste blad | `#4A9D6C` (`--brand`) | `#4A9D6C` (`--brand`) |
| Voorste blad | `#2F5340` | `#E3F2E8` (`--brand-soft`) |
| Woordmerk | `#2F5340` | `#FFFFFF` |
| Achtergrond | geen; meestal `--canvas` `#F4FAF6` of wit | ink `#1C2B22` (alleen bij iconen) |

Overige kleuren in de kit: `#000000` en `#FFFFFF` voor de eenkleurige versies.
`theme-color` (manifest en meta-tag): `#2F5340`.

## Beslisregel

- Lichte ondergrond → **variant A**
- Donkere ondergrond (zoals de telefoonmockup `#0D1B13`, foto's, dark mode) → **variant B**
- Browsertab → `favicon.svg` (toont A en schakelt zelf naar B in dark mode)
- Eén kleur nodig → `ingredly-mark-black.svg` of `-white.svg`

## Bestanden in `public/brand/`

| Doel | Bestand |
|---|---|
| Logo met woordmerk, licht (A) | `logo/svg/ingredly-logo-horizontal.svg` |
| Beeldmerk, licht (A) | `logo/svg/ingredly-mark.svg` |
| Logo met woordmerk, donker (B) | `logo/svg/ingredly-logo-horizontal-white.svg` |
| Beeldmerk, donker (B) | `logo/svg/ingredly-mark-dark-bg.svg` |
| Gestapeld logo (A / B) | `logo/svg/ingredly-logo-stacked.svg` / `-stacked-white.svg` |
| Alleen woordmerk | `logo/svg/ingredly-wordmark.svg` |
| Eenkleurig | `logo/svg/ingredly-mark-black.svg`, `-white.svg`, `ingredly-logo-horizontal-black.svg` |
| PNG-versies (hoge resolutie) | `logo/png/` (zelfde namen, mark in 2048²) |
| Social sharing (og:image) | `logo/png/ingredly-logo-horizontal.png` op een lichte achtergrond |
| Favicon | `web/favicon.svg`, fallback `web/favicon.ico` |
| iPhone-beginscherm | `web/apple-touch-icon.png` (180²) |
| PWA-iconen | `web/icon-192.png`, `web/icon-512.png`, `web/icon-maskable-512.png` |
| Webmanifest | `web/site.webmanifest` |

Iconen en het manifest staan ook in de root van `public/`, zoals de handleiding
voorschrijft (het manifest verwijst naar `/icon-192.png` enzovoort).

## Regels voor gebruik

1. Gebruik alleen bestanden uit de kit. Teken of genereer het logo niet opnieuw en wijzig
   geen SVG-paden. Wordt het logo in code getekend, neem dan de paden letterlijk over uit
   `logo/svg/ingredly-mark.svg`, met `viewBox="0 0 1000 1000"` en `fill-rule="evenodd"`.
2. Voeg geen kleuren toe. Kleur geen losse bladeren om, en voeg geen randen, schaduwen of
   rotatie toe.
3. Nooit variant A op donker of variant B op licht.
4. Minimale grootte: beeldmerk 16 px, horizontale lockup 90 px breed.
5. Vrije ruimte: minstens twee keer de diameter van de punt van de "i" aan elke kant.
6. `public/brand/` bevat de originelen: niet bewerken.

## Migratie (fase 2)

| Huidig bestand of plek | Nieuw | Opmerking |
|---|---|---|
| `public/favicon.svg` | `web/favicon.svg` | Vervangt de cream-versie met balken |
| (ontbreekt) `public/favicon.ico`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `site.webmanifest` | uit `web/` | |
| `index.html` | Tags voor `icon` (svg en ico), `apple-touch-icon`, `manifest`, `theme-color` `#2F5340` | Er is nu alleen een svg-favicon; geen og:image |
| `src/brand/IngredlyBrand.tsx` → `IngredlyMark` | Paden uit `ingredly-mark.svg`, A/B-kleuren | Nu drie balken (`viewBox 0 0 100 100`) |
| `src/brand/IngredlyBrand.tsx` → `IngredlyWordmark` | `ingredly-wordmark.svg` of de horizontale lockup | Nu HTML-tekst "Ingredly" (hoofdletter, DM Sans) in plaats van het officiële lowercase woordmerk |
| `src/components/Logo.tsx` (header) | Variant A | Via `IngredlyLockupHorizontal` |
| `src/components/Footer.tsx` | Variant A | Footer-achtergrond is `--surface` (licht) |
| Oude kleuren `#BBC8B5`, `#6F9079`, `#F2EDDE` | Vervallen na de vervanging | Alleen in `IngredlyBrand.tsx` en `public/favicon.svg` |
