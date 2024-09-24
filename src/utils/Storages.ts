interface SetStorageProps {
	name: string;
	value: any;
	jsonData?: boolean;
}

interface GetStorageProps {
	name: string;
	jsonData?: boolean;
}

export const setStorage = ({ name, value, jsonData }:SetStorageProps) => {

	const data = jsonData ? JSON.stringify(value) : value;
	sessionStorage.setItem(window.btoa(name), window.btoa(encodeURI(data)));

}

export const getStorage = ({ name, jsonData }:GetStorageProps) => {

	let getData = sessionStorage.getItem(window.btoa(name));

	if (getData) {
		let data = decodeURI(window.atob(getData));
		data = jsonData ? JSON.parse(data) : data;

		return data === 'null' ? null : data;

	} else return null;

}