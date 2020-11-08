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
            $user = null;
            throw new Exception("no user");
        }
        if( isset($_GET["video_id"])){
            $videoId = $_GET["video_id"];
        } else {
            $videoId = null;
            throw new Exception("no video id");
        }
        if( isset($_GET["title"])){
            $title = $_GET["title"];
        } else {
            $title = null;
            throw new Exception("no title");
        }
        //Lecture du fichier JSON
        $json = file_get_contents("lib/$user.lib.json", true);
        $obj = json_decode($json);

        //On ajoute les données passées en paramètre dans le fichier JSON
        $data["title"] = $title;
        $data["id"] = $videoId;
        array_push($obj->videos, $data);
        echo "<pre>";
        print_r($obj);
        echo "</pre>";
        $json = json_encode($obj);
        file_put_contents("lib/$user.lib.json", $json);
        echo "<p>Success</p>";
        
    } catch (Exception $e) {
        if($e == "no user"){
            if($user){
            echo "<span class=\"error\">L'utilisateur $user est n'existe pas</span>";
            } else {
            echo "<span class=\"error\">Utilisateur Invalide</span>";
            }
        } else {
            echo "<span class=\"error\">$e</span>";
        }
    }
    //on restore le gestionnaire d'erreurs précédent
    restore_error_handler();
?>