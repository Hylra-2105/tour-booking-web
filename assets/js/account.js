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

// Forgot Password Form
const forgotPasswordForm = document.querySelector("#forgot-password-form");
if (forgotPasswordForm) {
  const validation = new JustValidate("#forgot-password-form");

  validation
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
    .onSuccess((event) => {
      const email = event.target.email.value;
      console.log(email);
    });
}
// End Forgot Password Form

// OTP Password Form
const otpPasswordForm = document.querySelector("#otp-password-form");
if (otpPasswordForm) {
  const validation = new JustValidate("#otp-password-form");

  validation
    .addField("#otp", [
      {
        rule: "required",
        errorMessage: "Vui lòng nhập mã OTPS!",
      },
    ])
    .onSuccess((event) => {
      const otp = event.target.otp.value;
      console.log(otp);
    });
}
// End OTP Password Form

// Reset Password Form
const resetPasswordForm = document.querySelector("#reset-password-form");
if (resetPasswordForm) {
  const validator = new JustValidate("#reset-password-form");

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
    .addField("#confirmPassword", [
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
// End Reset Password Form
