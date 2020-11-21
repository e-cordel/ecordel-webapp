import { Author } from './author';
import { Xilogravura } from './xilogravura';

export interface Cordel {
    id: number;
    title: string;
    xilogravura: Xilogravura;
    tags: string[];
    content: string;
    author: Author;
    rating: number;
    description : string;
}