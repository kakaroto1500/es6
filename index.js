class Message {
  constructor(text = '', created = Date.now()) {
    this.text = text;
    this.created = created;
  }

  toString() {
    return ` Messagem ${this.created} -texto : ${this.text}`;
  }
}

const emptyMessage = new Message();
const textMessage = new Message('ola mundo', Date.now() - 86400);
console.log(String(emptyMessage));
console.log(String(textMessage));
