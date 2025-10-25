// Menu Mobile
const buttonMenuMobile = document.querySelector(".header .inner-button-menu");
if (buttonMenuMobile) {
  const sider = document.querySelector(".sider");
  const siderOverlay = document.querySelector(".sider-overlay");

  buttonMenuMobile.addEventListener("click", () => {
    sider.classList.add("active");
    siderOverlay.classList.add("active");
  });

  siderOverlay.addEventListener("click", () => {
    sider.classList.remove("active");
    siderOverlay.classList.remove("active");
  });
}
// ENd Menu Mobile

// Schedule Section 8
const scheduleSection8 = document.querySelector(".section-8 .inner-schedule");
if (scheduleSection8) {
  const buttonCreate = scheduleSection8.querySelector(".inner-schedule-create");
  const scheduleList = scheduleSection8.querySelector(".inner-schedule-list");

  //Tạo mới
  buttonCreate.addEventListener("click", () => {
    const firstItem = scheduleList.querySelector(".inner-schedule-item");
    const cloneItem = firstItem.cloneNode(true);
    cloneItem.querySelector("input").value = "";

    const body = cloneItem.querySelector(".inner-schedule-body");
    const id = `mce_${Date.now()}`;
    body.innerHTML = `<textarea id="${id}"></textarea>`;

    scheduleList.appendChild(cloneItem);
    initTinyMCE(`#${id}`);
  });

  scheduleList.addEventListener("click", (event) => {
    //Đóng/Mở
    if (event.target.closest(".inner-more")) {
      const parentItem = event.target.closest(".inner-schedule-item");
      parentItem.classList.toggle("hidden");
    }

    //Xóa item
    if (event.target.closest(".inner-remove")) {
      const parentItem = event.target.closest(".inner-schedule-item");
      const totalItem = scheduleList.querySelectorAll(
        ".inner-schedule-item"
      ).length;
      if (parentItem && totalItem > 1) {
        parentItem.remove();
      }
    }
  });

  //Sắp xếp
  new Sortable(scheduleList, {
    handle: ".inner-move",
    animation: 150,
    onStart: (event) => {
      const textarea = event.item.querySelector("textarea");
      const id = textarea.id;
      tinymce.get(id).remove();
    },
    onEnd: (event) => {
      const textarea = event.item.querySelector("textarea");
      const id = textarea.id;
      initTinyMCE(`#${id}`);
    },
  });
}
// End Schedule Section 8

//File Pond
const filepondImage = document.querySelector("[filepond-image]");
if (filepondImage) {
  FilePond.registerPlugin(FilePondPluginImagePreview);
  FilePond.create(filepondImage, { labelIdle: "+" });
}
//End File Pond

// Revenue Chart
const revenueChart = document.querySelector("#revenue-chart");
if (revenueChart) {
  // lấy ngày hiện tại
  const now = new Date();

  // lấy ra thông tin tháng này
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();

  // lấy ra thông tin tháng trước
  const previousMonthDate = new Date(currentYear, now.getMonth() - 1, 1);
  const previousMonth = previousMonthDate.getMonth() + 1;
  const previousYear = previousMonthDate.getFullYear();

  // lấy ra tổng số ngày
  const datsInMonthCurrent = new Date(currentYear, currentMonth, 0).getDate();
  const datsInMonthPrevious = new Date(
    previousYear,
    previousMonth,
    0
  ).getDate();
  const days =
    datsInMonthCurrent > datsInMonthPrevious
      ? datsInMonthCurrent
      : datsInMonthPrevious;
  const arrayDay = [];
  for (let i = 1; i <= days; i++) {
    arrayDay.push(i);
  }

  const dataFInal = {
    currentMonth: currentMonth,
    currentYear: currentYear,
    previousMonth: previousMonth,
    previousYear: previousYear,
    arrayDay: arrayDay,
  };

  // fetch(`/${pathAdmin}/dashboard/revenue-chart`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(dataFinal),
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //   });

  new Chart(revenueChart, {
    type: "line",
    data: {
      labels: arrayDay,
      datasets: [
        // tháng hiện tại
        {
          label: `Tháng ${currentMonth}/${currentYear}`,
          data: [10000, 500, 3000, 200, 1500],
          borderColor: "#F38FA4",
        },
        // tháng trước
        {
          label: `Tháng ${previousMonth}/${previousYear}`,
          data: [15000, 5000, 300, 20000, 15000],
          borderColor: "#26A2F5",
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Ngày",
            font: {
              size: 16,
            },
            padding: { top: 10 },
          },
        },
        y: {
          title: {
            display: true,
            text: "Doanh thu (VNĐ)",
            font: {
              size: 16,
            },
            padding: { bottom: 10 },
          },
        },
      },
    },
  });
}
// End Revenue Chart

