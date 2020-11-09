<?php
    //On gère les erreurs avant l'appel
    set_error_handler(function ($err_severity, $err_msg, $err_file, $err_line, array $err_context)
    {
        throw new ErrorException( $err_msg, 0, $err_severity, $err_file, $err_line );
    }, E_WARNING);
    try {
        if( isset($_GET["user"])){
            $user = $_GET["user"];
        } else {
            throw new Exception("no user");
        }
        if( isset($_GET["video_id"])){
            $videoId = $_GET["video_id"];
        } else {
            throw new Exception("no video id");
        }

        //Lecture du fichier JSON
        $json = file_get_contents("lib/$user.lib.json", true);
        $obj = json_decode($json, true);
        //Recherce de l'élément à supprimer en fonction de l'id de la vidéo
        foreach($obj["videos"] as $key=>$value){
            if($value["id"] == $videoId){
                unset($obj["videos"][$key]);
            }
        }
        $json = json_encode($obj);
        file_put_contents("lib/$user.lib.json", $json);
        echo "<p>Success</p>";
        
    } catch (Exception $e) {
        echo "<p>$e</p>";
    }
    //on restore le gestionnaire d'erreurs précédent
    restore_error_handler();
?>