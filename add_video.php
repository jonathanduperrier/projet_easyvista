<?php
    //On gère les erreurs avant l'appel
    set_error_handler(function ($err_severity, $err_msg, $err_file, $err_line, array $err_context)
    {
        throw new ErrorException( $err_msg, 0, $err_severity, $err_file, $err_line );
    }, E_WARNING);
    try {
        $user = filter_input(INPUT_GET, 'user', FILTER_SANITIZE_STRING);
        if($user == NULL){
            throw new Exception("no user");
        }
        $videoId = filter_input(INPUT_GET, 'video_id', FILTER_SANITIZE_STRING);
        if($videoId == NULL){
            throw new Exception("no video id");
        }
        $title = filter_input(INPUT_GET, 'title', FILTER_SANITIZE_STRING);
        if($title == NULL){
            throw new Exception("no title");
        }

        //Lecture du fichier JSON
        $json = file_get_contents("lib/$user.lib.json", true);
        $obj = json_decode($json, true);

        //On ajoute les données passées en paramètre dans le fichier JSON
        $data["title"] = $title;
        $data["id"] = $videoId;
        array_push($obj["videos"], $data);
        // echo "<pre>";
        // print_r($obj);
        // echo "</pre>";
        $json = json_encode($obj);
        file_put_contents("lib/$user.lib.json", $json);
        echo "<p>Success</p>";
        
    } catch (Exception $e) {
        echo "<p>$e</p>";
    }
    //on restore le gestionnaire d'erreurs précédent
    restore_error_handler();
?>