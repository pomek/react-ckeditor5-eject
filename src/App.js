import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';

import './App.css';

const editorConfiguration = {
	plugins: [
		Essentials,
		Bold,
		Italic,
		Paragraph
	],
	toolbar: [ 'bold', 'italic' ]
};

class App extends Component {
	render() {
		return (
			<div className="App">
				<h2>Using CKEditor 5 from source in React</h2>

				<div className="ckeditor-component" data-ckeditor-class-name={ ClassicEditor.name }>
					<CKEditor
						editor={ ClassicEditor }
						config={ editorConfiguration }
						data="<p>Hello from CKEditor 5!</p>"
					/>
				</div>
			</div>
		);
	}
}

export default App;
