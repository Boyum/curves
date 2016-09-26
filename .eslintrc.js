module.exports = {
  'env': {
    'browser': true,
    'jasmine': true
  },
  'extends': [
    'eslint:recommended'
    // 'angular'
  ],
  'rules': {
    'indent': [
      0, 2,
      { 'SwitchCase': 1 }
    ],
    'linebreak-style': [0, 
      'windows'
    ],
    'quotes': [
      2,
      'single'
    ],
    'semi': [
      2,
      'always'
    ],
    'default-case': [
      2
    ],
    'no-fallthrough': [
      2
    ]
  }
};
