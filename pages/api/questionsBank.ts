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

  new QuestionModel(11, 'Qual o número mínimo de jogadores numa partida de futebol?', [
    AnswerModel.wrong('8'),
    AnswerModel.wrong('10'),
    AnswerModel.correct('7'),
    AnswerModel.wrong('11'),
  ]),

  new QuestionModel(13, 'Quais os principais autores do Barroco no Brasil?', [
    AnswerModel.wrong('Miguel de Cervantes, Gregório de Matos e Danthe Alighieri'),
    AnswerModel.wrong('Álvares de Azevedo, Gregório de Matos e Bento Teixeira'),
    AnswerModel.correct('Gregório de Matos, Bento Teixeira e Manuel Botelho de Oliveira'),
    AnswerModel.wrong('Castro Alves, Bento Teixeira e Manuel Botelho de Oliveira'),
  ]),

  new QuestionModel(15, 'Quem pintou "Guernica"?', [
    AnswerModel.wrong('Paul Cézanne'),
    AnswerModel.wrong('Diego Rivera'),
    AnswerModel.correct('Pablo Picasso'),
    AnswerModel.wrong('Tarsila do Amaral'),
  ]),
]

export default questions;