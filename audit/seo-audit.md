# SEO Audit — Fitmaster Gijón
**Fecha:** 2026-04-29  
**Auditor:** Claude (consultor SEO senior)  
**Scope:** Técnico · On-Page · Contenido · Local · E-E-A-T  

---

## TABLA RESUMEN EJECUTIVO

| # | Área | Hallazgo | Severidad | Impacto | Esfuerzo |
|---|------|----------|-----------|---------|---------|
| 1 | Técnico | Google Search Console sin verificar | 🔴 Crítico | Alto | Bajo |
| 2 | Schema | Person schema con alias "PabloAlv" en vez de "Pablo Álvarez" | 🔴 Crítico | Alto | Bajo |
| 3 | Contenido | Sin blog / sección de artículos | 🔴 Crítico | Muy alto | Alto |
| 4 | Contenido | Sin página dedicada `/pablo-alvarez/` | 🔴 Crítico | Alto | Medio |
| 5 | Schema | Sin `Service` schema en `/asesoramiento` | 🔴 Crítico | Alto | Bajo |
| 6 | Schema | Sin `Product` schema en `/tienda` | 🔴 Crítico | Alto | Medio |
| 7 | On-Page | Títulos duplican "Fitmaster" por template | 🟡 Medio | Medio | Bajo |
| 8 | On-Page | H1s sin valor SEO (copywriting > keyword) | 🟡 Medio | Alto | Medio |
| 9 | On-Page | `/asesoramiento` no menciona "Pablo Álvarez Campeón España" | 🟡 Medio | Alto | Bajo |
| 10 | Local | `areaServed` limitado a Gijón (no Asturias/España) | 🟡 Medio | Medio | Bajo |
| 11 | Local | Coordenadas geo aproximadas en LocalBusiness | 🟡 Medio | Bajo | Bajo |
| 12 | Schema | FAQPage solo en home, no en `/asesoramiento` | 🟡 Medio | Medio | Bajo |
| 13 | Técnico | Video hero sin schema `VideoObject` | 🟡 Medio | Bajo | Bajo |
| 14 | Técnico | No hay sitemap de imágenes | 🟡 Medio | Bajo | Bajo |
| 15 | Contenido | Sin páginas de categoría en tienda | 🟡 Medio | Alto | Medio |
| 16 | Local | Sin estrategia de reviews ni citaciones | 🟡 Medio | Alto | Medio |
| 17 | On-Page | URL `/sobre-nosotros` no captura búsquedas de "Pablo Álvarez" | 🟡 Medio | Medio | Bajo |
| 18 | Schema | `BreadcrumbList` ausente por página | 🟢 Mejora | Bajo | Bajo |
| 19 | Técnico | Fuentes de Google (no self-hosted con preload) | 🟢 Mejora | Bajo | Bajo |
| 20 | Contenido | Enlazado interno débil entre páginas comerciales | 🟢 Mejora | Medio | Bajo |

---

## 1. STACK TÉCNICO DETECTADO

| Componente | Tecnología | Estado |
|------------|------------|--------|
| Framework | Next.js 14.2.5 (App Router) | ✅ |
| Lenguaje | TypeScript + React 18 | ✅ |
| Estilo | Tailwind CSS | ✅ |
| Email | Resend API | ✅ |
| Fonts | Google Fonts via `next/font` (Montserrat + Open Sans) | ⚠️ |
| CMS | Ninguno — contenido hardcodeado | ⚠️ |
| Imágenes | Next/Image con AVIF/WebP | ✅ |
| Hosting | [VERIFICAR: probablemente Vercel] | — |
| CDN | [VERIFICAR: Vercel Edge si se confirma] | — |
| Analytics | **No detectado** | 🔴 |
| GSC | **No verificado** (código comentado en layout.tsx) | 🔴 |

---

## 2. CRAWL E INDEXACIÓN

### robots.ts ✅
```
User-agent: *
Allow: /
Disallow: /api/
Sitemap: https://fitmaster.es/sitemap.xml
```
Correcto. No hay rutas bloqueadas por error.

### sitemap.ts ⚠️
**Páginas incluidas:** 6 (home, asesoramiento, tienda, equipo, sobre-nosotros, contacto)

| URL | Priority | changeFreq | Estado |
|-----|----------|------------|--------|
| / | 1.0 | monthly | ✅ |
| /asesoramiento | 0.9 | monthly | ✅ |
| /tienda | 0.9 | weekly | ✅ |
| /equipo | 0.8 | monthly | ✅ |
| /sobre-nosotros | 0.7 | yearly | ⚠️ Debería ser 0.8 (E-E-A-T clave) |
| /contacto | 0.8 | yearly | ✅ |

