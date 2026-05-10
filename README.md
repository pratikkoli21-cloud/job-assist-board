# Job Assist Board

A simple, elegant job application tracker to manage your job search process.

## Features

- 📝 **Track Applications** - Add new job applications with details
- 📊 **Kanban Board** - Organize applications by status (Applied, Under Review, Interviewing, Offered, Rejected)
- 💾 **Local Storage** - Data persists in your browser
- 📱 **Responsive Design** - Works on desktop and mobile
- 🔗 **Quick Links** - Save and access job listing URLs

## Getting Started

### Installation

```bash
npm install
```

### Development

Start the development server on `http://localhost:8080`:

```bash
npm run dev
```

### Build

Build for production:

```bash
npm run build
```

## Usage

1. Click "Add New Application" button
2. Fill in the job details:
   - Job Title (required)
   - Company Name (required)
   - Notes (optional)
   - Job Listing URL (optional)
3. Click "Add Application" to save
4. Drag applications between status columns or use the "Move →" button
5. Click "Delete" to remove an application
6. Click "Link 🔗" to open the job listing

## Status Flow

- **Applied** - Just submitted the application
- **Under Review** - Company is reviewing your application
- **Interviewing** - You've been selected for interview(s)
- **Offered** - You received an offer
- **Rejected** - Application was rejected

## Tech Stack

- React 18
- TypeScript
- Vite
- CSS3

## License

MIT
