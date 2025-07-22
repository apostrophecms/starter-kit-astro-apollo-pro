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

    // helpers
    // Adds OpenGraph tags
    '@apostrophecms/open-graph': {},
    // Adds SEO Fields
    '@apostrophecms/seo': {},

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
    'rows-widget': {},

    /*
    ==========================
    OPTIONAL PRO MODULES
    To enable a module, remove the `//` in front of its name and configuration.
    For example:

      // @apostrophecms-pro/seo-assistant: {},

    becomes

      @apostrophecms-pro/seo-assistant: {},

    Some modules require options, such as credentials or provider config.
    ==========================
    */

    /*
      ℹ️ For Advanced Permissions both these modules should be uncommented
    */
    // '@apostrophecms-pro/advanced-permission-group': {},
    // '@apostrophecms-pro/advanced-permission': {},

    /*
      ℹ️ Automatic translations is needed for both SEO Assistant
        and Import Export Translations
      ℹ️ Set `enabled: false` to use the manual Import Export Translations
      ℹ️ Uncomment *one* of the desired `provider` options
        and also uncomment the corresponding provider extension
    */
    // '@apostrophecms-pro/automatic-translation': {
      // options: {
        // enabled: true,
        // provider: 'deepl',
        // provider: 'google',
        //  provider: 'azure'
      // }
    // },
    // '@apostrophecms-pro/automatic-translation-deepl': {},
    // '@apostrophecms-pro/automatic-translation-google': {},
    // '@apostrophecms-pro/automatic-translation-azure': {},
    // '@apostrophecms-pro/import-export-translation': {}
    // '@apostrophecms/seo-assistant': {},

    // '@apostrophecms-pro/signup': {},

    /* ℹ️ Both Data Set and Data Set Widget are needed
          for adding and visualizing csv data
    */
    // '@apostrophecms-pro/data-set': {},
    // '@apostrophecms-pro/data-set-widget': {},

    // '@apostrophecms-pro/document-versions': {},
    // '@apostrophecms-pro/doc-template-library': {},
    '@apostrophecms-pro/palette': {},
    '@apostrophecms/favicon': {}
  }
});
