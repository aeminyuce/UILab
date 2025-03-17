// utils
import type { SetStorageProps, GetStorageProps } from '@utils/Models';

export const setStorage = (props:SetStorageProps) => {

	const { name, value, jsonData } = props;

	const data = jsonData ? JSON.stringify(value) : value;
	sessionStorage.setItem(window.btoa(name), window.btoa(encodeURI(data)));

}

export const getStorage = (props:GetStorageProps) => {

	const { name, jsonData } = props;

	let getData = sessionStorage.getItem(window.btoa(name));

	if (getData) {
		let data = decodeURI(window.atob(getData));
		data = jsonData ? JSON.parse(data) : data;

		return data === 'null' ? null : data;

	} else return null;

}