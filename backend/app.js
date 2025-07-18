import apostrophe from 'apostrophe';

export default apostrophe({
  root: import.meta,
  shortName: 'apollo-pro',
  modules: {
    // Apostrophe module configuration
    // *******************************
    //
    // Most configuration occurs in the respective modules' directories.
    // See modules/@apostrophecms/page/index.js for an example.
    //
    // Any modules that are not present by default in Apostrophe must at least
    // have a minimal configuration here to turn them on: `moduleName: {}`

    // *********************************
    '@apostrophecms/vite': {},

    // `className` options set custom CSS classes for Apostrophe core widgets.
    '@apostrophecms/rich-text-widget': {},
    '@apostrophecms/image-widget': {},
    '@apostrophecms/video-widget': {},
    '@apostrophecms/asset': {},

    // Custom extensions
    // Make sure to set the `APOS_BASE_URL` environment variable to the base
    // URL of your Apostrophe site
    // Needed for the @apostrophecms-pro/seo-assistant module
    '@apostrophecms/seo': {},

    // Pro extensions
    // '@apostrophecms-pro/advanced-permission-group': {},
    // '@apostrophecms-pro/advanced-permission': {},
    // '@apostrophecms-pro/automatic-translation': {},
    // '@apostrophecms-pro/data-set': {},
    // '@apostrophecms-pro/data-set-widget': {},
    // '@apostrophecms-pro/document-versions': {},
    // '@apostrophecms-pro/doc-template-library': {},
    // '@apostrophecms-pro/palette' : {},
    // '@apostrophecms-pro/signup': {},

    // pieces
    article: {},
    author: {},

    // pages
    'default-page': {},
    'article-page': {},

    // widgets
    'grid-layout-widget': {},
    'accordion-widget': {},
    'card-widget': {},
    'hero-widget': {},
    'link-widget': {},
    'slideshow-widget': {},
    'rows-widget': {}
  }
});
