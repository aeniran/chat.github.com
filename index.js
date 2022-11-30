

var btn=document.getElementsByClassName("btn")[0]
btn.addEventListener("click",talk)
function talk() {
    var know = {
        "what is your name":"Citichoice bot,how can I help you",
        "what do you do": "hello, Codewith-random here",
        "how are you": "Good :)",
        "what can i do for you": "Search Citichoice  on Google>> Thank me Later",
        "your Followers": "I have my family of 20000 members, I don't have Follower, have Supportive Family",
        ok:"Thank You so much ",
        bye:"Okay! Will meet soon.."
    };
    
    var user=document.getElementById("userbox").value;
    
    document.getElementById("chatLog").innerHTML=user + "<br>";
    if (user in know) {
        document.getElementById("chatLog").innerHTML=know[user]+"<br>";
    } else{
        document.getElementById("chatLog").innerHTML="Sorry, I didn't undertand <br>";
    }
}