function TechList(props) {
  return (
    <>
      {props.stack ? (
        <ol>
          {props.stack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ol>
      ) : (
        <label>There is no stack</label>
      )}
    </>
  );
}

export default TechList;
