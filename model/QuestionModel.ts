import shuffle from "../utils/shuffle";
import AnswerModel from "./AnswerModel";

export default class QuestionModel {
  #id: number
  #statement: string
  #answers: AnswerModel[]
  #hit: boolean

  constructor(id: number, statement: string, answers: AnswerModel[], hit = false) {
    this.#id = id
    this.#statement = statement
    this.#answers = answers
    this.#hit = hit
  }

  get id() {
    return this.#id
  }

  get statement() {
    return this.#statement
  }

  get answers() {
    return this.#answers
  }

  get hit() {
    return this.#hit
  }

  get answered() {
    for (const answer of this.#answers) {
      if(answer.selected) return true
    }
    return false
  }

  replyWith(index: number): QuestionModel {
    const hit = this.#answers[index]?.correct;
    const newAnswers = this.#answers.map((response) => {
      return response.toReveal()
    });
    return new QuestionModel(this.#id, this.#statement, newAnswers, hit)
  }

  shuffleAnswers(): QuestionModel {
    let shuffledAnswers = shuffle(this.#answers);
    return new QuestionModel(this.#id, this.#statement, shuffledAnswers, this.#hit);
  }

  convertQuestionsToObject() {
    return {
      id: this.#id,
      statement: this.#statement,
      answered: this.answered,
      hit: this.#hit,
      answers: this.#answers.map(resp => resp.convertAnswersToObject()),
    }
  }
}