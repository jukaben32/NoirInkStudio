## Notas técnicas del equipo

### No pasar funciones de un Server Component a un Client Component (2026-08-22)

Si se construyen gráficos (recharts u otra librería, ya está en `package.json`
pero sin uso todavía) u otro componente `'use client'` que necesite un
formateador de valores (ej. "%", moneda), **nunca pasarle una función inline**
desde una página que sea Server Component:

```tsx
// MAL -- revienta con "Algo salió mal" (función no serializable)
<TrendChart valueFormatter={(v) => `${v}%`} />
```

Next.js no puede serializar funciones a través del límite servidor→cliente.
En su lugar, pasar un string plano y resolver el formateador *dentro* del
Client Component:

```tsx
// BIEN
<TrendChart valueFormat="percent" />
```

Encontrado y corregido en el proyecto hermano `n8n-school-expert-landingpage`
(página de Analíticas, confirmado con los logs de Vercel). Aplica el mismo
patrón aquí si se agrega esta funcionalidad.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
