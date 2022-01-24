$(document).ready(function(){
    $("#form-div").submit(function(event){
        $("#nome-invalido").hide();
        $("#cpf-invalido").hide();
        $("#uf-invalido").hide();

        var cpf = $("#cpf").val();

        //verifica se o campo nome foi preenchido
        if($("#nome").val() == "")
            $("#nome-invalido").show();

        //valida o campo cpf
        else if(cpf.length != 11)
            $("#cpf-invalido").show();
        
        //valida o campo UF
        else if($("#uf").val() == "selecione...")
            $("#uf-invalido").show();
        
        else{
            $(".modal").show();
        }

        event.preventDefault();
    });

    //garante que o campo cpf tera apenas numeros
    $("#cpf").keypress(function(e){   
        var charCode = (e.which) ? e.which : event.keyCode    

        if (String.fromCharCode(charCode).match(/[^0-9]/g))    

            return false;                        
    });

    //dispensa o modal
    $("#modal-close").click(function(){
        $(".modal").hide();
    });
});
