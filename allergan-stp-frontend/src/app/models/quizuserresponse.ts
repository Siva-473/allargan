export class QuizUserResponse{    
	 userId:number;
	 quizId:number;
	 questionId:number;
	 journeyId:number;
	 attempt:number;
	 questionIds:Array<Number>;
	 jsonUserAnswer:Array<Number>;
	 jsonCorrectAnswer:Array<Number>;
	 correct:boolean;	
}