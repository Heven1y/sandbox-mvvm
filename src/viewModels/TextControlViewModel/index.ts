import { makeObservable, action, observable } from "mobx";
import { TextControlModel } from "../../models/TextControlModel";

export class TextControlViewModel extends TextControlModel {
  constructor() {
    super();
    makeObservable(this, {
      text: observable,
      setText: action,
      clearText: action,
      replaceHelloWorld: action,
      alertText: action,
      numToAlert: action,
    });
  }

  clearText() {
    this.setText("");
  }

  replaceHelloWorld() {
    this.setText("Hello world!");
  }

  alertText() {
    if (this.text.length === 0) {
      return;
    }
    alert(this.text);
  }

  numToAlert() {
    if (this.text.length === 0) {
      return;
    }
    if (!isNaN(Number(this.text))) {
      alert(this.text);
    }
  }
}
