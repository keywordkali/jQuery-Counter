$().ready(() => {
    //only executed once at startup
    //this impacts functions when the DOM is manipulated
        console.log("This function adds 1");
        $("button").click(() => {
                console.log("Number added");
                let value = $("#nbr").val(); //pulls the value which is 5 and prints to the console
           console.log(value); 
           value = Number(value)+1;
           $("#nbr").val(value); //this pushes the new value into the input control
            });
           
    
    });

    $().ready(() => {
        
            console.log("This function removes 1");
            $("-button").click(() => {
                    console.log("Number removed");
                    let value = $("#nbr").val(); 
               console.log(value); 
               value = Number(value)-1;
               $("#nbr").val(value); 
                });
               
        
        });