import React from 'react';
import { Task } from './tasks.types';
import { TasksList } from './TasksList';
import IdScoped from '../id-generator/IdScoped';

type TaskItemProps = {
    task: Task
}

export const TaskItem: React.FC<TaskItemProps> = (props) => {
    return (<IdScoped key={props.task.id} id={'task'+props.task.id.toString()}>
    {props.task.name}
    {props.task.subtasks && props.task.subtasks.length > 0 ? <TasksList tasks={props.task.subtasks} /> : undefined}
    </IdScoped>);
}