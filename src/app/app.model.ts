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
  public difficulty: 'beginner' | 'intermediate' | 'advanced';
  public mode: string = '';

  constructor(
    title: string,
    list: List[],
    difficulty: 'beginner' | 'intermediate' | 'advanced',
    mode: string
  ) {
    this.title = title;
    this.list = list;
    this.difficulty = difficulty;
    this.mode = mode;
  }
}
