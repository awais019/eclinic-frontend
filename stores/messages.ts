import { Conversation } from "~/types/APIResponse";

export default defineStore("messages", () => {
  const _conversations = ref<Conversation[]>([]);
  const _currentConversation = ref<Conversation>();

  const {
    getConversation: _getConversation,
    getConversationsList: _getConversationsList,
  } = useMessage();

  async function getConversationsList() {
    const { data } = await _getConversationsList();
    if (data.value) {
      _conversations.value = data.value.data;
      if (_currentConversation.value && _currentConversation.value.message) {
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

  const conversations = computed(() => _conversations.value);
  const currentConversation = computed(() => _currentConversation.value);

  return {
    conversations,
    currentConversation,
    getConversationsList,
    getConversation,
  };
});
