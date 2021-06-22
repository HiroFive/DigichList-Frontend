import React from 'react';

export const DeleteString = (data) => {
	var string = '?';
	data.map((params) => {
		string = string + (string.length > 2 ? ' ' : '') + `idArr=${params.id}`;
	});
	return string.replace(/\s/g, '&');
};

const getMonthsAgeDate = (howLongAgo) => {
	const date = new Date();
	date.setMonth(date.getMonth() - howLongAgo);
	return date;
};

const modifyDateInObject = (object) => {
	const tempObject = Object.assign(object);
	tempObject.statusChangedAt = new Date(object.statusChangedAt);
	return tempObject;
};

const defectDateFilter = (params, range) => {
	const paramValue = new Date(params.statusChangedAt);
	if (range[0] <= paramValue && range[1] >= paramValue) {
		return modifyDateInObject(params);
	}
};

export const sortDefectsByWeek = (data) => {
	const date = new Date();
	date.setHours(0, 0, 0, 0);
	const firstDayOfWeek = date.getDate() - date.getDay();
	const lastDayOfWeek = firstDayOfWeek + 6;
	const range = [
		new Date(date.setDate(firstDayOfWeek)),
		new Date(date.setDate(lastDayOfWeek)),
	];
	return data.filter((params) => defectDateFilter(params, range));
};

export const sortDefectsByDate = (data, howLongAgo = 6) => {
	const range = [getMonthsAgeDate(howLongAgo), new Date()];
	return data.filter((params) => defectDateFilter(params, range));
};

const sortDefectByStatus = (status, dataObj) => {
	switch (status) {
		case 'Opened':
			dataObj['open'] += 1;
			break;
		case 'Fixing':
			dataObj['fixing'] += 1;
			break;
		case 'Solved':
			dataObj['solved'] += 1;
			break;
		default:
			break;
	}
	return dataObj;
};
const dateConverter = (date) => {
	const weekDay = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'];
	const months = [
		'Jan.',
		'Feb.',
		'Mar.',
		'Apr.',
		'May.',
		'Jun.',
		'Jul.',
		'Aug.',
		'Sep.',
		'Oct.',
		'Nov.',
		'Dec.',
	];
	return `${weekDay[date.getDay()]} ${date.getDate()} ${
		months[date.getMonth()]
	}`;
};

export const getWeekData = (data) => {
	const date = new Date();
	const firstDayOfWeek = date.getDate() - date.getDay();
	const lastDayOfWeek = firstDayOfWeek + 6;
	const weekData = [];
	for (var i = firstDayOfWeek; i <= lastDayOfWeek; i++) {
		weekData.push({
			name: dateConverter(new Date(date.setDate(i))),
			open: 0,
			fixing: 0,
			solved: 0,
		});
	}
	data.forEach((params) => {
		const { statusChangedAt, defectStatus } = params;
		weekData.forEach((element) => {
			if (element.name === dateConverter(statusChangedAt)) {
				sortDefectByStatus(defectStatus, element);
			}
		});
	});
	return weekData;
};
export const getMonthsData = (data, howLongAgo = 6) => {
	const months = [
		'Jan.',
		'Feb.',
		'Mar.',
		'Apr.',
		'May.',
		'Jun.',
		'Jul.',
		'Aug.',
		'Sep.',
		'Oct.',
		'Nov.',
		'Dec.',
	];
	const monthsData = [];
	for (var i = 1; i <= howLongAgo; i++) {
		const date = getMonthsAgeDate(howLongAgo - i);
		monthsData.push({
			name: months[date.getMonth()],
			open: 0,
			solved: 0,
		});
	}
	data.forEach((params) => {
		const { statusChangedAt, defectStatus } = params;
		monthsData.forEach((element) => {
			if (element.name === months[statusChangedAt.getMonth()]) {
				sortDefectByStatus(defectStatus, element);
			}
		});
	});
	return monthsData;
};
