import { useState } from "react"
import { sculptureList } from "../constants/data"



const MyComponent = () => {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  let sculpture = sculptureList[index];
  let hasPrev = index > 0
  let hasNext = index < sculptureList.length - 1;

  const handleNextClick = () => {
    if (hasNext) {
      setIndex(index + 1);
    }
  }

  const handlePreviousClick = () => {
    if (hasPrev) {
      setIndex(index - 1)
    }
  }

  const handleToggle = () => {
    setShowMore(!showMore);
  }

  

  return (
    <>
      <button onClick={handleNextClick} disabled={!hasNext}>Next</button> <br />
      <button onClick={handlePreviousClick} disabled={!hasPrev}>Previous</button>
      <h2>
        
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      
      <h3>
        ({index + 1} of {sculptureList.length - 1})
      </h3>
      <p>{showMore ? sculpture.description : `${sculpture.description.slice(0, 50)}...`}
      {sculpture.description.length > 50 && (
        <button onClick={handleToggle}>{showMore ? "Show less" : "Show More"}</button>
      )}
      </p>
      <img 
        src={sculpture.url}
        alt={sculpture.alt}
      />
    </>
  )
}

export default MyComponent