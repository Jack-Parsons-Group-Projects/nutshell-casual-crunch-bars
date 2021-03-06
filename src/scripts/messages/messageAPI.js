const baseUrl = "http://localhost:3000"
export default {
    getAllMessages() {
        return fetch(`${baseUrl}/messages?_expand=user`)
            .then(response => response.json());
    },
    addNewMessage(newMessage) {
        return fetch(`${baseUrl}/messages?_expand=user`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newMessage)
            })
    },
    editMessages(message) {
        return fetch(`${baseUrl}/messages/${message.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        });
    },
    deleteMessage(messageId){
        return fetch(`${baseUrl}/messages/${messageId}`, {
            method: "DELETE"
        });
    }
}
