import type { NextApiRequest, NextApiResponse } from 'next';
import questions from "../questionsBank";

const quizId = (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  return res.status(200).json(questions.map(question => question.id))
};

export default quizId;
