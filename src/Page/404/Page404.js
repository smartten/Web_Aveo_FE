import "./404.scss";

function page404() {
  return (
    <div className="error">
      <div class="flex-container">
        <div class="text-center">
          <h1>
            <span class="fade-in" id="digit1">
              4
            </span>
            <span class="fade-in" id="digit2">
              0
            </span>
            <span class="fade-in" id="digit3">
              4
            </span>
          </h1>
          <h3 class="fadeIn">PAGE NOT FOUND</h3>
          <a href="/" type="button" name="button">
            Return To Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default page404;
