import React, {useEffect, useState} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, setQuestions }) {
  function handleDeleteClick(id) {
    fetch(`http://localhost:4000/questions/${id}`, {
    method: "DELETE", 
  })
  .then((r) => {
    console.log(questions)
    const filteredQuestions = questions.filter(question => question.id !== id)
    setQuestions(filteredQuestions)
  })}
 
  const questionMap = questions.map(question => 
    <QuestionItem key = {question.id} onDeleteClick ={handleDeleteClick} question ={question}/>)
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionMap}</ul>
    </section>
  );
}

export default QuestionList;
