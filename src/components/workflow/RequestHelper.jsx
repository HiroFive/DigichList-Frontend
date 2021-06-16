import React from 'react';

export const DeleteSting = (data) => {
	var string = '?';
	data.map((params) => {
		string = string + (string.length > 2 ? ' ' : '') + `idArr=${params.id}`;
	});
	return string.replace(/\s/g, '&');
};

export const getCurrentData = () => {
	const date = new Date();
	return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
};
export const getWeekAgoDate = () => {
	const date = new Date();
	return (
		date.getMonth() + 1 + '/' + (date.getDate() - 7) + '/' + date.getFullYear()
	);
};
// const toNumber = (string) => {
// 	const array = string.split('/').map((params) => Number(params));
// 	return array;
// };
// const addArrayValue = (array) =>{
//     return array.reduce((acc, val) => acc + val, 0)
// }

const modifyDateInObject = (object) => {
	const tempObject = Object.assign(object);
	tempObject.createdAt = new Date(object.createdAt);
	return tempObject;
};

export const sortDefectsByWeek = (data) => {
	const range = [new Date(getWeekAgoDate()), new Date(getCurrentData())];
	console.log(
		createWeekData(
			data.filter((params) => {
				const paramValue = new Date(params.createdAt);
				if (range[0] <= paramValue && range[1] >= paramValue) {
					return modifyDateInObject(params);
				}
			})
		)
	);
	return data.filter((params) => {
		const paramValue = new Date(params.createdAt);
		if (range[0] <= paramValue && range[1] >= paramValue) {
			return modifyDateInObject(params);
		}
	});
};

export const createWeekData = (data) => {
	const weekDay  = [
		'Sun.',
		'Mon.',
		'Tue.',
		'Wed.',
		'Thu.',
		'Fri.',
		'Sat.',
	];
	const weekData = [];
	data.forEach((params) => {
		const { createdAt } = params;
        const found = weekData.some((element) => element.name === weekDay[createdAt.getDay()]);
		if (!found) {
			weekData.push({ name: weekDay[createdAt.getDay()]});
		}
		// console.log(createdAt);
	});
	return weekData;
};
