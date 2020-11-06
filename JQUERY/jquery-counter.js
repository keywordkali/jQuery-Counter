$().ready(() => {
    
        $("#add").click(() => {
                let value = $("#nbr").val(); 
           console.log(value); 
           value = Number(value)+1;
           $("#nbr").val(value); 
            });
           
    
    });

    $().ready(() => {
        
            
            $("#minus").click(() => {
                    let value = $("#nbr").val(); 
               console.log(value); 
               value = Number(value)-1;
               $("#nbr").val(value); 
                });
               
        
        });

