export interface PantryItem {
    product?: {
        name?: string,
        imageUrl?: string
    };
    code?: string;
    id?: number;
    aliasList?: [];
    inPantry: boolean;
    custom?: {
        name: string,
        imageUrl?: string
    }
}