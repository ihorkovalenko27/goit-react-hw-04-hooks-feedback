import React, { useState } from 'react';
import Section from './components/section/Section';
import FeedbackOptions from './components/feedback/FeedbackOptions';
import Statistics from './components/statistics/Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const clickFeedback = event => {
    switch (event.target.name) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const positive = Math.round((good / countTotalFeedback()) * 100);
    return positive;
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={clickFeedback} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    </Section>
  );
};

export default App;
