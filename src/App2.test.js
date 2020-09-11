import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test( 'renders the <CKEditor> component', () => {
	const { container } = render( <App/> );
	const editorWrapper = container.querySelector( '.ckeditor-component' );

	expect( editorWrapper ).toBeInTheDocument();
	expect( editorWrapper.getAttribute( 'data-ckeditor-class-name' ) ).toEqual( 'VirtualTestEditor' );
} );