**Ausencias críticas:**
- No hay sitemap de imágenes (`<image:image>` tags)
- No hay entrada para futuro blog (`/blog/*`)
- No hay URL para `/pablo-alvarez/` (pendiente creación)

### Canonicals ✅
Todas las páginas tienen `alternates.canonical` explícito. No hay riesgo de contenido duplicado.

### Hreflang
No implementado. **Recomendación:** añadir `hreflang="es-ES"` y `hreflang="x-default"` apuntando a `https://fitmaster.es`. No justifica LATAM por ahora.

### Google Search Console 🔴
```typescript
// layout.tsx línea ~60
verification: {
  // google: 'TU_CODIGO_GOOGLE_SEARCH_CONSOLE',  // COMENTADO — BLOQUEANTE
},
```
**Sin GSC no hay datos de impresiones, clics, cobertura de índice ni errores de crawl. Prioridad #1.**

---

## 3. CORE WEB VITALS (estimado — sin datos reales de GSC)

| Métrica | Home | Asesoramiento | Tienda | Contacto | Riesgo |
|---------|------|---------------|--------|----------|--------|
| **LCP** | ⚠️ | 🟢 | 🟢 | 🟢 | `videohome.mp4` en mobile puede retrasar LCP |
| **INP** | 🟢 | 🟢 | 🟢 | 🟢 | Sin JS pesado, carousel usa `useState` simple |
| **CLS** | 🟢 | 🟢 | 🟢 | 🟢 | Fuentes con `display: swap` pueden causar FOUT mínimo |

**Riesgo principal:** `videohome.mp4` en el hero mobile (background video) sin `preload` explícito ni poster frame. Puede ser el LCP en móviles lentos.

**Optimizaciones ya implementadas:**
- `priority={i < 4}` en imágenes above-the-fold ✅
- AVIF/WebP en `next/image` ✅
- `minimumCacheTTL: 86400` en imágenes ✅
- `Cache-Control: public, max-age=31536000, immutable` en assets estáticos ✅
- Fuentes con `display: swap` ✅

---

## 4. ON-PAGE POR PLANTILLA

### 4.1 Home (`/`)

| Elemento | Valor actual | Evaluación |
|----------|-------------|------------|
| Title | "Fitmaster Gijón — Método, Disciplina, Resultados" | 🟡 No explota "Campeón de España" ni "suplementos" |
| Meta desc | "Ecosistema fitness en Gijón: asesoramiento personalizado, suplementación Life Pro y seguimiento real..." | 🟡 Buena pero genérica |
| H1 | "Deja de entrenar sin dirección." | 🔴 Cero valor keyword — puro copywriting |
| OG Image | `/opengraph-image` (ruta dinámica) | ✅ |
| Schema | LocalBusiness + Organization + WebSite + Person + FAQ | ✅ |
| Keyword principal potencial | "fitmaster gijón" / "entrenador personal gijón" | — |

**Problema H1:** El H1 de la home ("Deja de entrenar sin dirección.") es impactante en UX pero vacío en SEO. Google lo usa como señal primaria del tema de la página.

**Recomendación title:**
```
Fitmaster Gijón | Asesoramiento Fitness y Suplementación · Pablo Álvarez
```

---

### 4.2 Asesoramiento (`/asesoramiento`) ← Página más importante

| Elemento | Valor actual | Evaluación |
|----------|-------------|------------|
| Title | "Asesoramiento Fitness Personalizado en Gijón" | 🟡 Correcto pero no diferencia de la competencia |
| Meta desc | "Plan de entrenamiento, nutrición y seguimiento real en Gijón..." | 🟢 Buena |
| H1 | [VERIFICAR en código completo] | — |
| Schema | ❌ Sin `Service` schema | 🔴 Crítico |
| FAQPage | ❌ No implementado aquí (solo en home) | 🔴 |
| Mention "Campeón España" | Ausente en title/desc | 🔴 E-E-A-T perdido |

**Recomendación title:**
```
Asesoría de Cambio Físico en Gijón | Pablo Álvarez, Campeón de España
```
Esto captura tanto "asesoría fitness gijón" como búsquedas de marca "Pablo Álvarez".

---

### 4.3 Tienda (`/tienda`)

| Elemento | Valor actual | Evaluación |
|----------|-------------|------------|
| Title | "Tienda de Suplementación Deportiva en Gijón" | ✅ |
| Meta desc | "Suplementación Life Pro seleccionada con criterio en Gijón..." | ✅ |
| Productos individuales | ❌ Sin páginas de producto | 🔴 |
| Categorías | ❌ Sin `/tienda/proteinas/`, `/tienda/creatina/` | 🔴 |
| Schema Product | ❌ Ausente | 🔴 |
| Keywords locales | "proteínas Gijón", "creatina Gijón" | ⚠️ En keywords pero sin página destino |

