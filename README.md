# Dika's Portfolio

Personal portfolio website showcasing selected web development projects, experience, and technical journey. Built with Next.js, React, TypeScript, and Tailwind CSS, with a full-screen section-based layout designed for desktop and mobile browsing.

## Featured projects

### Gudang Marketing
An inventory and marketing warehouse management system for managing stock, product allocation, branch handovers, and monthly reporting.

**Stack:** PHP, MySQL, JavaScript, Excel export.

### Rekap PPBJ
A marketing dashboard for monitoring PPBJ submissions, budget composition, monthly trends, and detailed records. Integrates Google Sheets APIs with MySQL-backed data and reporting workflows.

**Stack:** Next.js, Google Sheets API, MySQL, Excel export.

Project descriptions in the portfolio UI are maintained in `app/page.tsx`. Update the project objects there when adding projects or changing screenshots.

## Highlights

- Four section navigation: Intro, Projects, Journey, and Contact.
- Full-screen presentation with keyboard, mouse-wheel, touch, and section-dot navigation.
- Responsive visual layout with custom typography and image-led project cards.
- Next.js Image optimization for the profile photo and project preview images.
- No backend or database is required for the current portfolio page.

## Technology

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- `next/image` and `next/font`

## Project structure

```text
app/
  page.tsx                  # Portfolio sections and project content
  layout.tsx                # Fonts and page metadata
  globals.css               # Global styles
public/
  images/
    profile.png             # Portfolio profile image
    projects/
      gudang-marketing.webp # Project preview
      rekap-ppbj.webp       # Project preview
```

## Run locally

Requirements: Node.js 20.9 or newer and npm.

```bash
git clone https://github.com/BetaBee2312/portfolio-dika.git
cd portfolio-dika
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

Use `npm run build` before `npm run start`.

## Customization

- Edit the `projects` array in `app/page.tsx` to add or update project information and technology tags.
- Edit the `history` array in the same file to update education, experience, or development milestones.
- Replace images under `public/images/` while preserving or updating their paths.
- Update `metadata` in `app/layout.tsx` to change the browser title and description.

## Deployment

The project can be deployed to a Node.js-compatible platform that supports Next.js. Configure the repository's build command as `npm run build` and start command as `npm run start`, or use a Next.js-aware hosting provider. A backend database is not needed for the current static content.

## AI-assisted development

This portfolio project has been developed with assistance from ChatGPT (OpenAI) for coding support, debugging, responsive UI iteration, and documentation. Git commits remain attributed to the account that publishes them.
