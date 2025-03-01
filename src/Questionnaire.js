import { useEffect, useState } from "react";

const Questionnaire = ({scoreOff}) => {

    const [qna, setQna] = useState();
    const [current, setCurrent] = useState(0)
    const [answers, setAnswers] = useState({})
    const [score, setScore] = useState(0)

    useEffect(() => {
        fetch("./data.json")
        .then((r) => r.json())
        .then((data)=> {
            setQna(data)
            console.log(data);

            
        })
    }, [])

    const nextHandler = () => {
        setCurrent(current+1)
        let currAns = document.getElementsByName("options")
        console.log(currAns);

        
    }

    const selectioner = (e) => {
        const {name, value} = e.target
        console.log(name, value);
        console.log("Answers: ", answers);
        setAnswers((prevAns) => ({...prevAns, [current]:value}))
        console.log("Answers: ", answers);
        
    }

    const scoreHandler = () => {
        console.log("Answers: ", answers);
        let count = 0
        qna.map((value, index) => {
            console.log("Answered by user",answers[index]);
            const ops = qna[index].options
            console.log(ops);
            
            const asnwerIndex = Object.keys(ops).find(key => qna[index].answer == ops[key])
            console.log("Exact answer",asnwerIndex);

            if (asnwerIndex == answers[index]){
                console.log("im in...");
                count += 1                
            }    
        })
        console.log("SCORE", count);
        
        setScore(count)
        scoreOff(count)
        localStorage.setItem("scores", count*20)
        window.location.href = "/fact";
    }

    

    if(!qna){
        return <h3>Loading...</h3>
    }

    return (
        <div className="flex flex-col items-center p-4">
        <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md text-center">
          <h2 className="text-xl font-bold mb-4">{qna[current].question}</h2>
          <ul className="space-y-2">
            {
                qna[current].options.map((option, index) => (
                    <span className="d-flex justify-content-center align-items-center p-2 gap-2"
                    key={index}
                    >
                        <input type="radio"
                    
                    name="options"
                    value={index}
                    onChange={selectioner}
                />
                <p className="m-0">{option}</p>
                    </span>

                ))
            }
          </ul>
        </div>
        <div className="flex gap-4 my-4">
          <button
            className="px-4 py-2 bg-blue-500 rounded-lg disabled:bg-gray-400"
            onClick={() => setCurrent(current - 1)}
            disabled={current === 0}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 bg-green-500 rounded-lg disabled:bg-gray-400"
            onClick={nextHandler}
            disabled={current === qna.length - 1}
          >
            Next
          </button>
        </div>
        {current === qna.length - 1 ? <button 
            className="px-4 py-2 bg-green-500 rounded-lg disabled:bg-gray-400"
            onClick={scoreHandler}
        > Submit </button> : <></>}
        
      </div>
    )
}

export default Questionnaire;