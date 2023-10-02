import { Conversation } from "~/types/APIResponse";

export default defineStore("messages", () => {
  const _conversations = ref<Conversation[]>([]);
  const _currentConversationId = ref<Conversation>();

  const {
    getConversation: _getConversation,
    getConversationsList: _getConversationsList,
  } = useMessage();

  async function getConversationsList() {
    const { data } = await _getConversationsList();
    if (data.value) {
      _conversations.value = data.value.data;
      if (
        _currentConversationId.value &&
        !_conversations.value.includes(_currentConversationId.value)
      ) {
        _conversations.value.push(_currentConversationId.value);
        console.log(_conversations.value);
      }
    }
  }

  async function getConversation(userId: string) {
    const { data } = await _getConversation(userId);
    if (data.value) {
      _currentConversationId.value = data.value.data;
    }
  }

  const conversations = computed(() => _conversations.value);

  return {
    conversations,
    getConversationsList,
    getConversation,
  };
});
