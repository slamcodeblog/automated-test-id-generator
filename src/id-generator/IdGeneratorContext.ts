import { createContext, useContext } from "react"

export interface IIdScope {
    getSegments: () => string[];
    getItemId: (suffix: string) => string;
    getListItemId: (suffix: string, index: number) => string;
}

function normalize(value: string): string {
    return value.toLowerCase().replaceAll(' ', '-');
}

function generateId(segments: string[]): string {
    return segments.map(normalize).join('-');
}

class IdScope implements IIdScope {
    readonly idSegments: string[];
    constructor(idSegments: string[]){
        this.idSegments = idSegments;
    }

    getSegments= () => [...this.idSegments];
    getItemId = (suffix: string) => generateId(this.idSegments.concat(suffix));
    getListItemId = (suffix: string, index: number) => generateId(this.idSegments.concat(suffix, index.toString()));
}

export const IdScopeContext = createContext(new IdScope([]) as IIdScope);

export function createIdScope(idSegments: string[]): IIdScope {
    return new IdScope(idSegments);
}

export function useIdScope(): IIdScope {
    return useContext<IIdScope>(IdScopeContext);
}
