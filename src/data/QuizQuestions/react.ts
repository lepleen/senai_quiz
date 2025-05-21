// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'
// import CodeSnippet1 from '../../assets/images/code-snippet-1.png'

export const react: Topic = {
  topic: 'React',
  level: 'Intermediate',
  totalQuestions: 5,
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
        'Um foguete viaja a 50.000 km/h. Quanto tempo levaria para chegar a Marte, a 225 milhões de km da Terra (em horas)?',
      choices: [
        '4.000 horas',
        '5.500 horas',
        '4.500 horas',
        '6.500 horas',
      ],
      type: 'MAQs',
      correctAnswers: ['4.500 horas'],
      score: 10,
    },
//     {
//       question: 'What will be the output of the following React code?',
//       code: `import React, { useState } from 'react';

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// };

// const App = () => {
//   return <Counter />;
// };

// export default App;`,
//       choices: ['Count: 0', 'Count: 1', 'Count: undefined', 'An error will occur'],
//       type: 'MCQs',
//       correctAnswers: ['Count: 0'],
//       score: 10,
//     },
    // {
    //   question:
    //     'In React, props are used to pass data from parent components to child components.',
    //   choices: ['True', 'False'],
    //   type: 'boolean',
    //   correctAnswers: ['True'],
    //   score: 5,
    // },
    // {
    //   question: 'What is the output of the following code snippet?',
    //   image: CodeSnippet1,
    //   choices: ['0', '1', '2', 'undefined'],
    //   type: 'MCQs',
    //   correctAnswers: ['0'],
    //   score: 10,
    // },
    {
      question:
        'Se um dia em Mercúrio dura 1.408 horas, quantos dias terrestres isso representa? (1 dia terrestre = 24 horas)',
      choices: [
        '58 dias',
        '62 dias',
        '48 dias',
        '40 dias',
      ],
      type: 'MAQs',
      correctAnswers: [
        '58 dias',
      ],
      score: 10,
    },
    {
      question: 'A Terra tem 12.742 km de diâmetro e Plutão tem 2.377 km. Quantas vezes a Terra é maior que Plutão em diâmetro?',
      choices: [
        '6,2',
        '4,5',
        '5,4',
        '7,1',
      ],
      type: 'MCQs',
      correctAnswers: ['5,4'],
      score: 10,
    },
//     {
//       question: 'What will be the result of the following React code?',
//       code: `import React from 'react';

// class Button extends React.Component {
//   handleClick() {
//     console.log('Button clicked');
//   }

//   render() {
//     return <button onClick={this.handleClick}>Click me</button>;
//   }
// }

// const App = () => {
//   return <Button />;
// };

// export default App;`,
//       choices: [
//         'The "Button clicked" message will be logged to the console when the button is clicked',
//         'The button will not respond to the click event',
//         'An error will occur due to the incorrect usage of onClick',
//         'The button will display but nothing will happen when clicked',
//       ],
//       type: 'MCQs',
//       correctAnswers: [
//         'The "Button clicked" message will be logged to the console when the button is clicked',
//       ],
//       score: 10,
//     },
    // {
    //   question: 'React uses a virtual DOM to optimize rendering performance.',
    //   choices: ['True', 'False'],
    //   type: 'boolean',
    //   correctAnswers: ['True'],
    //   score: 5,
    // },
  ],
}
