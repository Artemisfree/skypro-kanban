const url = 'https://wedev-api.sky.pro/api/kanban'

export const getCards = (token) => {
	return fetch(url, {
        headers: {
            Authorization: `Bearer ${token}`
        }
	})
		.then(res => {
			if (res.status === 500) {
				throw new Error('Ошибка сервера')
			}
            if (res.status === 401) {
				throw new Error('Нет авторизации')
			}
			if (!res.ok) {
				throw new Error('Что-то пошло не так')
			}
			return res.json()
		})
}

export const addNewCard = ({token, newTask}) => {
	return fetch(url, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		method: "POST",
		body: JSON.stringify(newTask)
	}).then(res => {
		if (res.status === 500) {
			throw new Error('Ошибка сервера')
		}
		if (res.status === 401) {
			throw new Error('Нет авторизации')
		}
		if (res.status === 400) {
			throw new Error('Полученные данные не в формате JSON')
		}
		if (!res.ok) {
			throw new Error('Что-то пошло не так')
		}
		return res.json()
	})
}

export const deleteCard = ({ token, cardId }) => {
	return fetch(`${url}/${cardId}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		method: 'DELETE',
	})
		.then(res => {
			if (res.status === 500) {
				throw new Error('Ошибка сервера')
			}
			if (res.status === 401) {
				throw new Error('Нет авторизации')
			}
			if (!res.ok) {
				throw new Error('Что-то пошло не так')
			}
			return res.json()
		})
}


export const getCardById = ({ token, cardId }) => {
	return fetch(`${url}/${cardId}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}).then(res => {
		if (!res.ok) {
			throw new Error('Что-то пошло не так при загрузке данных карточки')
		}
		return res.json()
	})
}

export const updateCard = ({ token, cardId, cardData }) => {
	return fetch(`${url}/${cardId}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		method: 'PUT',
		body: JSON.stringify(cardData),
	}).then(res => {
		if (res.status === 500) {
			throw new Error('Ошибка сервера')
		}
		if (res.status === 401) {
			throw new Error('Нет авторизации')
		}
		if (!res.ok) {
			throw new Error('Что-то пошло не так')
		}
		return res.json()
	})
}