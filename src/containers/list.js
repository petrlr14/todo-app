import Card from './../components/card';

const List = (props) => {
  const { tasks, onDelete } = props;
  return (
    <div>
      {tasks.map((task) => (
        <Card key={task.id} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default List;
