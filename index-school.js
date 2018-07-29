
function reviveBtn() {
    alert("Estamos procesando tu entrega!");
    $("#certificateBtn").removeAttr('disabled');
}

$(document).ready(function() {
    $("#sendMaterials").on("click", reviveBtn);
    
});