**Gap enorme:** La tienda es una sola página genérica. Un usuario que busca "comprar creatina Gijón" no tiene una página específica donde aterrizar.

---

### 4.4 Equipo (`/equipo`)

| Elemento | Valor actual | Evaluación |
|----------|-------------|------------|
| Title | "Equipo de Competición Fitmaster \| Atletas Gijón \| Fitmaster" | 🟡 "Fitmaster" duplicado por template |
| Prioridad comercial | Baja (no genera conversiones directas) | — |
| Valor E-E-A-T | Alto (demuestra track record del método) | 🟢 |

**Corrección title:** Eliminar "Fitmaster" del title propio para que el template no lo duplique.

---

### 4.5 Sobre Nosotros (`/sobre-nosotros`) ← Página E-E-A-T clave

| Elemento | Valor actual | Evaluación |
|----------|-------------|------------|
| Title | "Sobre Mí — PabloAlv, Fundador de Fitmaster Gijón" | 🔴 "PabloAlv" es handle social, no nombre real |
| URL | `/sobre-nosotros` | 🟡 No captura "Pablo Álvarez" como keyword |
| Person schema (global) | `name: "PabloAlv"` | 🔴 Google no conecta "PabloAlv" con "Pablo Álvarez" |
| Campeonatos/fechas | Sin datos concretos verificables | 🟡 [VERIFICAR] |
| `alumniOf`, `hasCredential` | Ausentes en schema | 🟡 |
| `sameAs` en Person | Solo Instagram de Fitmaster, no perfil personal | 🟡 |

**Esta página debe trabajar como la pieza central de E-E-A-T.** Google valora la autoridad real demostrable. "Campeón de España" es un diferenciador de primer nivel — debe estar en el title, H1, schema y en el cuerpo de texto con federación y año exactos.

---

### 4.6 Contacto (`/contacto`)

| Elemento | Valor actual | Evaluación |
|----------|-------------|------------|
| Title (con template) | "Contacto \| Fitmaster Gijón — Asesoramiento y Suplementación \| Fitmaster" | 🔴 "Fitmaster" dos veces |
| NAP consistency | ✅ Coherente con schema | ✅ |
| Google Maps embed | ✅ Presente | ✅ |
| Horarios | ✅ Presentes | ✅ |

---

## 5. SCHEMA ACTUAL vs NECESARIO

| Schema | Estado | Notas |
|--------|--------|-------|
| `LocalBusiness` (HealthClub) | ✅ Implementado | Coordenadas aproximadas — verificar |
| `Organization` | ✅ Implementado | |
| `WebSite` + `SearchAction` | ✅ Implementado | |
| `Person` (Pablo Álvarez) | ⚠️ Implementado con errores | `name: "PabloAlv"` — debe ser nombre real |
| `FAQPage` | ⚠️ Solo en home | Debe estar también en `/asesoramiento` |
| `Service` | ❌ Ausente | Necesario en `/asesoramiento` |
| `Product` | ❌ Ausente | Necesario en `/tienda` y fichas de producto |
| `BreadcrumbList` | ❌ Ausente por página | Global no es suficiente para Google |
| `VideoObject` | ❌ Ausente | `videohome.mp4` debería tener schema |
| `Review` / `AggregateRating` | ❌ Ausente | Reviews de Google podrían alimentar esto |

### Errores en Person schema
```json
// ACTUAL (incorrecto):
{
  "name": "PabloAlv",           // ← handle social, no nombre
  "sameAs": ["https://instagram.com/fitmastergijon"],  // ← cuenta empresa, no personal
  "url": "https://fitmaster.es/sobre-nosotros"
}

// CORRECTO:
{
  "name": "Pablo Álvarez",
  "givenName": "Pablo",
  "familyName": "Álvarez",        // [VERIFICAR: apellido completo]
  "sameAs": [
    "https://instagram.com/fitmastergijon",
    "https://instagram.com/[VERIFICAR: perfil personal Pablo]"
  ],
  "award": ["Campeón de España de Culturismo [VERIFICAR: año y federación]"],
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "name": "Entrenador Personal Certificado [VERIFICAR: titulación]"
  }
}
```

---

## 6. CONTENIDO: ANÁLISIS DE GAPS

