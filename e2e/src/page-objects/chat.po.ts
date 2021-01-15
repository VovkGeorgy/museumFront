import {$, $$} from "protractor";

export class ChatPage {
  private foldedChat = $(".folded-chat");
  private chatMessages = $$(".messages");
  private chatBar = $(".chat-bar");
  private chatMessageInput = $(".message-input");
  private chatSendButton = $(".chat-send-button");
  private chatCloseButton = $(".chat-closer");


  isFoldedChatPresent() {
    return this.foldedChat.isPresent();
  }

  clickOnFoldedChat() {
    this.foldedChat.click();
  }

  isUnFoldedChatPresent() {
    return this.chatBar.isPresent();
  }

  getBackendWelcomeMessage() {
    return this.chatMessages.first().getText();
  }

  writeMessageInChatInput(message: string) {
    this.chatMessageInput.sendKeys(message);
  }

  sendChatMessage() {
    this.chatSendButton.click();
  }

  getMessagesCount() {
    return this.chatMessages.count();
  }

  getLastMessageText() {
    return this.chatMessages.last().getText();
  }

  isCloseButtonPresent() {
    return this.chatCloseButton.isPresent();
  }

  clickOnCloseButton(){
    this.chatCloseButton.click();
  }
}
