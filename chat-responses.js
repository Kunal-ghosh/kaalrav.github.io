function getBotResponse(input) {

    // Simple responses
    if (input == "hello" || input == "hi" ) {
        return "Hello there!";
    } 
    
    else if (input == "how are you" ) 
    {
        return "i am fine! how are you";
    } 

    else if (input == "I am having problem with registration") 
    {
        return "Go to the contact section and mail or dm in Instagram to our over all coordinators";
    } 

    else if (input == "where is Smit located" || input ==  "smit") 
    {
        return "Sikkim Manipal Institute of Technology <br> Majitar, Rangpo, Sikkim 737136";
    } 


    else if (input == "location") 
    {
        return "Sikkim Manipal Institute of Technology <br> Majitar, Rangpo, Sikkim 737136";
    } 

    else if (input == "registration"||input=="i am having problem with registration" ||input== "problem with registration") 
    {
        return "Go to the contact section and mail or dm in Instagram to our over all coordinators";
    } 

    else if (input == "how can i get the passes" || input=="how can i get the pass " || input== "pass"||  input== "passes") 
    {
        return "";
    } 
    else if (input == "events" || input=="event" || input== "event list" || input== "events list") 
    {
        return "EVENT LIST- <br><br>1.Solo Singing (Eastern &Western)<br>2.Battle of Bands<br>3.Rapping <br>4.Beatboxing <br>5.Instrumental <br>6.Solo Dance ( Eastern & Western)<br>7.Group Dance Battle <br>8.Street Dance<br>9.Street play <br>10.Fashion Show <br>11.Mr & Miss KAALRAV <br>12.Dj Wars<br>13.Treasure Hunt<br>14.Poster for sponsor<br>15.Digital Art <br>16.Face Painting <br>17.Debate<br>18.Tug of War<br>19.E-Games<br>20.Open mic/Just a Minute<br>21. All India political parties meet (AIPPM)<br>22. Creative Writing<br>23. Photography<br>24. Movie Making/Director’s Cut <br>25. coming soon";
    } 
    else {
        return "Try asking something else!";
    }
}