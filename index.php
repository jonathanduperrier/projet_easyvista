<!DOCTYPE html>
<html>

  <head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <link data-require="angular.js@1.7.8" data-semver="1.7.8" rel="stylesheet" href="https://code.angularjs.org/1.7.8/angular-csp.css" />
    <link rel="stylesheet" href="style.css" type="text/css" media="all" />
    <script type="text/javascript" src="js/angular.js"></script>
    <script type="text/javascript" src="js/angular-ui-router.js"></script>
    <script type="text/javascript" src="app.js"></script>
    <script type="text/javascript" src="controller.js"></script>
  </head>

  <body ng-app="YTJSLibApp">
    <!-- On affiche un message le temps que les scripts chargent -->
    <div class="menubar">
    <?php
        $user = $_GET["user"];
        $json = file_get_contents("lib/$user.lib.json", true);
        if ($json != false){
            $obj = json_decode($json);
            echo '<h2>'.$obj->name.'</h2>';
            foreach($obj->videos as $video){
                echo '<div class="video_button">';
                echo '<a href="?user='.$user.'#!/video/'. $video->id .'/'. $video->title .'">'. $video->title .'</a>';
                echo '</div>';
            }
        }
    ?>
    </div>
    <div class="video_side" ui-view>Loading ...</div>
  </body>
</html>