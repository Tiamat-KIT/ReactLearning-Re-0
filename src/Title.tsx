const Title = (props: { title: string; content: string }) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
};
export default Title;
