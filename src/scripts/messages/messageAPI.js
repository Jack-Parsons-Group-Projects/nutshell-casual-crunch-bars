const baseUrl = "http://localhost:3000"
export default {
    getAllMessages() {
        return fetch(`${baseUrl}/messages`)
            .then(response => response.json());
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
