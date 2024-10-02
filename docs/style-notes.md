# Current State of Style

1. Partial for head includes links to several stylesheets:
    - `global.css` (contains variables to be reused across design) 
    - `main.css` (contains styling for body, header, footer, main container, and misc ui elements)
    - `util.css` - TODO - populate layout grid/flex layout rules to be reused across page 
    - `responsive.css` - NOT BUILD - media queries for common UI elements that will apply styling for common elements / break points. Typically this behavior would be handled by a CSS library. 

2. Global nav and footer are flex containers
3. Main content is a flex container with limited column rules
4. Example (primary) CTA button is found on new page with hover / active pseudo-classes. 
5. Hero section (contained in head partial) includes some flex layout behavior and data injection. If `img` url for the hero's is provided that will be used, or a fallback is provided. 



## Assets 
![mountain-brand-log](logo.png)

## Inspiration
### Theme
- [Frontend Mentor Suite Landing Page](https://www.frontendmentor.io/challenges/suite-landing-page-tj_eaU-Ra)

### Nav + Colors 
- [FEM - Scoot](https://www.frontendmentor.io/challenges/scoot-multipage-website-N76alNPRJ)

### Card for Index Page
- [FEM - Job Listing](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt)

### General Inspiration
- [Behance - Cycling App](https://www.behance.net/search/projects/cycling%20app?locale=en_US)