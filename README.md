# Sanity Clean Content Studio

Upgrade na Studio v3

 "@sanity/cli": "^3.0.6",
    "@sanity/components": "^2.14.0",
    "@sanity/default-layout": "^2.35.2",
    "@sanity/vision": "^3.5.1",
    "eslint": "^8.6.0",
    "prop-types": "^15.8.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.4.0",
    "sanity": "^3.5.1",
    "sanity-plugin-content-calendar": "^1.2.5",
    "sanity-super-pane": "^1.0.0-alpha.1",
    "styled-components": "^5.3.6"


    ---

   // sanity.json
    {
  "root": true,
  "project": {
    "name": "Štástné srdce"
  },
  "api": {
    "projectId": "gdle0r99",
    "dataset": "production"
  },
  "plugins": [
    "@sanity/base",
    "@sanity/components",
    "@sanity/default-layout",
    "@sanity/default-login",
    "@sanity/dashboard",
    "@sanity/desk-tool",
    "content-calendar"
  ],
  "env": {
    "development": {
      "plugins": [
        "@sanity/vision"
      ]
    }
  },
  "parts": [
    {
      "name": "part:@sanity/base/schema",
      "path": "./schemas/schema"
    },
    {
      "name": "part:@sanity/desk-tool/structure",
      "path": "./deskStructure.js"
    },
    {
      "implements": "part:@sanity/base/theme/variables/override-style",
      "path": "variableOverrides.css"
    }
  ]
}

