import React from 'react';
import UpdateNote from '../components/update-note';

export default function Note(props) {
	return (
		<div>
			<h4>{props.selected.title}</h4>
			<div>{props.selected.body}</div>
			<button onClick={() => props.handleDeleteNote()}>
				{`Delete ${props.selected.title}`}
			</button>
			<UpdateNote note={props.selected}/>
		</div>
	);
}
