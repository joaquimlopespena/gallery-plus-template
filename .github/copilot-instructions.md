# Gallery Plus - AI Coding Guidelines

## Architecture Overview
- **Backend**: Fastify server with TypeScript, service-oriented architecture
- **Frontend**: React 19 + Vite + TailwindCSS 4, component library with tailwind-variants
- **Database**: JSON file-based storage (`data/db.json`) with custom DatabaseService
- **File Storage**: Images stored in `data/images/` with UUID-based filenames
- **API**: RESTful endpoints with Zod validation, CORS enabled for all origins

## Key Components & Data Flow
- **Services**: `DatabaseService` (CRUD on JSON), `ImageService` (file uploads), `PhotosService`, `AlbumsService`
- **Models**: `Photo`, `Album`, `PhotoOnAlbum` (many-to-many junction)
- **Routes**: Separate route files (`photos-routes.ts`, `albums-routes.ts`) with schema validation
- **Components**: Reusable UI components in `src/components/`, styled with tailwind-variants

## Development Workflow
- **Install**: `pnpm install`
- **Backend Dev**: `pnpm dev-server` (tsup watch + node server/dist/main.js)
- **Frontend Dev**: `pnpm dev` (Vite dev server)
- **Build**: `pnpm build` (builds server first, then frontend)
- **Run Production**: `pnpm run-server` (after build)

## Coding Patterns & Conventions

### Backend
- **Validation**: Use Zod schemas in `*-interfaces.ts`, derive TypeScript types with `z.infer<>`
- **Error Handling**: Try/catch in routes, return 400 for validation errors, 500 for server errors
- **File Uploads**: Use `@fastify/multipart`, validate extensions (jpg/jpeg/png), size limit 50MB
- **Static Files**: Images served from `/images/` prefix via `@fastify/static`
- **Service Injection**: Services instantiated in `main.ts` and passed to routes

### Frontend
- **Components**: Export variants using `tv()` from tailwind-variants, accept `VariantProps`
- **Styling**: Use Tailwind classes, combine with `cx()` from classnames for conditionals
- **Icons**: SVG imports as React components from `src/assets/icons/`
- **Forms**: Custom input components (`input-text.tsx`, `input-single-file.tsx`)

### File Organization
- **Server**: `server/` with subdirs for features (photos/, albums/), shared services/
- **Frontend**: `src/` with components/, assets/, main app files
- **Config**: Separate tsconfig files for app, node, server builds

## Common Tasks
- **Add Photo**: POST /photos with multipart file + title, albumsIds array
- **Filter Photos**: GET /photos?albumId=uuid&q=search
- **Manage Albums**: Photos can belong to multiple albums via photosOnAlbums table
- **Image URLs**: Served at `/images/{imageId}.{ext}` where imageId is UUID

## Dependencies & Tools
- **Build**: tsup for server bundling, Vite for frontend
- **Linting**: ESLint with React rules
- **Styling**: TailwindCSS v4 with custom design tokens (accent-brand, background-primary, etc.)
- **TypeScript**: Strict mode, separate configs for different environments