// Category Create Form
const categoryCreateForm = document.querySelector("#category-create-form");
if (categoryCreateForm) {
  const validation = new JustValidate("#category-create-form");

  validation
    .addField("#name", [
      {
        rule: "required",
        errorMessage: "Vui lòng nhập tên danh mục",
      },
    ])
    .onSuccess((event) => {
      const name = event.target.name.value;
      console.log(name);
    });
}
// End Category Create Form

// Tour Create Form
const tourCreateForm = document.querySelector("#tour-create-form");
if (tourCreateForm) {
  const validation = new JustValidate("#tour-create-form");

  validation
    .addField("#name", [
      {
        rule: "required",
        errorMessage: "Vui lòng nhập tên danh mục",
      },
    ])
    .onSuccess((event) => {
      const name = event.target.name.value;
      console.log(name);
    });
}
// End Tour Create Form

// Order Edit Form
const orderEditForm = document.querySelector("#order-edit-form");
if (orderEditForm) {
  const validation = new JustValidate("#order-edit-form");

  validation
    .addField("#fullName", [
      {
        rule: "required",
        errorMessage: "Vui lòng nhập họ tên!",
      },
      {
        rule: "minLength",
        value: 5,
        errorMessage: "Họ tên phải có ít nhất 5 ký tự!",
      },
      {
        rule: "maxLength",
        value: 50,
        errorMessage: "Họ tên không được vượt quá 50 ký tự!",
      },
    ])
    .addField("#phone", [
      {
        rule: "required",
        errorMessage: "Vui lòng nhập số điện thoại!",
      },
      {
        rule: "customRegexp",
        value: /^(0|\+84)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-5]|9[0-9])[0-9]{7}$/,
        errorMessage: "Số điện thoại không đúng định dạng!",
      },
    ])
    .onSuccess((event) => {
      const fullName = event.target.fullName.value;
      console.log(fullName);
      const phone = event.target.phone.value;
      console.log(phone);
    });
}
// End Order Edit Form

// Setting Website Info Form
const settingWebsiteInfoForm = document.querySelector(
  "#setting-website-infor-form"
);
if (settingWebsiteInfoForm) {
  const validation = new JustValidate("#setting-website-infor-form");

  validation
    .addField("#websiteName", [
      {
        rule: "required",
        errorMessage: "Vui lòng nhập tên website!",
      },
    ])
    .addField("#phone", [
      {
        rule: "customRegexp",
        value: /^(0|\+84)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-5]|9[0-9])[0-9]{7}$/,
        errorMessage: "Số điện thoại không đúng định dạng!",
      },
    ])
    .addField("#email", [
      {
        rule: "email",
        errorMessage: "Email không đúng định dạng!",
      },
    ])
    .onSuccess((event) => {
      const websiteName = event.target.websiteName.value;
      const phone = event.target.phone.value;
      const email = event.target.email.value;
      console.log(websiteName);
      console.log(phone);
      console.log(email);
    });
}
// End Setting Website Info Form

