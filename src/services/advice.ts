export const getAdvice = () => {
    const apiUrl = 'https://api.adviceslip.com/advice';
    return fetch(apiUrl).then((res) => res.json());
};
