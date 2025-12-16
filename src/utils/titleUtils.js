import { routeTitles } from "./constants/routeConstants";

  
  export const getTitle = (pathname) => {
    // Check for exact match for static routes
    const exactMatch = routeTitles.find(route => pathname === route.path);
    if (exactMatch) return exactMatch.title;
    
    // Check for parent route matches (e.g., dynamic routes)
    const parentMatch = routeTitles.find(route => pathname.startsWith(route.path));
    if (parentMatch) return parentMatch.title;
  
    // Default title
    return 'Welcome, Name';
  };
  