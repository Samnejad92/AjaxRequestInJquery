function onLoad(){
    console.log('salam');
    $.ajax({
        url:'https://reqres.in/api/users?page=2',
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