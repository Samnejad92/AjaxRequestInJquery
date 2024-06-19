function onLoad(){
    console.log('salam');
    $.ajax({
        url: "http://unique-game.ir/api/ScoreController.php?action=read",
        error: function(){
            alert("something wrong");
        },
        success : function(result, status, xhr){
            // const tbody=document.querySelector('tbody');
            // console.log(typeof JSON.parse(result));
            // tbody.innerHTML=JSON.parse(result).map(item=>{
            //     return `<tr>
            //     <td>${item.id}</td>
            //     <td>${item.nickName}</td>
            //     <td>${item.score}</td>
            //     <td>${item.mistake}</td>
            //     <td>${item.help}</td>
            //     <td>${item.time}</td>
            //     </tr>`;
            // }).join('');
            console.log(result);
            console.log(status);
            console.log(xhr);
            
        },
    });
}
function fetchDataWithAxios(){
    axios.get("http://unique-game.ir/api/ScoreController.php?action=read")
    .then((res)=>{
        console.log(res.data);
    })
    .catch((err)=>{
        console.log(err);
    });
}