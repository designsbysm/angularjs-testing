angular.module("UnitTesting")
  .controller("spinnerBoxController", function ($scope, spinnerService) {
    $scope.spinnerTitle = () => {
      return spinnerService.getText() || "Loading...";
    };

    $scope.spinnerShow = () => {
      const show = spinnerService.getShow();

      if (show) {
        if (!showing) {
          spinner.spin(target);
        }
      } else {
        if (showing) {
          spinner.stop();
        }
      }

      showing = show;

      return show;
    };

    const options = {
      className: "spinner", // The CSS class to assign to the spinner
      color: "#fff", // #rgb or #rrggbb or array of colors
      corners: 1, // Corner roundness (0..1)
      direction: 1, // 1: clockwise, -1: counterclockwise
      fps: 20, // Frames per second when using setTimeout() as a fallback for CSS
      hwaccel: false, // Whether to use hardware acceleration
      left: "50%", // Left position relative to parent
      length: 8, // The length of each line
      lines: 13, // The number of lines to draw
      opacity: 0.1, // Opacity of the lines
      position: "absolute", // Element positioning
      radius: 20, // The radius of the inner circle
      rotate: 0, // The rotation offset
      scale: 1, // Scales overall size of the spinner
      shadow: false, // Whether to render a shadow
      speed: 0.8, // Rounds per second
      top: "40%", // Top position relative to parent
      trail: 60, // Afterglow percentage
      width: 6, // The line thickness
      zIndex: 2e9, // The z-index (defaults to 2000000000)
    };
    const target = document.getElementsByClassName("spinner-box")[0];
    const spinner = new Spinner(options);

    let showing = false;
  })
  .directive("spinnerBox", function () {
    return {
      controller: "spinnerBoxController",
      templateUrl: "/templates/shared/spinner-box.html",
    };
  });
