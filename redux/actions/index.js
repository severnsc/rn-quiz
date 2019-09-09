import { ANSWERED_Q, START_GAME, RESET_GAME } from './types';

export function answeredQ(data) {
  return {
    type: ANSWERED_Q,
    payload: data,
  };
}

export function resetGame() {
  return {
    type: RESET_GAME,
  };
}

export function startGame() {
  return {
    type: START_GAME,
    payload: [
      {
        category: 'Science & Nature',
        type: 'boolean',
        difficulty: 'hard',
        question:
          'You can calculate Induced Voltage using: &epsilon; =-N * (d&Phi;B)/(d)',
        correct_answer: 'False',
        incorrect_answers: ['True'],
      },
      {
        category: 'Science & Nature',
        type: 'boolean',
        difficulty: 'hard',
        question:
          'It was once believed that injecting shark cartilage into people would prevent them from contracting cancer.',
        correct_answer: 'True',
        incorrect_answers: ['False'],
      },
      {
        category: 'Science: Computers',
        type: 'boolean',
        difficulty: 'hard',
        question: 'DHCP stands for Dynamic Host Configuration Port.',
        correct_answer: 'False',
        incorrect_answers: ['True'],
      },
      {
        category: 'History',
        type: 'boolean',
        difficulty: 'hard',
        question: 'The Battle of Trafalgar took place on October 23rd, 1805',
        correct_answer: 'False',
        incorrect_answers: ['True'],
      },
      {
        category: 'Entertainment: Video Games',
        type: 'boolean',
        difficulty: 'hard',
        question:
          'The names of Roxas&#039;s Keyblades in Kingdom Hearts are &quot;Oathkeeper&quot; and &quot;Oblivion&quot;.',
        correct_answer: 'True',
        incorrect_answers: ['False'],
      },
      {
        category: 'Politics',
        type: 'boolean',
        difficulty: 'hard',
        question: 'Joko Widodo has appeared in the cover of a TIME magazine.',
        correct_answer: 'True',
        incorrect_answers: ['False'],
      },
      {
        category: 'Entertainment: Books',
        type: 'boolean',
        difficulty: 'hard',
        question: 'Harry Potter was born on July 31st, 1980.',
        correct_answer: 'True',
        incorrect_answers: ['False'],
      },
      {
        category: 'History',
        type: 'boolean',
        difficulty: 'hard',
        question:
          'During the Winter War, the amount of Soviet Union soliders that died or went missing was five times more than Finland&#039;s.',
        correct_answer: 'True',
        incorrect_answers: ['False'],
      },
      {
        category: 'Science: Mathematics',
        type: 'boolean',
        difficulty: 'hard',
        question:
          'L&#039;H&ocirc;pital was the mathematician who created the homonymous rule that uses derivatives to evaluate limits with indeterminations.',
        correct_answer: 'False',
        incorrect_answers: ['True'],
      },
      {
        category: 'Entertainment: Japanese Anime & Manga',
        type: 'boolean',
        difficulty: 'hard',
        question:
          'In the &quot;Kagerou Daze&quot; series, Shintaro Kisaragi is prominently shown with the color red.',
        correct_answer: 'True',
        incorrect_answers: ['False'],
      },
    ],
  };
}
