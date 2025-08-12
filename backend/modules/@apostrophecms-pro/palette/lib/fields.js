const funColors = [ '#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51' ];
const neutralColors = [ '#f8f9fa', '#e9ecef', '#dee2e6', '#ced4da', '#adb5bd', '#6c757d', '#495057', '#343a40', '#212529' ];

export default {
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
  backgroundColor: {
    type: 'color',
    label: 'Page Background',
    selector: 'body',
    property: 'background-color'
  }
};
