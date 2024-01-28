import { PropsWithChildren } from "react";
import { IdScopeContext, createIdScope, useIdScope } from "./IdGeneratorContext";

const IdScoped: React.FC<PropsWithChildren<{id: string, index?: number}>> = (props) => {
    const parentIdGenerator = useIdScope();
    const nextIdSegment = props.index === undefined ?  props.id : `${props.id}-${props.index}`;
    return (
        <IdScopeContext.Provider value={createIdScope([...parentIdGenerator.getSegments(), nextIdSegment])}>
            <div id={parentIdGenerator.getItemId(nextIdSegment)}>{props.children}</div>
        </IdScopeContext.Provider>);
}

export default IdScoped;