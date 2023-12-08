

const Word = ({data}) => {
  return (
    <div>
      {data.map(({word})=>
      (
        <p>{word}</p>
      ))}
    </div>
  )
}

export default Word
