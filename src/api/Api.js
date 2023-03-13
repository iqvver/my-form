// компонент Api в котором формируется запрос на сервер и получает ответ
// базовый адрес запроса на сервер
const baseURL = `http://localhost:3000/`;

// получение массива со всеми пользователями
export const userAPI = {
    async getUsers() {
        const res = await fetch(baseURL + "users", {
            headers: {
                "Content-Type": "application/json"
            },
        });
        const data = await res.json();
        return data;
    },

    sendUsers(newUser, submitSuccess, showError) {
        fetch(baseURL + "users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        })
            .then((res) => res.json())
            .then((data) => {
                data.id ? submitSuccess() : showError(true);
            })
            .catch((error) => {
                showError(true);
                console.log("error", error);
            });
    }
}
