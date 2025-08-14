const funColors = [ '#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51' ];
const neutralColors = [ '#f8f9fa', '#e9ecef', '#dee2e6', '#ced4da', '#adb5bd', '#6c757d', '#495057', '#343a40', '#212529' ];
const headings = [ 'h1', 'h2', 'h3', 'h4', 'h5', 'p' ];
const weights = [ '300', '400', '500', '600' ];
const fontFams = [
  'Inter Variable',
  'Garamond',
  'monospace',
  'cursive',
  'fantasy'
];
const headingsStyles = {};
headings.forEach(heading => {
  headingsStyles[`${heading}Font`] = {
    type: 'select',
    label: `${heading.toUpperCase()} Font`,
    selector: `.${heading}`,
    important: true,
    property: 'font-family',
    choices: fontFams.map((f) => ({
      label: f.toUpperCase(),
      value: f
    }))
  };
  headingsStyles[`${heading}SizeDesktop`] = {
    type: 'range',
    important: true,
    label: `${heading.toUpperCase()} Size (Desktop)`,
    selector: `.${heading}`,
    property: 'font-size',
    mediaQuery: '(770px <= width <= 9999px)',
    min: 14,
    max: 144,
    step: 1,
    unit: 'px'
  };
  headingsStyles[`${heading}SizeTablet`] = {
    type: 'range',
    important: true,
    label: `${heading.toUpperCase()} Size (Tablet)`,
    selector: `.${heading}`,
    property: 'font-size',
    mediaQuery: '(480px <= width <= 769px)',
    min: 14,
    max: 144,
    step: 1,
    unit: 'px'
  };
  headingsStyles[`${heading}SizeMobile`] = {
    type: 'range',
    important: true,
    mediaQuery: '(0px <= width <= 479px)',
    label: `${heading.toUpperCase()} Size (Mobile)`,
    selector: `.${heading}`,
    property: 'font-size',
    min: 14,
    max: 144,
    step: 1,
    unit: 'px'
  };

  headingsStyles[`${heading}Weight`] = {
    type: 'select',
    important: true,
    label: `${heading.toUpperCase()} Weight`,
    selector: `.${heading}`,
    property: 'font-weight',
    choices: weights.map((f) => ({
      label: f.toUpperCase(),
      value: f
    }))
  };
  headingsStyles[`${heading}Color`] = {
    type: 'color',
    important: true,
    label: `${heading.toUpperCase()} Color`,
    selector: `.${heading}`,
    property: 'color',
    options: {
      presetColors: neutralColors
    }
  };
  headingsStyles[`${heading}LH`] = {
    type: 'range',
    important: true,
    label: `${heading.toUpperCase()} Line Height`,
    selector: `.${heading}`,
    property: 'line-height',
    min: 0.9,
    max: 2,
    step: 0.1,
    unit: ''
  };
  headingsStyles[`${heading}LS`] = {
    type: 'range',
    important: true,
    label: `${heading.toUpperCase()} Letter Spacing`,
    selector: `.${heading}`,
    property: 'letter-spacing',
    min: -5,
    max: 10,
    step: 0.5,
    unit: 'px'
  };
});

export default {
  // headings
  ...headingsStyles,
  // header
  headerBackgroundColor: {
    type: 'color',
    label: 'Header Background',
    selector: [
      '.navbar',
      '.navbar-dropdown',
      '.navbar-dropdown .navbar-item:not(.is-active, .is-selected)',
      '.navbar-menu'
    ],
    property: 'background-color',
    important: true,
    options: {
      presetColors: neutralColors
    }
  },
  headerTransparency: {
    type: 'range',
    label: 'Header Transparency',
    help: '0 is fully transparent, 100 is solid',
    selector: '.navbar',
    property: 'opacity',
    min: 0,
    max: 1,
    step: 0.05,
    def: 1
  },
  headerTextColor: {
    type: 'color',
    label: 'Header Text Color',
    important: true,
    selector: [
      '.navbar .navbar-link',
      '.navbar .navbar-link::after',
      '.navbar-link:not(.is-arrowless)::after',
      '.navbar .navbar-item',
      '.navbar .navbar-brand-text'
    ],
    help: 'Choose the color for navigation text',
    property: [ 'color', 'border-color' ],
    options: {
      presetColors: neutralColors
    }
  },
  headerActiveColor: {
    type: 'color',
    label: 'Active Link Color',
    help: 'Color for the currently active navigation item',
    property: 'background-color',
    selector: '.navbar-item.is-active',
    options: {
      presetColors: funColors
    }
  },
  headerHoverColor: {
    type: 'color',
    label: 'Link Hover Color',
    help: 'Color for the navigation item when hovered over',
    selector: [
      '.navbar-item:hover',
      '.navbar-link:hover',
      '.navbar-dropdown .navbar-item:not(.is-active, .is-selected):hover'
    ],
    property: 'background-color',
    important: true,
    options: {
      presetColors: funColors
    }
  },
  headerDropdownTextColor: {
    type: 'color',
    important: true,
    label: 'Header Dropdown Text Color',
    selector: '.navbar-dropdown .navbar-item',
    help: 'Choose the color for navigation text',
    property: 'color',
    options: {
      presetColors: neutralColors
    }
  },
  headerMobileNavbarTextColor: {
    type: 'color',
    important: true,
    label: 'Mobile Nav Text Color',
    selector: '.navbar-burger',
    property: 'color',
    options: {
      presetColors: neutralColors
    }
  },

  // footer
  footerBackgroundColor: {
    type: 'color',
    label: 'Footer background color',
    selector: '.footer-modern',
    property: 'background-color',
    options: {
      presetColors: funColors
    }
  },
  footerTextColor: {
    type: 'color',
    label: 'Footer text color',
    selector: '.footer-modern',
    property: 'color',
    options: {
      presetColors: neutralColors
    }
  },
  footerLinkColor: {
    type: 'color',
    label: 'Footer link color',
    selector: '.footer-modern a',
    property: 'color',
    options: {
      presetColors: funColors
    }
  },
  footerLinkHoverColor: {
    type: 'color',
    label: 'Footer link hover color',
    selector: '.footer-modern a:hover',
    property: 'color',
    options: {
      presetColors: funColors
    }
  },
  headingOneTextColor: {
    type: 'color',
    label: 'Heading One Color',
    selector: 'h1',
    property: 'color',
    options: {
      presetColors: funColors
    }
  }
};
