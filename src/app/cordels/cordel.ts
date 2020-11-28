import { Author } from '../author/author';
import { Xilogravura } from '../xilogravura/xilogravura';

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