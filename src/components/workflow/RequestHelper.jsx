import React from 'react';

export const DeleteSting = (data) => {
    var string = '?';
    data.map((params) => {
        string = string + (string.length > 2 ? ' ' : '') + `idArr=${params.id}`;
    });
    return string.replace(/\s/g, '&');
};

export const getCurrentData = () => {
    const date = new Date()
    return (
        date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
    );
};
export const getWeekAgoDate = () => {
    const date = new Date()
    return (
        (date.getDate() - 7) + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
    );
}
