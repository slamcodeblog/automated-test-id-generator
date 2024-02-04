import { createContext, useContext } from "react"

export interface IIdScope {
    getSegments: () => string[];
    getItemId: (suffix: string, index?: number) => string;
}

function normalize(value: string): string {
    return value.toLowerCase().replaceAll(' ', '-');
}

function generateId(segments: string[]): string {
    return segments.map(normalize).join('-');
}

class IdScope implements IIdScope {
    private readonly _idSegments: string[];
    constructor(idSegments: string[]){
        this._idSegments = idSegments;
    }

    getSegments= () => [...this._idSegments];
    getItemId = (suffix: string, index?: number) =>
        index === undefined ? generateId(this._idSegments.concat(suffix))
            : generateId(this._idSegments.concat(suffix, index.toString()));
}

export const IdScopeContext = createContext(new IdScope([]) as IIdScope);

export function createIdScope(idSegments: string[]): IIdScope {
    return new IdScope(idSegments);
}

export function useIdScope(): IIdScope {
    return useContext<IIdScope>(IdScopeContext);
}
