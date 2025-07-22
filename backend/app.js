import apostrophe from 'apostrophe';

// Helper function to get translation and SEO modules
const getTranslationAndSeoModules = () => {
  const entries = [];

  const hasOpenAI = process.env.OPENAI_API_KEY;
  const deepl = process.env.APOS_DEEPL_API_SECRET;
  const google = process.env.APOS_GOOGLE_API_SECRET;
  const azure = process.env.APOS_AZURE_API_SECRET;

  const translationEnabled = !!(deepl || google || azure);

  // More explicit approach for provider selection
  let translationProvider = null;
  if (deepl) {
    translationProvider = 'deepl';
  } else if (google) {
    translationProvider = 'google';
  } else if (azure) {
    translationProvider = 'azure';
  }

  if (hasOpenAI || translationEnabled) {
    // Always comes first if any of the modules are present
    entries.push([
      '@apostrophecms-pro/automatic-translation',
      {
        options: {
          enabled: translationEnabled,
          ...(translationProvider && { provider: translationProvider })
        }
      }
    ]);

    if (translationProvider) {
      entries.push([
        `@apostrophecms-pro/automatic-translation-${translationProvider}`,
        {}
      ]);
    }

    // Only add import-export-translation when automatic translation
    // is disabled (manual mode)
    if (!translationEnabled) {
      entries.push([ '@apostrophecms-pro/import-export-translation', {} ]);
    }
  }

  if (hasOpenAI) {
    entries.push([ '@apostrophecms-pro/seo-assistant', {
      options: {
        provider: 'openai'
      }
    } ]);
    entries.push([ '@apostrophecms-pro/seo-assistant-openai', {} ]);
  }

  return Object.fromEntries(entries);
};

export default apostrophe({
  root: import.meta,
  shortName: 'apollo-pro',
  baseUrl: process.env.APOS_BASE_URL || 'http://localhost:4321',
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

    '@apostrophecms/express': {
      options: {
        session: {
          secret: 'CHANGEME'
        }
      }
    },

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
    // Adds a page favicon
    '@apostrophecms/favicon': {},

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
    Some modules require options, such as credentials or provider config.
    ==========================
    */

    /*
      ℹ️ For Advanced Permissions
    */
    '@apostrophecms-pro/advanced-permission-group': {},
    '@apostrophecms-pro/advanced-permission': {},

    /*
      ℹ️ The `@apostrophecms-pro/automatic-translation` module is needed
        for both SEO Assistant and Import Export Translations modules
      ℹ️ The provider will be set automatically by the environment variable
        and the helper method above. See the repo README for details
      ℹ️ The `@apostrophecms-pro/seo-assistant` requires that the
        `OPENAI_API_KEY` environment variable be set
      ℹ️ The `@apostrophecms-pro/import-export-translation` doesn't require a key
        
    */
    ...getTranslationAndSeoModules(),

    '@apostrophecms-pro/signup': {},

    /* ℹ️ Both Data Set and Data Set Widget are needed
          for adding and visualizing csv data
    */
    '@apostrophecms-pro/data-set': {},
    '@apostrophecms-pro/data-set-widget': {},

    '@apostrophecms-pro/document-versions': {},
    '@apostrophecms-pro/doc-template-library': {},
    '@apostrophecms-pro/palette': {}
  }
});
