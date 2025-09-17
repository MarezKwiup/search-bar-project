## Smart Search UI A React + TypeScript project that implements a modern,  interactive search experience with filters, animations, and dynamic result rendering. It supports multiple item types (person, file, folder, image, video) with tailored UI, highlights, and contextual actions.


\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Features 

\* 🔎 Live Search -- Instant results with debounce + mock data

\* 🗂 Filter Bar -- Filter results by type (All, Files, People, Folders,
Images, Videos)

\* ⚡ Animated UI -- Smooth transitions powered by Framer Motion

\* ⚙️ Settings Modal -- Toggle which item types appear in results

\* 👤 Rich Item Cards --

\* Profile photos + status badges for people

\* File/folder/video/image previews with metadata

\* Copy link & open in new tab actions (shown on hover)

\* 🎨 Modern Design -- Built with TailwindCSS for clean styling

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Tech Stack 

\* React (with TypeScript) -- UI framework

\* Framer Motion -- Animations & transitions

\* TailwindCSS -- Styling

\* React Icons -- Icons

\* Mock Dataset -- Sample items for demonstration

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Getting Started 

1\. Clone the repo

git clone https://github.com/MarezKwiup/search-bar-project cd
smart-search-ui

2\. Install dependencies

npm install

3\. Run the dev server

npm run dev

4\. Open in browser

Visit 👉 http://localhost:5173

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Project Structure

src/

├── App.tsx                    # Main component (search bar + results)

├── components/

      ├── FilterBar.tsx         # Filter bar for switching views

      ├── ItemCard.tsx          # Card UI for search results

      └── SettingsModal.tsx     # Modal for filter toggles

├── data.ts                   # Mock dataset

├── search.ts                 # Simple search/filter logic

└── types.ts                  # Shared TypeScript types


\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Customization

Update data.ts with your own dataset

Modify search.ts to connect to a real backend / API

Extend ItemCard to support more item types or actions
