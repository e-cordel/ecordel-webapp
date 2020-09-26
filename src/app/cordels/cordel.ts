import { Author } from './author';

export interface Cordel {
    id: number;
    title: string;
    xilogravura: string;
    tags: string[];
    content: string;
    author: Author;
    rating: number;
    description : string;
}