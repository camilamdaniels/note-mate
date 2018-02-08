import axios from 'axios';

export const ADD_NOTE = 'ADD_NOTE';
export const ADDING_NOTE = 'ADDING_NOTE';

export const DELETE_NOTE = 'DELETE_NOTE';
export const DELETING_NOTE = 'DELETING_NOTE';

export const UPDATE_NOTE = 'UPDATE_NOTE';
export const UPDATING_NOTE = 'UPDATING_NOTE';

export const FETCHING_NOTES = 'FETCHING_NOTES';
export const FETCH_NOTES = 'FETCH_NOTES';

export const NOTE = 'NOTE';
export const ERROR = 'ERROR';

export const TOGGLE_UPDATE_NOTE = 'TOGGLE_UPDATE_NOTE';

const URL = 'http://localhost:5000/api/notes';

export const addNote = (note) => {
	const newNote = axios.post(`${URL}/create`, note);
	return dispatch => {
		dispatch({type: ADDING_NOTE});
		newNote
			.then(({data}) => {
				dispatch({type: ADD_NOTE, payload: data});
			})
			.catch(err => {
				dispatch({type: ERROR, payload: err});
			});
	};
};

export const deleteNote = (id) => {
	const deleteNote = axios.delete(`${URL}/delete`, {data: { id }});
	return dispatch => {
		dispatch({type: DELETING_NOTE});
		deleteNote
			.then(({data}) => {
				dispatch({type: DELETE_NOTE, payload: data});
				dispatch({type: NOTE, payload: {} });
			})
			.catch(err => {
				dispatch({type: ERROR, payload: err});
			});
	};
};

export const updateNote = (note) => {
	return {
		type: NOTE,
		payload: note
	};
};

export const fetchNotes = () => {
	const notes = axios.get(`${URL}/get`);
	return dispatch => {
		dispatch({type: FETCHING_NOTES});
		notes.then(response => {
			dispatch({type: FETCH_NOTES, payload: response.data});
		})
		.catch(err => {
			dispatch({type: ERROR, payload: err})
		});
	};
};

export const toggleShowUpdate = () => {
	return {
		type: TOGGLE_UPDATE_NOTE
	};
};