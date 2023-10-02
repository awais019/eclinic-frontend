import { Conversation, Message } from "~/types/APIResponse";

export default defineStore("messages", () => {
  const _conversations = ref<Conversation[]>([]);
  const _currentConversation = ref<Conversation>();
  const _messages = ref<Message[]>([]);

  const {
    getConversation: _getConversation,
    getConversationsList: _getConversationsList,
    getMessages: _getMessages,
  } = useMessage();

  async function getConversationsList() {
    const { data } = await _getConversationsList();
    if (data.value) {
      _conversations.value = data.value.data;
      if (
        _currentConversation.value &&
        !conversations.value.find((conversation) => {
          return conversation.id === _currentConversation.value?.id;
        })
      ) {
        _conversations.value.push(_currentConversation.value);
      }
    }
  }

  async function getConversation(userId: string) {
    const { data } = await _getConversation(userId);
    if (data.value) {
      _currentConversation.value = data.value.data;
    }
  }

  async function getMessages() {
    const { data } = await _getMessages(
      _currentConversation.value?.id as string
    );
    if (data.value) {
      _messages.value = data.value.data;
    }
  }

  function pushMessage(message: Message) {
    messages.value.push(message);
  }

  function updateConversationsList(conversations: Conversation[]) {
    _conversations.value = conversations;
  }

  const conversations = computed(() => _conversations.value);
  const currentConversation = computed(() => _currentConversation.value);
  const messages = computed(() => _messages.value);

  return {
    conversations,
    currentConversation,
    messages,
    getConversationsList,
    updateConversationsList,
    getConversation,
    getMessages,
    pushMessage,
  };
});
