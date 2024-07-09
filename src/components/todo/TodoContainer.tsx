import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import Todofilter from "./Todofilter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  const [priority, setPriority] = useState("");
  const { data: todos, isLoading, isError } = useGetTodosQuery(priority);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(priority);

  // const { todos } = useAppSelector((state) => state.todos);
  return (
    <div>
      <div className="flex justify-between items-center mb-4 ">
        <AddTodoModal />

        <Todofilter priority={priority} setPriority={setPriority} />
      </div>
      <div className="bg-primary-gradient  w-full rounded-xl h-full p-[5px] ">
        {/* <div className="bg-white p-3 flex justify-center rounded-md p-5">
          <p>There is no task pending</p>
        </div> */}
        <div className="bg-white space-y-2 p-5 w-full h-full rounded-lg">
          {todos?.data?.map((item) => (
            <TodoCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
