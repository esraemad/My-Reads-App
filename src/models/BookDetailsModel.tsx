import { BookData } from "./BookModel";

export interface BookDetails extends BookData {
    pageCount: number,
    description: string,
    publishedDate: string,
    averageRating: number,
    categories: string,
} 