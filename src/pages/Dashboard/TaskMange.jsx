import { useQuery } from "@tanstack/react-query";
import InnerSectiontitle from "../../components/Dashboard/InnerSectiontitle";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Loader from "../../components/shared/Loader";
import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const TaskMange = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [ongoing, setOngoing] = useState([]);
  const [completedtask, setComplete] = useState([]);
  const {
    // eslint-disable-next-line no-unused-vars
    data: initialTasks = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["tasks", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/tasks/${user?.email}`);
      const toDoTasks = res.data.filter((task) => task.status === "to-do");
      setTasks(toDoTasks);
      const ongoingtasks = res.data.filter((task) => task.status === "ongoing");
      setOngoing(ongoingtasks);
      const completetask = res.data.filter(
        (task) => task.status === "completed"
      );
      setComplete(completetask);
      return res.data;
    },
  });

  const handleDragEnd = async (result) => {
    if (!result.destination) return;

    const destinationIndex = result.destination.index;
    const draggableId = result.draggableId;

    const destinationDroppableId = result.destination.droppableId;
    let updatedStatus;
    if (destinationDroppableId === "todo") {
      updatedStatus = "to-do";
    } else if (destinationDroppableId === "ongoing") {
      updatedStatus = "ongoing";
    } else if (destinationDroppableId === "completed") {
      updatedStatus = "completed";
    } else {
      updatedStatus = "to-do"; // Set a default status if needed
    }

    try {
      const updatedTasks = tasks.filter((task) => task._id !== draggableId);
      const draggedTask = tasks.find((task) => task._id === draggableId);

      if (draggedTask) {
        draggedTask.status = updatedStatus;
        updatedTasks.splice(destinationIndex, 0, draggedTask);
      }

      setTasks(updatedTasks);

      await axiosPublic.patch(`/tasks/${draggableId}`, {
        status: updatedStatus,
      });

      // Additionally, update the state for completed tasks
      if (updatedStatus === "completed") {
        const updatedCompletedTasks = completedtask.filter(
          (task) => task._id !== draggableId
        );
        updatedCompletedTasks.push(draggedTask);
        setComplete(updatedCompletedTasks);
      }

      refetch();
    } catch (error) {
      console.error("Error updating task status:", error);
      setTasks(tasks);
    }
  };

  const handleDelete = async (id) => {
    const res = await axiosPublic.delete(`/tasks/${id}`);
    if (res.data.deletedCount) {
      Swal.fire({
        icon: "success",
        title: "Task has been Deleted",
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {" "}
      <div className="py-16">
        <InnerSectiontitle
          title={"Manage Tasks"}
          subtitle={"Manage task in one place"}
        ></InnerSectiontitle>
      </div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Droppable droppableId="todo">
            {(provided) => (
              <div
                className="border rounded-md p-5"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <h2 className="text-center text-2xl font-bold pb-5">
                  To-do List
                </h2>
                <div className="space-y-3">
                  {tasks.map((task, index) => (
                    <Draggable
                      key={task?._id}
                      draggableId={task?._id} // Ensure a string is used as draggableId
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-[#f8f8f8] capitalize space-y-2 p-4 rounded"
                        >
                          <h2 className="text-lg font-bold">
                            Title: {task?.title}
                          </h2>
                          <p>Description: {task?.description}</p>
                          <p>Priority: {task?.priority}</p>
                          <p>Deadline: {task?.deadline}</p>
                          <button
                            onClick={() => handleDelete(task?._id)}
                            className="btn  bg-[#d88531] border-[#d88531] btn-sm  rounded  hover:bg-[#4c5161] hover:border-[#4c5161] text-white font-medium"
                          >
                            Delete
                          </button>
                          <button
                            onClick={() =>
                              navigate(`/dashboard/edit/${task?._id}`)
                            }
                            className="btn ml-2 bg-[#d88531] border-[#d88531] btn-sm  rounded  hover:bg-[#4c5161] hover:border-[#4c5161] text-white font-medium"
                          >
                            Edit
                          </button>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
          <Droppable droppableId="ongoing">
            {(provided) => (
              <div
                className="border rounded-md p-5"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <h2 className="text-center text-2xl font-bold pb-5">
                  Ongoing List
                </h2>
                <div className="space-y-3">
                  {ongoing.map((task, index) => (
                    <Draggable
                      key={task?._id}
                      draggableId={task._id} // Ensure a string is used as draggableId
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided?.innerRef}
                          {...provided?.draggableProps}
                          {...provided?.dragHandleProps}
                          className="bg-[#f8f8f8] capitalize space-y-2 p-4 rounded"
                        >
                          <h2 className="text-lg font-bold">
                            Title: {task.title}
                          </h2>
                          <p>Description: {task.description}</p>
                          <p>Priority: {task.priority}</p>
                          <p>Deadline: {task.deadline}</p>
                          <button
                            onClick={() => handleDelete(task?._id)}
                            className="btn  bg-[#d88531] border-[#d88531] btn-sm  rounded  hover:bg-[#4c5161] hover:border-[#4c5161] text-white font-medium"
                          >
                            Delete
                          </button>
                          <button
                            onClick={() =>
                              navigate(`/dashboard/edit/${task?._id}`)
                            }
                            className="btn ml-2 bg-[#d88531] border-[#d88531] btn-sm  rounded  hover:bg-[#4c5161] hover:border-[#4c5161] text-white font-medium"
                          >
                            Edit
                          </button>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
          {/* For Completed */}

          <Droppable droppableId="completed">
            {(provided) => (
              <div
                className="border rounded-md p-5"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <h2 className="text-center text-2xl font-bold pb-5">
                  Completed
                </h2>
                <div className="space-y-3">
                  {completedtask?.map((task, index) => (
                    <Draggable
                      key={task?._id}
                      draggableId={task?._id} // Ensure a string is used as draggableId
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-[#f8f8f8] capitalize space-y-2 p-4 rounded"
                        >
                          <h2 className="text-lg font-bold">
                            Title: {task?.title}
                          </h2>
                          <p>Description: {task?.description}</p>
                          <p>Priority: {task?.priority}</p>
                          <p>Deadline: {task?.deadline}</p>
                          <button
                            onClick={() => handleDelete(task?._id)}
                            className="btn  bg-[#d88531] border-[#d88531] btn-sm  rounded  hover:bg-[#4c5161] hover:border-[#4c5161] text-white font-medium"
                          >
                            Delete
                          </button>
                          <button
                            onClick={() =>
                              navigate(`/dashboard/edit/${task?._id}`)
                            }
                            className="btn ml-2 bg-[#d88531] border-[#d88531] btn-sm  rounded  hover:bg-[#4c5161] hover:border-[#4c5161] text-white font-medium"
                          >
                            Edit
                          </button>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </>
  );
};

export default TaskMange;
