import AnswerModel from "../../model/AnswerModel";
import QuestionModel from "../../model/QuestionModel";

const questions: QuestionModel[] = [
  new QuestionModel(1, 'De quem é a famosa frase “Penso, logo existo”?', [
    AnswerModel.wrong('Platão'),
    AnswerModel.wrong('Galileu Galilei'),
    AnswerModel.correct('Descartes'),
    AnswerModel.wrong('Socrátes'),
  ]),

  new QuestionModel(3, 'De onde é a invenção do chuveiro elétrico?', [
    AnswerModel.wrong('França'),
    AnswerModel.wrong('Inglaterra'),
    AnswerModel.correct('Brasil'),
    AnswerModel.wrong('Itália'),
  ]),

  new QuestionModel(5, 'Qual o nome do presidente do Brasil que ficou conhecido como Jango?', [
    AnswerModel.wrong('Jânio Quadros'),
    AnswerModel.wrong('Jacinto Anjos'),
    AnswerModel.correct('João Goulart'),
    AnswerModel.wrong('Getúlio Vargas'),
  ]),

  new QuestionModel(7, 'Quantas casas decimais tem o número pi?', [
    AnswerModel.wrong('Duas'),
    AnswerModel.wrong('Centenas'),
    AnswerModel.correct('Infinitas'),
    AnswerModel.wrong('Vinte'),
  ]),

  new QuestionModel(9, 'Atualmente, quantos elementos químicos a tabela periódica possui?', [
    AnswerModel.wrong('113'),
    AnswerModel.wrong('109'),
    AnswerModel.correct('118'),
    AnswerModel.wrong('108'),
  ]),
]

export default questions;