window.onload = () => {
    const button5 = document.getElementById('btn5');
  
    //as soon as the button5 clicked
    button5.addEventListener('click' , () => {
        let ids = [1,2,3,6,9,8,7,4]; //the id of the buttons sorted
        let arr=[];
        for(let i=0; i<8;i++){
            //first get the content of each button in the desired sort
            arr.push(document.getElementById('btn' + ids[i]).innerText);
        }
        arr = [...arr.slice(arr.length -1) , ...arr.slice(0, arr.length -1)]; //ahhhhhhhhh I love slice()
        for(let i=0;i<8;i++){
            //at last, add the new contents to the buttons (use ids[])
            document.getElementById('btn' + ids[i]).innerText = arr[i];
        }
    });
}
