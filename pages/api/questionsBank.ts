import AnswerModel from "../../model/AnswerModel";
import QuestionModel from "../../model/QuestionModel";

const questions: QuestionModel[] = [
  new QuestionModel(1, 'De quem é a famosa frase “Penso, logo existo”?', [
    AnswerModel.wrong('Platão'),
    AnswerModel.wrong('Galileu Galilei'),
    AnswerModel.certain('Descartes'),
    AnswerModel.wrong('Socrátes'),
  ]),

  new QuestionModel(2, 'De onde é a invenção do chuveiro elétrico?', [
    AnswerModel.wrong('França'),
    AnswerModel.wrong('Inglaterra'),
    AnswerModel.certain('Brasil'),
    AnswerModel.wrong('Itália'),
  ])
]

export default questions;