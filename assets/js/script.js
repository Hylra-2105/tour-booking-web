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
  new Chart(revenueChart, {
    type: "line",
    data: {
      labels: ["01", "02", "03", "04", "05"],
      datasets: [
        {
          label: "Tháng 09/2025",
          data: [10000, 500, 3000, 200, 1500],
          borderColor: "#F38FA4",
        },
        {
          label: "Tháng 10/2025",
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
