# React CKEditor5 Eject

This is an application created by the [`create-react-app`](https://github.com/facebook/create-react-app) tool.

The repository contains configuration for all tools (webpack, Jest, etc.) because I called `yarn run eject` after creating the project.

The application integrates [CKEditor 5](https://github.com/ckeditor/ckeditor5) with React using the [`@ckeditor/ckeditor5-react`](https://github.com/ckeditor/ckeditor5-react) package.

See the ["Rich text editor component for React"](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/react.html) guide in the [CKEditor 5 documentation](https://ckeditor.com/docs/ckeditor5/latest) to learn more.

## Development

The repository uses [`yarn`](https://yarnpkg.com/) as the package manager.

After cloning the repository, install required dependencies: `yarn install`.

### Starting the web-server

Call: `yarn run start`.

### Prepare the production build

Call: `yarn run build`.

You can use [`http-server`](https://www.npmjs.com/package/http-server) for verifying whether the application works: `http-server build/`

### Testing

⚠️ The Jest configuration (located in the `package.json` file) requires cloning one of the test utils from CKEditor 5 repository. [Read more why it is needed.](https://github.com/ckeditor/ckeditor5-react/issues/225)

```bash
# Prepare the test's utils directory in the @ckeditor/ckeditor5-core package.
mkdir -p node_modules/@ckeditor/ckeditor5-core/tests/_utils/

# Get the VirtualTestEditor that we will use for testing.
wget https://raw.githubusercontent.com/ckeditor/ckeditor5/v26.0.0/packages/ckeditor5-core/tests/_utils/virtualtesteditor.js

# Move the editor file to the proper location.
mv virtualtesteditor.js node_modules/@ckeditor/ckeditor5-core/tests/_utils/virtualtesteditor.js
```

Call: `yarn run test`

If you see an error:

```
Configuration error:

Could not locate module @ckeditor/ckeditor5-editor-classic/src/classiceditor mapped as:
/Users/pomek/Projects/pomek/react-ckeditor5-eject/node_modules/@ckeditor/ckeditor5-core/tests/_utils/virtualtesteditor.

Please check your configuration for these entries:
{
  "moduleNameMapper": {
    "/classiceditor/": "/Users/pomek/Projects/pomek/react-ckeditor5-eject/node_modules/@ckeditor/ckeditor5-core/tests/_utils/virtualtesteditor"
  },
  "resolver": null
}
```

The `VirtualTestEditor` is not saved in the proper localization.
