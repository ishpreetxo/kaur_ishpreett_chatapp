export default {
    name: 'TheChatMessageComponent',
    props: ['message'],

    template: `
    <article class="chat-messages" :class="{ 'other-messages' : matchedID }">
    <h2 class="says">{{ message.name }} says:</h2>
    <p>{{ message.content }}</p>
    </article>
    `,

    data() {
        return {
            message: 'hello from the template',
            // every time an incoming message arrives, check against the user ID to see if this is ours.
            // if it IS, apply a css class to indicate that it's ours
            // if it ISN'T, apply a diiferent CSS class to make that obvious
            matchedID: this.$parent.socketID == this.message.id
        }
    }
}