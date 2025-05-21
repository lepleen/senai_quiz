// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'
import CodeSnippet1 from '../../assets/images/code-snippet-1.png'

export const react: Topic = {
  topic: 'React',
  level: 'Intermediate',
  totalQuestions: 11,
  totalScore: 95,
  totalTime: 600,
  questions: [
    {
      question: 'Quantos anos terrestres Marte leva para completar 3 voltas ao redor do Sol, se um ano marciano tem 687 dias?',
      choices: [
        '5,6 anos terrestres',
        '3,5 anos terrestres',
        '2,8 anos terrestres',
        '4,2 anos terrestres',
      ],
      type: 'MCQs',
      correctAnswers: [
        '5,6 anos terrestres',
      ],
      score: 10,
    },
    // {
    //   question: 'React components must always return a single JSX element.',
    //   choices: ['True', 'False'],
    //   type: 'boolean',
    //   correctAnswers: ['True'],
    //   score: 5,
    // },
    {
      question: 'Se a Terra está a 150 milhões de km do Sol e Netuno está a 4.500 milhões de km, qual a diferença entre essas distâncias?',
      choices: [
        '3.200 milhões de km',
        '4.650 milhões de km',
        '4.350 milhões de km',
        '3.500 milhões de km',
      ],
      type: 'MCQs',
      correctAnswers: ['4.350 milhões de km'],
      score: 10,
    },
    {
      question:
        'Which of the following are valid React lifecycle methods? (Select all that apply)',
      choices: [
        'componentWillMount',
        'componentDidMount',
        'componentWillUpdate',
        'componentDidUpdate',
      ],
      type: 'MAQs',
      correctAnswers: ['componentDidMount', 'componentWillUpdate', 'componentDidUpdate'],
      score: 10,
    },
    {
      question: 'What will be the output of the following React code?',
      code: `import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

const App = () => {
  return <Counter />;
};

export default App;`,
      choices: ['Count: 0', 'Count: 1', 'Count: undefined', 'An error will occur'],
      type: 'MCQs',
      correctAnswers: ['Count: 0'],
      score: 10,
    },
    {
      question:
        'In React, props are used to pass data from parent components to child components.',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['True'],
      score: 5,
    },
    {
      question: 'What is the output of the following code snippet?',
      image: CodeSnippet1,
      choices: ['0', '1', '2', 'undefined'],
      type: 'MCQs',
      correctAnswers: ['0'],
      score: 10,
    },
    {
      question:
        'Which of the following are valid ways to conditionally render content in React? (Select all that apply)',
      choices: [
        'Using the if-else statement',
        'Using the ternary operator',
        'Using the switch statement',
        'Using the && operator',
      ],
      type: 'MAQs',
      correctAnswers: [
        'Using the if-else statement',
        'Using the ternary operator',
        'Using the && operator',
      ],
      score: 10,
    },
    {
      question: 'In React, what is the purpose of keys in lists?',
      choices: [
        'To provide a unique identifier for each item in the list',
        'To control the order of items in the list',
        'To enable sorting and filtering of the list',
        'To handle user interactions within the list',
      ],
      type: 'MCQs',
      correctAnswers: ['To provide a unique identifier for each item in the list'],
      score: 10,
    },
    {
      question: 'What will be the result of the following React code?',
      code: `import React from 'react';

class Button extends React.Component {
  handleClick() {
    console.log('Button clicked');
  }

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}

const App = () => {
  return <Button />;
};

export default App;`,
      choices: [
        'The "Button clicked" message will be logged to the console when the button is clicked',
        'The button will not respond to the click event',
        'An error will occur due to the incorrect usage of onClick',
        'The button will display but nothing will happen when clicked',
      ],
      type: 'MCQs',
      correctAnswers: [
        'The "Button clicked" message will be logged to the console when the button is clicked',
      ],
      score: 10,
    },
    {
      question: 'React uses a virtual DOM to optimize rendering performance.',
      choices: ['True', 'False'],
      type: 'boolean',
      correctAnswers: ['True'],
      score: 5,
    },
  ],
}
