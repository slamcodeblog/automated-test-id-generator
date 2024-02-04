import React from 'react';
import { TaskItem } from './TaskItem';
import IdScoped from '../id-generator/IdScoped';
import { Task } from './tasks.types';

export const TasksList: React.FC<{ tasks: Task[] }> = (props) => {

    return (<>
                <IdScoped id='tasks-list'>
                    <ul>
                        {props.tasks.map((t, index) => {
                            return <li key={t.id}><TaskItem task={t}/></li>;
                        })}
                    </ul>
                </IdScoped>
            </>);
}