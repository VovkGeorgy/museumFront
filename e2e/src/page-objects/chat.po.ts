import {$, $$} from "protractor";

export class ChatPage {
  clickOnFoldedChat() {
    const foldedChat = $(".folded-chat");
    expect(foldedChat.isPresent()).toBeTruthy();
    foldedChat.click();
  }

  isChatHasUnFolded() {
    expect($(".chat-bar").isPresent()).toBeTruthy();
    return $(".messages-box").isPresent();
  }

  getBackendWelcomeMessage() {
    const chatMessages = $$(".messages");
    expect(chatMessages.count()).toEqual(1);
    return chatMessages.first().getText();
  }

  writeMessageinChatInput(message: string) {
    $(".message-input").sendKeys(message);
  }

  sendChatMessage() {
    $(".chat-send-button").click();
  }

  getMessagesCount() {
    return $$(".messages").count();
  }

  getMessagesText() {
    return $$(".messages").getText();
  }
}
