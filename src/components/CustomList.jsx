function CustomList(props) {
  return (
    <ul>
      {props.arr.map((el) => {
        return <li key={el}>{el}</li>;
      })}
    </ul>
  );
}

export default CustomList;
