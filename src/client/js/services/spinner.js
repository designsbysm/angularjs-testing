angular.module("UnitTesting")
  .service("spinnerService", function ($timeout) {
    let show = false;
    let text = "";

    return {
      getShow: () => {
        return show;
      },

      getText: () => {
        return text;
      },

      start: newText => {
        $timeout(() => {
          text = newText;
          show = true;
        });
      },

      stop: () => {
        $timeout(() => {
          show = false;
        });
      },

      text: newText => {
        text = newText;
      },
    };
  });
