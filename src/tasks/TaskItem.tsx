import React from 'react';
import { Task } from './tasks.types';
import { TasksList } from './TasksList';

type TaskItemProps = {
    task: Task
}

export const TaskItem: React.FC<TaskItemProps> = (props) => {
    return (<>
    {props.task.name}
    {props.task.subtasks && props.task.subtasks.length > 0 ? <TasksList tasks={props.task.subtasks} /> : undefined}
    </>);
}