// Setting Account Admin Create Form
const settingAccountAdminCreateForm = document.querySelector(
  "#setting-account-admin-create-form"
);
if (settingAccountAdminCreateForm) {
  const validation = new JustValidate("#setting-account-admin-create-form");

  validation
    .addField("#fullName", [
      {
        rule: "required",
        errorMessage: "Vui lòng nhập họ tên!",
      },
      {
        rule: "minLength",
        value: 5,
        errorMessage: "Họ tên phải có ít nhất 5 ký tự!",
      },
      {
        rule: "maxLength",
        value: 50,
        errorMessage: "Họ tên không được vượt quá 50 ký tự!",
      },
    ])
    .addField("#email", [
      {
        rule: "required",
        errorMessage: "Vui lòng nhập tên email!",
      },
      {
        rule: "email",
        errorMessage: "Email không đúng định dạng!",
      },
    ])
    .addField("#phone", [
      {
        rule: "required",
        errorMessage: "Vui lòng nhập tên số điện thoại!",
      },
      {
        rule: "customRegexp",
        value: /^(0|\+84)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-5]|9[0-9])[0-9]{7}$/,
        errorMessage: "Số điện thoại không đúng định dạng!",
      },
    ])
    .addField("#jobTitle", [
      {
        rule: "required",
        errorMessage: "Vui lòng nhập chức vụ!",
      },
    ])
    .addField("#password", [
      {
        rule: "required",
        errorMessage: "Vui lòng nhập mật khẩu!",
      },
      {
        rule: "minLength",
        value: 8,
        errorMessage: "Mật khẩu phải chứa ít nhất 8 ký tự!",
      },
      {
        rule: "customRegexp",
        value: /[A-Z]/,
        errorMessage: "Mật khẩu phải chứa ít nhất 1 ký tự viết hoa!",
      },
      {
        rule: "customRegexp",
        value: /[a-z]/,
        errorMessage: "Mật khẩu phải chứa ít nhất 1 ký tự viết thường!",
      },
      {
        rule: "customRegexp",
        value: /[0-9]/,
        errorMessage: "Mật khẩu phải chứa ít nhất 1 chữ số!",
      },
      {
        rule: "customRegexp",
        value: /^(?=.*[!@#$%^&*(),.?":{}|<>_\-]).+$/,
        errorMessage: "Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt!",
      },
    ])
    .onSuccess((event) => {
      const fullName = event.target.fullName.value;
      const email = event.target.email.value;
      const phone = event.target.phone.value;
      const jobTitle = event.target.jobTitle.value;
      const password = event.target.password.value;
      console.log(fullName);
      console.log(email);
      console.log(phone);
      console.log(jobTitle);
      console.log(password);
    });
}
// End Setting Account Admin Create Form

// Profile Change Password Form
const profileChangePasswordForm = document.querySelector(
  "#profile-change-password-form"
);
if (profileChangePasswordForm) {
  const validator = new JustValidate("#profile-change-password-form");

  validator
    .addField("#password", [
      {
        rule: "required",
        errorMessage: "Vui lòng nhập mật khẩu!",
      },
      {
        rule: "minLength",
        value: 8,
        errorMessage: "Mật khẩu phải chứa ít nhất 8 ký tự!",
      },
      {
        rule: "customRegexp",
        value: /[A-Z]/,
        errorMessage: "Mật khẩu phải chứa ít nhất 1 ký tự viết hoa!",
      },
      {
        rule: "customRegexp",
        value: /[a-z]/,
        errorMessage: "Mật khẩu phải chứa ít nhất 1 ký tự viết thường!",
      },
      {
        rule: "customRegexp",
        value: /[0-9]/,
        errorMessage: "Mật khẩu phải chứa ít nhất 1 chữ số!",
      },
      {
        rule: "customRegexp",
        value: /^(?=.*[!@#$%^&*(),.?":{}|<>_\-]).+$/,
        errorMessage: "Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt!",
      },
    ])
    .addField("#newPassword", [
      {
        rule: "required",
        errorMessage: "Vui lòng nhập xác nhậnmật khẩu!",
      },
      {
        validator: (value, context) => context["#password"].elem.value == value,
        errorMessage: "Mật khẩu xác nhận không khớp!",
      },
    ])
    .onSuccess((event) => {
      const password = event.target.password.value;
      console.log(password);
    });
}
// End Profile Change Password Form
