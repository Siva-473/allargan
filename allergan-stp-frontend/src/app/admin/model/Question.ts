import { QSData } from './AnswerData';
export class Question {
    id: number;
    title:string;
    assetTypeId: number;
    therapeuticAreaId: number;
    diseaseStateId: number;
    productId: number;
    status: string;
    qsData : QSData;
}