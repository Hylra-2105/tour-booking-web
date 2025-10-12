const initTinyMCE = (selector = "") => {
  tinymce.init({
    selector: selector || "[textarea-mce]",
    plugins: "charmap",
    toolbar:
      "undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | charmap",
  });
};
initTinyMCE();
