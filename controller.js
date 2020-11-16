angular.module('YTJSLibApp')
.controller('homeController', function($scope){
    $scope.title = "Select a video";
})
.controller('videoController', function($scope, $stateParams, $sce){
    $scope.videoId = $stateParams.id;
    $scope.videoTitle = $stateParams.title;
    $scope.videoLink = $sce.trustAsResourceUrl("//www.youtube.com/embed/" + $scope.videoId);
})
.controller('searchVideosController', function($scope, $http, $filter, $stateParams){
    $scope.youtubeData = [];
    $scope.nextPage = "";
    $scope.youtubeSearchText = "";
    $scope.user = $stateParams.user;
    $scope.getYoutubeData = function(searchText){
        $http.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                key: api_key,
                type: 'video',
                maxResults: '9',
                pageToken: $scope.nextPage ? $scope.nextPage : '',
                part: 'id,snippet',
                fields: 'items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/default,items/snippet/channelTitle,nextPageToken,prevPageToken',
                q: searchText
            }
        }).then(function(data){
            if(data.data.items.length === 0) {
                $scope.youtubeData = 'No results were found!';
            }
            $scope.youtubeSearchText = searchText;
            $scope.youtubeData = data.data.items;
            $scope.nextPageToken = data.data.nextPageToken;
            $scope.prevPageToken = data.data.prevPageToken;
        });
    };
    $scope.checkDataLength = function(data){
        return (data.length >=1);
    };
    $scope.callNextPageFn = function(nextPage){
        $scope.nextPage = nextPage;
        $scope.getYoutubeData($scope.youtubeSearchText);
    };
    $scope.addToLibrairy = function(title, video_id){
        $http.get(main_url + '/add_video.php', {
            params: {
                user: $scope.user,
                title: title,
                video_id: video_id,
            }
        }).then(function(data){
            window.location.reload();
        });
    }
});
