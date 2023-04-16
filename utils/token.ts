const TOKEN_KEY = 'URQL_TOKEN';
export const getToken = () => {
	const token = useCookie(TOKEN_KEY);
	return token.value;
};
export const setToken = (newToken: string) => {
	const token = useCookie(TOKEN_KEY);
	token.value = newToken;
};
export const removeToken = () => {
	const token = useCookie(TOKEN_KEY);
	token.value = null;
};
