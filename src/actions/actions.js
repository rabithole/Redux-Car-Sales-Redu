export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export function buyItem(features) {
	return {
		type: 'ADD_FEATURE', 
		payload: features
	};
}

export function removeFeature(features) {
	return {
		type: 'REMOVE_FEATURE',
		payload: features
	};
}
