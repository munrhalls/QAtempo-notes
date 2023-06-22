export class List {
  public question: string;
  public answer: string;
  constructor() {
    this.question = '';
    this.answer = '';
  }
}
export class Chunk {
  readonly id: number = Number();
  public title: string = '';
  public list: List[] = [];
  public difficulty: 'beginner' | 'intermediate' | 'advanced';
  public mode: string = '';
  public displayFullness: string = '';

  constructor(
    id: number,
    title: string,
    list: List[],
    difficulty: 'beginner' | 'intermediate' | 'advanced',
    mode: string,
    displayFullness: 'intro' | 'full'
  ) {
    this.id = id;
    this.title = title;
    this.list = list;
    this.difficulty = difficulty;
    this.mode = mode;
    this.displayFullness = displayFullness;
  }
}