### Páginas existentes
| URL | Palabras (estimado) | Intención | Valor comercial |
|-----|---------------------|-----------|-----------------|
| `/` | ~500 | Branded / Navegacional | Alto |
| `/asesoramiento` | ~800 | Transaccional | 🔥 Máximo |
| `/tienda` | ~600 | Transaccional | Alto |
| `/equipo` | ~500 | Informacional | Medio |
| `/sobre-nosotros` | ~700 | Branded / E-E-A-T | Alto |
| `/contacto` | ~300 | Navegacional | Alto |

### Páginas que NO existen (gaps enormes)

| URL propuesta | Keyword objetivo | Volumen estimado | Prioridad |
|---------------|-----------------|------------------|-----------|
| `/pablo-alvarez/` | "Pablo Álvarez entrenador" / "Pablo Álvarez culturismo" | Medio-bajo | 🔥 Alta |
| `/blog/` | Keywords informacionales | Alto | 🔥 Alta |
| `/tienda/proteinas/` | "proteínas Gijón" / "comprar proteínas Asturias" | Medio | Alta |
| `/tienda/creatina/` | "creatina Gijón" / "creatina Life Pro" | Medio | Alta |
| `/tienda/pre-entreno/` | "pre-entreno Gijón" | Bajo-Medio | Media |
| `/asesoramiento-online/` | "asesoramiento fitness online España" | Alto | Media |

### Canibalización detectada
- `/` y `/asesoramiento` pueden competir por "asesoramiento fitness Gijón" — necesitan diferenciación temática clara.
- `/sobre-nosotros` y `/asesoramiento` pueden competir por "entrenador personal Gijón" — la de asesoramiento debe ganar.

### Thin content
- `/contacto` — ~300 palabras, pero es aceptable para una página de contacto.
- No hay páginas con thin content crítico por ahora.

---

## 7. LOCAL SEO

### NAP (Name, Address, Phone) — Consistencia
| Fuente | Nombre | Dirección | Teléfono | Estado |
|--------|--------|-----------|----------|--------|
| schema LocalBusiness | Fitmaster / Fitmaster Gijón | Avenida de Portugal, 9, Bajo, 33207 Gijón | +34722624740 | ✅ |
| Footer web | Avd Portugal, 9, Bajo, 33207 Gijón | 722 624 740 | ✅ | ✅ |
| Página /contacto | Avd Portugal, 9, Bajo, 33207 Gijón | 722 624 740 | ✅ | ✅ |
| Google Business Profile | [VERIFICAR] | [VERIFICAR] | [VERIFICAR] | ❓ |

⚠️ El nombre en schema es `"Fitmaster"` y `legalName: "Fitmaster Gijón"` — verificar que en GBP sea exactamente igual.

### Coordenadas geo
```json
"geo": { "latitude": 43.535, "longitude": -5.675 }
```
**Coordenadas redondeadas (aproximadas).** Usar coordenadas exactas de Google Maps para Avenida de Portugal 9, Gijón.

### `areaServed` — Limitación
```json
"areaServed": { "@type": "City", "name": "Gijón" }
```
El asesoramiento se vende online a toda España. Expandir:
```json
"areaServed": [
  { "@type": "City", "name": "Gijón" },
  { "@type": "AdministrativeArea", "name": "Asturias" },
  { "@type": "Country", "name": "España" }
]
```

### Google Business Profile — Checklist pendiente
- [ ] Verificar que el negocio esté verificado en GBP
- [ ] Categoría principal: "Tienda de artículos deportivos" + "Entrenador personal"
- [ ] Fotos: interior tienda, productos, Pablo con clientes, logos
- [ ] Posts semanales (nuevos productos, resultados clientes, consejos)
- [ ] Sección Preguntas y Respuestas (Q&A) preescrita
- [ ] Responder a todas las reseñas existentes
- [ ] Activar "productos" con catálogo Life Pro

### Citaciones locales — Pendiente construcción
| Directorio | URL | Estado |
|------------|-----|--------|
| Páginas Amarillas | paginasamarillas.es | [VERIFICAR] |
| Yelp España | yelp.es | [VERIFICAR] |
| Bing Places | bingplaces.com | [VERIFICAR] |
| Apple Maps | mapsconnect.apple.com | [VERIFICAR] |
| Foursquare | foursquare.com | [VERIFICAR] |
| TheFork / TripAdvisor | — | N/A (no restaurante) |
| Directorios fitness Asturias | fitnessgijón.es / asturias.es | [INVESTIGAR] |

---

## 8. BACKLINKS

**Sin acceso a Ahrefs/SEMrush — análisis pendiente.**

Señales observables:
- Instagram @fitmastergijon — única red social mencionada en sameAs
- Sin blog propio (por tanto, sin link bait de contenido)
- Sin menciones de prensa deportiva detectadas en código

