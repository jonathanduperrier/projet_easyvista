function removeToLibrairy(user, video_id){
    var r = confirm("Êtes-vous sur de vouloir supprimer cette vidéo de la librairie ?");
    if(r == true){
        var xhr = new XMLHttpRequest(),
        method = "GET",
        url = main_url+"/remove_video.php?user="+user+"&video_id="+video_id;
        xhr.open(method, url, true);
        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4 && xhr.status === 200) {
                window.location.reload();
            }
        };
        xhr.send();
    }
}