import type { NextApiRequest, NextApiResponse } from 'next';
import shuffle from '../../../utils/shuffle';
import questions from "../questionsBank";

const quizId = (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const ids = questions.map(question => question.id);
  return res.status(200).json(shuffle(ids))
};

export default quizId;
