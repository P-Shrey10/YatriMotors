# Dynamic Blog Page using Next.js & Tailwind CSS

<!-- Project Overview -->
This project is a dynamic blog page built with Next.js and Tailwind CSS. It fetches blog data from a mock API or static JSON file and displays it in a responsive layout. Users can view a list of blog posts, search for specific posts, and click on a post to see its full details. Users can also perform CRUD operations on the blog posts, but since there is no backend, the changes will not be stored permanently.

<!-- Features -->
### Landing Page:
- Data is not fetched but includes animation effects on text, SVG, and button.

### Blogs Page (Blog List Page):
- Fetch and display a list of blog posts from JSON data.
- Show title, summary, and date of each post with a "Read More" button or clickable card to navigate to the detail page.
- Responsive grid layout using Tailwind CSS.
- Skeleton UI for better user experience while loading.
- **CRUD Operations:**
  - **Create:** Users can add new blog posts.
  - **Read:** Users can view the list of blog posts and individual post details.
  - **Update:** Users can edit existing blog posts.
  - **Delete:** Users can remove blog posts.
  - Note: CRUD operations are performed locally and changes are not stored permanently due to the lack of a backend.

### Blog Post Detail Page:
- Dynamic route for each post (`/blogs/[slug]`).
- Display full content, title, and creation date.
- Styled using Tailwind CSS.

### Search Functionality:
- Search bar to filter posts by title.
- Case-insensitive, real-time filtering with debounce.
- Display "No posts found" if no matches.

### Pagination:
- Limit the number of posts per page (e.g., 5 posts per page).

### Error Handling (Bonus Feature):
- Show an error message if API fetch fails or no posts are available.

<!-- Technologies Used -->
- Next.js for server-side rendering and routing.
- Tailwind CSS for styling.
- React Hooks for state management.