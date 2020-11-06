<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <link data-require="angular.js@1.7.8" data-semver="1.7.8" rel="stylesheet" href="https://code.angularjs.org/1.7.8/angular-csp.css" />
    <link rel="stylesheet" href="style.css" type="text/css" media="all" />
    <script type="text/javascript" src="js/angular.js"></script>
    <script type="text/javascript" src="js/angular-ui-router.js"></script>
    <script type="text/javascript" src="js/api_key.js"></script>
    <script type="text/javascript" src="app.js"></script>
    <script type="text/javascript" src="controller.js"></script>
    <script type="text/javascript" src="directives/searchBox.js"></script>
    <script type="text/javascript" src="directives/pagination.js"></script>
  </head>
  <body ng-app="YTJSLibApp">
    <title>Youtube JS Librairy</title>
    <!-- On affiche un message le temps que les scripts chargent -->
    <div class="menubar">
    <?php
        //On gère les erreurs avant l'appel
        set_error_handler(function ($err_severity, $err_msg, $err_file, $err_line, array $err_context)
        {
            throw new ErrorException( $err_msg, 0, $err_severity, $err_file, $err_line );
        }, E_WARNING);
        try {
            //On récupère l'user et on gere l'exception si celui-ci n'existe pas
            if( isset($_GET["user"])){
              $user = $_GET["user"];
            } else {
              $user = null;
              throw new Exception("no user");
            }
            //Lecture du fichier JSON
            $json = file_get_contents("lib/$user.lib.json", true);
            $obj = json_decode($json);
            //Nom de la librairie
            echo '<div class="lib_title">'.$obj->name.'</div>';
            echo '<div class="video_button">';
            echo '<a href="#!/search-videos">[+]</a>';
            echo '</div>';
            //Afficher un lien par vidéo
            foreach($obj->videos as $video){
                echo '<div class="video_button">';
                echo '<a href="?user='.$user.'#!/video/'. $video->id .'/'. $video->title .'">'. $video->title .'</a>';
                echo '</div>';
            }
        } catch (Exception $e) {
            if($user){
              echo "<span class=\"error\">L'utilisateur $user est n'existe pas</span>";
            } else {
              echo "<span class=\"error\">Utilisateur Invalide</span>";
            } 
        }
        //on restore le gestionnaire d'erreurs précédent
        restore_error_handler();
    ?>
    </div>
    <div class="video_side" ui-view>Loading ...</div>
  </body>
</html>