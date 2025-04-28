# CLAUDE.md - Bourbon Project Guidelines

## Commands
- `bun dev` - Start the development server (turbopack enabled)
- `bun build` - Build the application
- `bun start` - Start the production server
- `bun lint` - Run ESLint

## Code Style

### Imports & Exports
- Use named exports for components
- Sort imports: built-in Node modules → external modules → internal modules
- Use absolute imports with `@/*` path alias

### TypeScript
- Prefer explicit type definitions over `any`
- Use `Readonly<T>` for React props
- Add JSDoc comments for complex functions

### Component Structure
- Use functional components with arrow functions
- Organize files by feature in the `/app` directory following Next.js 13+ conventions
- Name files according to their routing purpose (page.tsx, layout.tsx)

### Formatting
- Spaces: 2
- Quotes: double
- Semicolons: required
- Trailing commas: required in multi-line
- Use Tailwind for styling with proper class organization

### Error Handling
- Use try/catch blocks for async operations
- Display appropriate error messages to users