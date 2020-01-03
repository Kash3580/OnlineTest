import { Injectable} from "@angular/core"


@Injectable()
export class QuestionService{
   getQuestions(){
    return QuestionData
   }

   getQuestion(id:number){
        return QuestionData
   }
}
const QuestionData=  [
       {
           "category": "Animals",
           "type": "multiple",
           "difficulty": "easy",
           "question": "What is the scientific name for modern day humans?",
           "correct_answer": "Homo Sapiens",
           "incorrect_answers": [

               "Homo Ergaster",
               "Homo Erectus",
                "Homo Sapiens",
               "Homo Neanderthalensis"
           ]
       },
       {
           "category": "Animals",
           "type": "multiple",
           "difficulty": "hard",
           "question": "Which species of Brown Bear is not extinct?",
           "correct_answer": "Syrian Brown Bear",
           "incorrect_answers": [
              "Syrian Brown Bear",
               "California Grizzly Bear",
               "Atlas Bear",
               "Mexican Grizzly Bear"
           ]
       },
       {
           "category": "Animals",
           "type": "multiple",
           "difficulty": "medium",
           "question": "What color/colour is a polar bear&#039;s skin?",
           "correct_answer": "Black",
           "incorrect_answers": [
               "White",
               "Pink",
               "Green"
           ]
       },
       {
           "category": "Animals",
           "type": "multiple",
           "difficulty": "medium",
           "question": "What are rhino&#039;s horn made of?",
           "correct_answer": "Keratin",
           "incorrect_answers": [
               "Bone",
               "Ivory",
               "Skin"
           ]
       },
       {
           "category": "Animals",
           "type": "multiple",
           "difficulty": "hard",
           "question": "How many known living species of hyenas are there?",
           "correct_answer": "4",
           "incorrect_answers": [
               "8",
               "2",
               "6"
           ]
       },
       {
           "category": "Animals",
           "type": "multiple",
           "difficulty": "medium",
           "question": "Which animal was part of an Russian domestication experiment in 1959?",
           "correct_answer": "Foxes",
           "incorrect_answers": [
               "Pigeons",
               "Bears",
               "Alligators"
           ]
       },
       {
           "category": "Animals",
           "type": "multiple",
           "difficulty": "hard",
           "question": "What type of creature is a Bonobo?",
           "correct_answer": "Ape",
           "incorrect_answers": [
               "Lion",
               "Parrot",
               "Wildcat"
           ]
       },
       {
           "category": "Animals",
           "type": "multiple",
           "difficulty": "medium",
           "question": "Which of these species is not extinct?",
           "correct_answer": "Komodo dragon",
           "incorrect_answers": [
               "Japanese sea lion",
               "Tasmanian tiger",
               "Saudi gazelle"
           ]
       },
       {
           "category": "Animals",
           "type": "multiple",
           "difficulty": "medium",
           "question": "The dish Fugu, is made from what family of fish?",
           "correct_answer": "Pufferfish",
           "incorrect_answers": [
               "Bass",
               "Salmon",
               "Mackerel"
           ]
       },
       {
           "category": "Animals",
           "type": "multiple",
           "difficulty": "easy",
           "question": "How many teeth does an adult rabbit have?",
           "correct_answer": "28",
           "incorrect_answers": [
               "30",
               "26",
               "24"
           ]
       }
];
