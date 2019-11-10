/* eslint-disable no-undef */

angular.module("UnitTesting")
  .service("iconService", function () {
    const icons = {
      admin: {
        admin: "fa-cogs",
        csv: "fa-table",
        maintenance: "fa-toolbox",
        users: "fa-users",
      },
      general: {
        admin: "fa-user",
        download: "fa-arrow-circle-down",
        dropdown: "fa-caret-down",
        login: "fa-sign-in",
        logout: "fa-sign-out",
        upload: "fa-arrow-circle-up",
      },
      modal: {
        close: "fa-times",
        default: "fa-info-circle",
        error: "fa-times-circle",
        question: "fa-question-circle",
        success: "fa-check-circle",
      },
    };

    return {
      getIcon(group, type) {
        if (!icons[group] || !icons[group][type]) {
          return "fa-bug";
        }

        return icons[group][type];
      },
    };
  });
