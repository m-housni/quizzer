var quests = [
    {
    "quest" : "Choose the best explanation for the snippet",
    "imgUrl" : "",   
    "choices" : [
      "Give an idea about the link",
      "Delete the link",
    ],
    "resp" : "1"
  },  
  {
    "quest" : "What does this snippet do?",
    "imgUrl" : "img/snippet-1.jpg",
    "choices" : [
      "Draws a green square",
      "Does nothing"
    ],
    "resp" : "1"
  },  
  {
    "quest" : "What does CSS stand for?",
    "imgUrl" : "",
    "choices" : [
      "Cascaded Style Sheet",
      "Cascading Style Sheet"
    ],
    "resp" : "2"
  },
  {
    "quest" : "What does AJAX stand for?",
      "imgUrl":"",
    "choices" : [
      "Java Script And XML",
      "Java Script And XMN"
    ],
    "resp" : "1"
  },
  {
    "quest" : "What does HTML stand for?",
      "imgUrl":"",
    "choices" : [
      "Hyper Texto Markup Language",
      "Hyper Text Markup Language"
    ],
    "resp" : "2"
  }
];

var randQ;
var rightAns =0;
var totAns =0

/* question */
function newQuestion(){
    randQ = Math.floor((Math.random() * quests.length) + 0);
    var html = "";
    html += "<h3>"+quests[randQ].quest+"</h3>";
    if(quests[randQ].snippet) html += '<textarea>'+quests[randQ].snippet+'</textarea>';
    html += "<ol>";
    for(i = 0; i < quests[randQ].choices.length; i++)
        html += "<li>"+quests[randQ].choices[i]+"</li>";
    html += "</ol>";
    document.getElementById("q").innerHTML = html;  
    
    // answer
    document.getElementById("answer").addEventListener("change", checkAns);
    
};

    function checkAns(){
        var yourAns = document.getElementById('answer').value;
        if(yourAns === quests[randQ].resp ) rightAns++; totAns++;
        document.getElementById("score").innerHTML = rightAns + ' / ' + totAns;
        document.getElementById("answer").value = '';
        newQuestion();
    }






    