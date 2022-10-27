

export interface ICharacters{
    name: string;
    family: string;
    age: number;
    status: boolean;
    imageURL: string
}
export interface ICard extends ICharacters{
    kingdomYear: number;
    message: "Vais a morir todos"
}
