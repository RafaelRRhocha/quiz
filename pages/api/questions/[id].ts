// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import questions from '../questionsBank';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const userId = req.query.id;

  const selectedQuestions = questions.filter(question => question.id === Number(userId));
  
  if(selectedQuestions.length === 1) {
    res.status(200).json(selectedQuestions[0].shuffleAnswers().convertQuestionsToObject());
  }

  res.status(204).end();
}
