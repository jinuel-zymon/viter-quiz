import React from 'react'
import { questions } from './questions'

const Quiz = () => {
  const [showResult, setShowResult] = React.useState(false)
  const [currentQuestion, setCurrentQuestion] = React.useState(0)
  const [isActive, setIsActive] = React.useState(null)
  const [randomize, setRandomize] = React.useState(null)
  const [selectedAnswer, setSelectedAnswer] = React.useState(null)
  const [correctCounter, setCorrectCounter] = React.useState(0)

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1)
    setIsActive(null)
    if (currentQuestion === questions.length - 1) {
      setShowResult(true)
    }

    if (selectedAnswer.isCorrect === true) {
      setCorrectCounter(prev => prev + 1)
    }
  }

  const handleChoice = (item, key) => {
    setIsActive(key)
    setSelectedAnswer(item)
  }

  const handleRetake = () => {
    setCorrectCounter(0)
    setCurrentQuestion(0)
    setShowResult(false)
  }

  React.useEffect(() => {
    setRandomize (questions
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value))
  },[])


  return (
    <>  
    <header className='flex gap-2 px-2 py-6'>
      {Array.from(Array(questions.length).keys()).map((i)=> (
        <div key={i} className={`h-3 bg-red-600 w-full rounded-md bg-opacity-40 ${i <= currentQuestion ? "bg-opacity-100" : ""}`}></div>
      )) }
    </header>

    <section className='h-screen w-full flex items-center justify-center'>
      <div className="bg-gray-100 shadow-md w-[500px] py-10 px-6 text-center rounded-md">
        {showResult ? (
          <div className="result">
            
            {correctCounter / questions.length * 100 > 50 ? (
              <div className="passed">
                <h3 className='text-xl font-semibold'>Congratulations</h3>
                <h2 className='text-6xl mb-5 font-extrabold text-green-700'>{correctCounter / questions.length * 100}%</h2>
                <p className='mb-5'>You got {correctCounter}/{questions.length} score</p>
                <button className='bg-green-600 px-8 py-3 rounded-full text-white'>Print Certificate</button>
              </div>
            ) : (
              <div className="failed">
              <h3 className='text-xl font-semibold'>Failed</h3>
              <h2 className='text-6xl mb-5 font-extrabold text-red-700'>{correctCounter / questions.length * 100}%</h2>
              <p className='mb-5'>You got {correctCounter}/{questions.length} score</p>
              <button className='bg-red-600 px-8 py-3 rounded-full text-white' onClick={handleRetake}>Retake</button>
            </div>
            )}
          </div>
        ) : (
          <div className='question'>
            <p className='text-sm mb-2'>Question {currentQuestion + 1} / {questions.length} </p>
            <h5 className='font-semibold mb-8'>{ randomize !== null && randomize[currentQuestion].question_question}</h5>
    
            <ul className='space-y-5 mb-10'>
            { randomize !== null && randomize[currentQuestion].question_choices.map((item,key)=> (
              <li className={`bg-slate-200 rounded-full ${isActive === key ? "bg-red-700 text-white" : ""}`} key={key}>
                <button className='py-2 w-full' onClick={()=> handleChoice(item, key)}>{item.choice}</button>
              </li>
            ))}
            </ul>
    
            <button className='bg-red-600 px-8 py-3 rounded-full text-white' onClick={handleNextQuestion}>Next Question</button>
          </div>
        )}



      </div>
    </section>
    </>
  )
}

export default Quiz