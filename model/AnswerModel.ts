export default class AnswerModel {
  #alternatives: string
  #correct: boolean
  #selected: boolean

  constructor(alternatives: string, correct: boolean, selected = false) {
    this.#alternatives = alternatives
    this.#correct = correct
    this.#selected = selected
  }

  static correct(alternatives: string) {
    return new AnswerModel(alternatives, true)
  }

  static wrong(alternatives: string) {
    return new AnswerModel(alternatives, false)
  }

  get alternatives() {
    return this.#alternatives
  }

  get correct() {
    return this.#correct
  }

  get selected() {
    return this.#selected
  }

  toReveal() {
    return new AnswerModel(this.#alternatives, this.#correct, true)
  }

  static convertAnswersFromObject(obj: AnswerModel): AnswerModel {
    return new AnswerModel(obj.alternatives, obj.correct, obj.selected)
  }

  convertAnswersToObject() {
    return {
      alternatives: this.#alternatives,
      correct: this.#correct,
      selected: this.#selected,
    }
  }
}