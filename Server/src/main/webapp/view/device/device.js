/**
 *
 * Home   模块
 *
 * @author marker
 * @date 2016-06-05
 */
define(['app','jquery'], function (app, $) {//加载依赖js,


	var callback = ["$scope", function ($scope) {

        faceinner.get(api['user.device'], function(res){
            if (res.status == 0) {
                $scope.$apply(function() {
                    $scope.list = res.data;
                });
            }
        });

        /**
         * 编辑设备
         */
        $scope.editDevice = function(item){

            item.createTimeStr = (new Date(item.createTime))
                .format("yyyy-MM-dd hh:mm:ss");
            $scope.item = item;
            $("#editDevice").modal({
                backdrop: false
            });
		}

        /**
         * 保存
         */
		$scope.save = function(){
		    console.log("baocu");






            faceinner.post(api['user.device'], $scope.item , function(res) {
                if (res.status == 0) {

                    console.log("===========")

                }
            });

        }

        /**
         * 弹框退出
         */
		$scope.exit = function(){
            $("#editDevice").modal('hide');
        }
		 
		 
 	}];
	
	
	// app.controller('IndexController', callback );
	return callback;
});