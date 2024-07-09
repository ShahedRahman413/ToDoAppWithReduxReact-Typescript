import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAddTodoMutation } from "@/redux/api/api";

import { FormEvent, useState } from "react";

const AddTodoModal = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  // const dispatch = useAppDispatch();

  const [addTodo, { data, isLoading, isError, isSuccess }] =
    useAddTodoMutation();

  const onsubmit = (e: FormEvent) => {
    e.preventDefault();

    // const randomString = Math.random().toString(36).substring(2, 10);
    const taskDetails = {
      title: task,
      isCompleted: false,
      description,
      priority,
      // priority,
    };
    console.log("inside model", taskDetails);
    // dispatch(addTodo(taskDetails));
    addTodo(taskDetails);
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className=" bg-primary-gradient hover:bg-gradient-to-bl hover:from-blue-500 hover:via-purple-600 hover:to-indigo-500 text-xl font-semibold">
            Add Todo
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Task</DialogTitle>
            <DialogDescription>
              Add your tasks that you want to finish
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={onsubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="task" className="text-right">
                  Task
                </Label>
                <Input
                  onBlur={(e) => setTask(e.target.value)}
                  id="task"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  onBlur={(e) => setDescription(e.target.value)}
                  id="description"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Priority
                </Label>
                <Select onValueChange={(value) => setPriority(value)}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select Priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="High">High</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="Low">Low</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-end">
              <DialogClose asChild>
                <Button type="submit">Save changes</Button>
              </DialogClose>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddTodoModal;
