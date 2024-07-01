import { Button } from "../ui/button";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import Todofilter from "./Todofilter";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4 ">
        <Button className=" bg-primary-gradient text-xl font-semibold">
          Add Todo
        </Button>
        <AddTodoModal />
        <Button className="bg-primary-gradient text-xl font-semibold">
          Filter
        </Button>
        <Todofilter />
      </div>
      <div className="bg-primary-gradient  w-full rounded-xl h-full p-[5px] ">
        {/* <div className="bg-white p-3 flex justify-center rounded-md p-5">
          <p>There is no task pending</p>
        </div> */}
        <div className="bg-white space-y-2 p-5 w-full h-full rounded-lg">
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
