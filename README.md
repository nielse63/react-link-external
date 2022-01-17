# react-link-external

> External URL link component for React

## Features

- Standardized external `<a />` tag with all atttributes (`target`, `rel`, etc.)
- Meets WCAG 2.0 Level A and WCAG 2.0 Level AA standards
- Fully tested

## Installation

```bash
npm install --save react-link-external
```

## Usage

```js
import LinkExternal from 'react-link-external';

export default MyComponent() {
  return (
    <LinkExternal href="https://google.com">Link Text</LinkExternal>
  );
};
```

## API

### `href`

- Required: `true`
- Type: `string`

The url to link to (maps to `<a />` elements `href` attribute)

## Development

### Setup

```bash
git clone https://github.com/nielse63/react-link-external
cd react-link-external
nvm use
npm ci
```

### Testing

```bash
npm test
npm test -- --coverage
```
