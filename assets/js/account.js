// Login Form
const loginForm = document.querySelector("#login-form");
if (loginForm) {
  const validator = new JustValidate("#login-form");

  validator
    .addField("#email", [
      {
        rule: "required",
        errorMessage: "Vui lòng nhập email của bạn!",
      },
      {
        rule: "email",
        errorMessage: "Email không đúng định dạng!",
      },
    ])
    .addField("#password", [
      {
        rule: "required",
        errorMessage: "Vui lòng nhập mật khẩu!",
      },
      // {
      //   rule: "minLength",
      //   value: 8,
      //   errorMessage: "Mật khẩu phải chứa ít nhất 8 ký tự!",
      // },
      // {
      //   rule: "customRegexp",
      //   value: /[A-Z]/,
      //   errorMessage: "Mật khẩu phải chứa ít nhất 1 ký tự viết hoa!",
      // },
      // {
      //   rule: "customRegexp",
      //   value: /[a-z]/,
      //   errorMessage: "Mật khẩu phải chứa ít nhất 1 ký tự viết thường!",
      // },
      // {
      //   rule: "customRegexp",
      //   value: /[0-9]/,
      //   errorMessage: "Mật khẩu phải chứa ít nhất 1 chữ số!",
      // },
      // {
      //   rule: "customRegexp",
      //   value: /^(?=.*[!@#$%^&*(),.?":{}|<>_\-]).+$/,
      //   errorMessage: "Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt!",
      // },
    ])
    .onSuccess((event) => {
      const email = event.target.email.value;
      console.log(email);
      const password = event.target.password.value;
      console.log(password);
    });
}
// End Login Form

// Register Form
const registerForm = document.querySelector("#register-form");
if (registerForm) {
  const validator = new JustValidate("#register-form");

  validator
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
        errorMessage: "Vui lòng nhập email của bạn!",
      },
      {
        rule: "email",
        errorMessage: "Email không đúng định dạng!",
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
    .addField("#agree", [
      {
        rule: "required",
        errorMessage: "Bạn phải đồng ý các điều khoản và điều kiện để đăng ký!",
      },
    ])
    .onSuccess((event) => {
      const fullName = event.target.fullName.value;
      console.log(fullName);
      const email = event.target.email.value;
      console.log(email);
      const password = event.target.password.value;
      console.log(password);
    });
}
// End Register Form