**Estrategia recomendada (fase 3):**
1. Press release en medios deportivos asturianos sobre el Campeón de España local
2. Colaboraciones con gimnasios de Gijón/Asturias
3. Guest posting en blogs de fitness españoles
4. Menciones de Life Pro Nutrition (ya son distribuidores)

---

## 9. COMPETIDORES EN GIJÓN/ASTURIAS — GAP ANALYSIS

*[VERIFICAR con búsquedas reales en Google.es — datos a contrastar]*

| Competidor potencial | Tipo | Debilidad explotable |
|---------------------|------|---------------------|
| Tiendas de suplementos genéricas en Gijón | Tienda | Sin asesoramiento personalizado, sin E-E-A-T |
| Coaches fitness en Asturias | Servicio | Sin credencial "Campeón de España" |
| Amazon/Myprotein | E-commerce | Sin presencia local, sin prueba de sabores, sin asesoramiento |
| Gimnasios con PT en Gijón | Servicio | PT genérico, sin autoridad competitiva |

**Diferenciador imbatible de Fitmaster:** La combinación Campeón de España + tienda física + asesoramiento online + equipo de competición no la tiene nadie en Asturias. Hay que gritarlo en todas las páginas.

---

## 10. QUICK WINS (implementables en < 1 día, alto impacto)

| # | Acción | Archivo | Impacto SEO | Tiempo |
|---|--------|---------|-------------|--------|
| QW-1 | Descomentar código GSC verification + añadir código real | `app/layout.tsx` | 🔴 Crítico | 5 min |
| QW-2 | Cambiar `name: "PabloAlv"` → `name: "Pablo Álvarez"` en Person schema | `components/JsonLd.tsx` | 🔴 Alto | 5 min |
| QW-3 | Añadir `Service` schema en `/asesoramiento` | `app/asesoramiento/page.tsx` | 🔴 Alto | 20 min |
| QW-4 | Fix titles duplicando "Fitmaster": `/equipo`, `/sobre-nosotros`, `/contacto` | 3 page.tsx | 🟡 Medio | 10 min |
| QW-5 | Actualizar title `/asesoramiento` para incluir "Pablo Álvarez Campeón España" | `app/asesoramiento/page.tsx` | 🟡 Alto | 5 min |
| QW-6 | Actualizar title `/sobre-nosotros` con nombre real (no "PabloAlv") | `app/sobre-nosotros/page.tsx` | 🟡 Alto | 5 min |
| QW-7 | Expandir `areaServed` en LocalBusiness a Asturias + España | `components/JsonLd.tsx` | 🟡 Medio | 5 min |
| QW-8 | Añadir `FAQPage` schema en `/asesoramiento` | `app/asesoramiento/page.tsx` | 🟡 Medio | 20 min |
| QW-9 | Coordenadas exactas Google Maps en LocalBusiness | `components/JsonLd.tsx` | 🟡 Bajo | 5 min |
| QW-10 | Añadir `hreflang es-ES` en layout | `app/layout.tsx` | 🟢 Bajo | 5 min |

---

## RESUMEN BASELINE (métricas a medir en 30/60/90 días)

Una vez conectado GSC, registrar en día 0:

| Métrica | Baseline (día 0) | Objetivo 90 días |
|---------|-----------------|-----------------|
| Impresiones/mes (GSC) | — | +300% |
| Clics/mes (GSC) | — | +200% |
| Posición media (GSC) | — | < 20 |
| Keywords en top 10 | — | 15+ |
| Keywords en top 3 | — | 3+ |
| Core Web Vitals — LCP (home) | — | < 2.5s |
| Core Web Vitals — CLS | — | < 0.1 |
| Páginas indexadas | 6 | 20+ (con blog) |
| Reseñas Google | [VERIFICAR actual] | +10 nuevas |

---

## PRÓXIMOS PASOS

1. **Confirmar datos de Pablo** necesarios para corregir schema:
   - Nombre completo real (¿Pablo Álvarez [apellidos]?)
   - Año y federación del Campeonato de España
   - Titulación como entrenador (TAFAD, INEFC, etc.)
   - Perfil de Instagram personal (no solo el de Fitmaster)
   - Código de verificación de Google Search Console

2. **Confirmar prioridad de implementación** — ¿empezamos por Quick Wins o por crear `/pablo-alvarez/`?

3. **Decisión editorial** — ¿Se va a crear blog? Es la palanca SEO de mayor ROI a largo plazo.

---

*Informe generado para uso interno de Fitmaster Gijón. No publicar.*
