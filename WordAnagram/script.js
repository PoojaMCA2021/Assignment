let checkAnagram=document.getElementById("check");


checkAnagram.addEventListener('click',e=>{
    let firstWordInput=document.getElementById("firstWord").value;
    let secondWordInput=document.getElementById("secondWord").value;

    if(firstWordInput=="" ||secondWordInput=="")
    {
       let errordesc=document.getElementsByClassName("error-msg");
       Array.from(errordesc).forEach(element=>{
        element.style.color="red";
        element.innerHTML="Enter word";
    
       })
    }
    else{
    let result= check(firstWordInput,secondWordInput)
        if(result)
        {
            let resultdesc=document.getElementById("result")
            resultdesc.style.color="green";
            resultdesc.innerHTML="Words are anagram";
           
        }
        else{
            let resultdesc=document.getElementById("result")
            resultdesc.style.color="red";
            resultdesc.innerHTML="Words are not anagram";
        }
    }
    
})

function check(firstWord,secondWord)
{
    if(firstWord.length!=secondWord.length)
    return false;

    let sortedFword=Array.from(firstWord).sort();
    let sortedSWord=Array.from(secondWord).sort();
    

    for(let i=0;i<sortedFword.length;i++)
    {
        if(sortedFword[i]!=sortedSWord[i])
            return false;
    }
    return true;
}