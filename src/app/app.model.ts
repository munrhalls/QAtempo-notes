export class List {
  public question: string;
  public answer: string;
  constructor() {
    this.question = '';
    this.answer = '';
  }
}
export class Chunk {
  public title: string = '';
  public list: List[] = [];
  public mode: string = '';

  constructor(title: string, list: List[], mode: string) {
    this.title = title;
    this.list = list;
    this.mode = mode;
  }
}
