export default (editor, config) => {
  const bm = editor.BlockManager;
  const toAdd = name => config.blocks.indexOf(name) >= 0;

  toAdd("containers") &&
    bm.add("containers", {
      category: "Layout",
      label: "Container",
      attributes: { class: "fa fa-square-o" },
      content: `<div class="container"></div>`
    });

  toAdd("container-fluid") &&
    bm.add("container-fluid", {
      category: "Layout",
      label: "Fluid Container",
      attributes: { class: "fa fa-square-o" },
      content: `<div class="container-fluid"></div>`
    });

  toAdd("equal-width-grid") &&
    bm.add("equal-width-grid", {
      category: "Layout",
      label: "Equal Width Grid",
      attributes: { class: "fa fa-th" },
      content: `<div class="container">
      <div class="row">
        <div class="col">
          1 of 2
        </div>
        <div class="col">
          2 of 2
        </div>
      </div>
      <div class="row">
        <div class="col">
          1 of 3
        </div>
        <div class="col">
          2 of 3
        </div>
        <div class="col">
          3 of 3
        </div>
      </div>
    </div>`
    });

  toAdd("link-block") &&
    bm.add("link-block", {
      category: "Basic",
      label: "Link Block",
      attributes: { class: "fa fa-link" },
      content: {
        type: "link",
        editable: false,
        droppable: true,
        style: {
          display: "inline-block",
          padding: "5px",
          "min-height": "50px",
          "min-width": "50px"
        }
      }
    });

  toAdd("quote") &&
    bm.add("quote", {
      label: "Quote",
      category: "Basic",
      attributes: { class: "fa fa-quote-right" },
      content: `<blockquote class="quote">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit
      </blockquote>`
    });

  toAdd("text-basic") &&
    bm.add("text-basic", {
      category: "Basic",
      label: "Text section",
      attributes: { class: "gjs-fonts gjs-f-h1p" },
      content: `<section class="bdg-sect">
      <h1 class="heading">Insert title here</h1>
      <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      </section>`
    });

  toAdd("tables") &&
    bm.add("tables", {
      category: "Tables",
      label: "Tables Section",
      attributes: { class: "fa fa-table fa-5x" },
      content: `<table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </table>`
    });

  toAdd("row") &&
    bm.add("row", {
      category: "Tables",
      label: "Table Cell",
      attributes: { class: "fa fa-minus fa-2x" },
      content: `<table class="table">
      <tr>
          <td>Mark</td>s
        </tr>
    </table>`
    });

  toAdd("alerts") &&
    bm.add("alerts", {
      category: "Alerts",
      label: "Alert",
      attributes: { class: "fa fa-exclamation-triangle fa-2x" },
      content: `<div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Holy guacamole!</strong> You should check in on some of those fields below.
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>`
    });

  toAdd("heading-badge") &&
    bm.add("heading-badge", {
      category: "Badges",
      label: "Heading Badge",
      attributes: { class: "fa fa-certificate fa-2x" },
      content: `<div>Example heading <span class="badge badge-secondary">New</span></div>`
    });

  toAdd("notification-badge") &&
    bm.add("notification-badge", {
      category: "Badges",
      label: "Notification Badge",
      attributes: { class: "fa fa-certificate fa-2x" },
      content: `<button type="button" class="btn btn-primary">
      Notifications <span class="badge badge-light">4</span>
    </button>`
    });

  toAdd("profile-badge") &&
    bm.add("profile-badge", {
      category: "Badges",
      label: "Profile Badge",
      attributes: { class: "fa fa-certificate fa-2x" },
      content: `<button type="button" class="btn btn-primary">
      Profile <span class="badge badge-light">9</span>
      <span class="sr-only">unread messages</span>
    </button>`
    });

  toAdd("badge") &&
    bm.add("badge", {
      category: "Badges",
      label: "Badge",
      attributes: { class: "fa fa-certificate fa-2x" },
      content: `<span class="badge badge-primary">Primary</span>`
    });

  toAdd("pill-badge") &&
    bm.add("pill-badge", {
      category: "Badges",
      label: "Pill Badge",
      attributes: { class: "fa fa-certificate fa-2x" },
      content: `<span class="badge badge-pill badge-primary">Primary</span>`
    });

  toAdd("link-badge") &&
    bm.add("link-badge", {
      category: "Badges",
      label: "Link Badge",
      attributes: { class: "fa fa-certificate fa-2x" },
      content: `<a href="#" class="badge badge-primary">Primary</a>`
    });

  toAdd("breadcrumbs") &&
    bm.add("breadcrumbs", {
      category: "Breadcrumb",
      label: "Breadcrumb",
      attributes: { class: "fa fa-eraser fa-2x" },
      content: `<nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Library</a></li>
        <li class="breadcrumb-item active" aria-current="page">Data</li>
      </ol>
    </nav>`
    });

  toAdd("buttons") &&
    bm.add("buttons", {
      category: "Buttons",
      label: "Button",
      attributes: { class: "fa fa-window-minimize fa-2x" },
      content: `<div><button type="button" class="btn btn-primary" id="btnClick">Primary</button></div>`
    });

  toAdd("outline-buttons") &&
    bm.add("outline-buttons", {
      category: "Buttons",
      label: "Outline Button",
      attributes: { class: "fa fa-window-minimize fa-2x" },
      content: `<div><button type="button" class="btn btn-outline-primary">Primary</button></div>`
    });

  toAdd("button-group") &&
    bm.add("button-group", {
      category: "Buttons",
      label: "Button Group",
      attributes: { class: "fa fa-window-minimize fa-2x" },
      content: `<div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-secondary">Left</button>
      <button type="button" class="btn btn-secondary">Middle</button>
      <button type="button" class="btn btn-secondary">Right</button>
    </div>`
    });

  toAdd("card") &&
    bm.add("card", {
      category: "Card",
      label: "Card",
      attributes: { class: "fa fa-id-card fa-2x" },
      content: `<div class="card" style="width: 18rem;">
      <img src="https://dummyimage.com/200x200/000/fff" class="card-img-top" alt="https://dummyimage.com/200x200/000/fff">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`
    });

  toAdd("card-list") &&
    bm.add("card-list", {
      category: "Card",
      label: "Card List",
      attributes: { class: "fa fa-id-card fa-2x" },
      content: `<div class="card" style="width: 18rem;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>`
    });

  toAdd("kitchen-sink") &&
    bm.add("kitchen-sink", {
      category: "Card",
      label: "Kitchen Sink",
      attributes: { class: "fa fa-id-card fa-2x" },
      content: `<div class="card" style="width: 18rem;">
      <img src="https://dummyimage.com/200x200/000/fff" class="card-img-top" alt="https://dummyimage.com/200x200/000/fff">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>`
    });

  toAdd("card-nav") &&
    bm.add("card-nav", {
      category: "Card",
      label: "Card Navigation",
      attributes: { class: "fa fa-id-card fa-2x" },
      content: `<div class="card text-center">
      <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs">
          <li class="nav-item">
            <a class="nav-link active" href="#">Active</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    Active`
    });

  toAdd("carousal") &&
    bm.add("carousal", {
      category: "Carousal",
      label: "Carousal",
      attributes: { class: "fa fa-picture-o fa-2x" },
      content: `<div class="bd-example">
      <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://dummyimage.com/200x200/000/fff" class="d-block w-100" alt="https://dummyimage.com/200x200/000/fff">
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://dummyimage.com/200x200/cccc/fff" class="d-block w-100" alt="https://dummyimage.com/200x200/000/fff">
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://dummyimage.com/200x200/ddeff/fff" class="d-block w-100" alt="https://dummyimage.com/200x200/000/fff">
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>`
    });

  toAdd("collapse") &&
    bm.add("collapse", {
      category: "Collapse",
      label: "Collpase Button",
      attributes: { class: "fa fa-window-restore fa-2x" },
      content: `<p>
      <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        Link with href
      </a>
      <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
        Button with data-target
      </button>
    </p>
    <div class="collapse" id="collapseExample">
      <div class="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>`
    });

  toAdd("collapse-group") &&
    bm.add("collapse-group", {
      category: "Collapse",
      label: "Collpase Group",
      attributes: { class: "fa fa-window-restore fa-2x" },
      content: `<p>
      <a class="btn btn-primary" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
      <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
      <button class="btn btn-primary" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
    </p>
    <div class="row">
      <div class="col">
        <div class="collapse multi-collapse" id="multiCollapseExample1">
          <div class="card card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </div>
      </div>
      <div class="col">
        <div class="collapse multi-collapse" id="multiCollapseExample2">
          <div class="card card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </div>
      </div>
    </div>`
    });

  toAdd("dropdown") &&
    bm.add("dropdown", {
      category: "Dropdown",
      label: "Dropdown",
      attributes: { class: "fa fa-caret-down fa-2x" },
      content: `<div class="btn-group">
      <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Action
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Separated link</a>
      </div>
    </div>`
    });

  toAdd("input_group") &&
    bm.add("input_group", {
      category: "Input Group",
      label: "Input Group",
      attributes: { class: "fa fa-align-left fa-2x" },
      content: `<div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">@</span>
      </div>
      <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
    </div>
    
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
      <div class="input-group-append">
        <span class="input-group-text" id="basic-addon2">@example.com</span>
      </div>
    </div>
    
    <label for="basic-url">Your vanity URL</label>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
      </div>
      <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
    </div>
    
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">$</span>
      </div>
      <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
      <div class="input-group-append">
        <span class="input-group-text">.00</span>
      </div>
    </div>
    
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">With textarea</span>
      </div>
      <textarea class="form-control" aria-label="With textarea"></textarea>
    </div>`
    });

  toAdd("check-box") &&
    bm.add("check-box", {
      category: "Input Group",
      label: "Checkbox",
      attributes: { class: "fa fa-check-circle-o fa-2x" },
      content: `<div class="input-group mb-3">
      <div class="input-group-prepend">
        <div class="input-group-text">
          <input type="checkbox" aria-label="Checkbox for following text input">
        </div>
      </div>
      <input type="text" class="form-control" aria-label="Text input with checkbox">
    </div>`
    });

  toAdd("radio-button") &&
    bm.add("radio-button", {
      category: "Input Group",
      label: "Radio",
      attributes: { class: "fa fa-dot-circle-o fa-2x" },
      content: `<div class="input-group">
      <div class="input-group-prepend">
        <div class="input-group-text">
        <input type="radio" aria-label="Radio button for following text input">
        </div>
      </div>
      <input type="text" class="form-control" aria-label="Text input with radio button">
    </div>`
    });

  toAdd("button-addons") &&
    bm.add("button-addons", {
      category: "Input Group",
      label: "Button addons",
      attributes: { class: "fa fa-window-minimize" },
      content: `<div class="input-group mb-3">
      <div class="input-group-prepend">
        <button class="btn btn-outline-secondary" type="button">Button</button>
      </div>
      <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">
    </div>
    
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button">Button</button>
      </div>
    </div>
    
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <button class="btn btn-outline-secondary" type="button">Button</button>
        <button class="btn btn-outline-secondary" type="button">Button</button>
      </div>
      <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">
    </div>
    
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button">Button</button>
        <button class="btn btn-outline-secondary" type="button">Button</button>
      </div>
    </div>`
    });

  toAdd("buttons-with-dropdown") &&
    bm.add("buttons-with-dropdown", {
      category: "Input Group",
      label: "Buttons with dropdowns",
      attributes: { class: "fa fa-sort-desc" },
      content: `<div class="input-group mb-3">
      <div class="input-group-prepend">
        <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
          <div role="separator" class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Separated link</a>
        </div>
      </div>
      <input type="text" class="form-control" aria-label="Text input with dropdown button">
    </div>
    
    <div class="input-group">
      <input type="text" class="form-control" aria-label="Text input with dropdown button">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
          <div role="separator" class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Separated link</a>
        </div>
      </div>
    </div>`
    });

  toAdd("custom-select") &&
    bm.add("custom-select", {
      category: "Input Group",
      label: "Custom select",
      attributes: { class: "fa fa-align-center" },
      content: `<div class="input-group mb-3">
      <div class="input-group-prepend">
        <label class="input-group-text" for="inputGroupSelect01">Options</label>
      </div>
      <select class="custom-select" id="inputGroupSelect01">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    
    <div class="input-group mb-3">
      <select class="custom-select" id="inputGroupSelect02">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <div class="input-group-append">
        <label class="input-group-text" for="inputGroupSelect02">Options</label>
      </div>
    </div>
    
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <button class="btn btn-outline-secondary" type="button">Button</button>
      </div>
      <select class="custom-select" id="inputGroupSelect03">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    
    <div class="input-group">
      <select class="custom-select" id="inputGroupSelect04">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button">Button</button>
      </div>
    </div>`
    });

  toAdd("custom-file-input") &&
    bm.add("custom-file-input", {
      category: "Input Group",
      label: "Custom file input",
      attributes: { class: "fa fa-align-center" },
      content: `<div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Upload</span>
        </div>
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="inputGroupFile01">
          <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
        </div>
      </div>
      
      <div class="input-group mb-3">
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="inputGroupFile02">
          <label class="custom-file-label" for="inputGroupFile02">Choose file</label>
        </div>
        <div class="input-group-append">
          <span class="input-group-text" id="">Upload</span>
        </div>
      </div>
      
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <button class="btn btn-outline-secondary" type="button">Button</button>
        </div>
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="inputGroupFile03">
          <label class="custom-file-label" for="inputGroupFile03">Choose file</label>
        </div>
      </div>
      
      <div class="input-group">
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="inputGroupFile04">
          <label class="custom-file-label" for="inputGroupFile04">Choose file</label>
        </div>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button">Button</button>
        </div>
      </div>`
    });

  toAdd("jumbotron") &&
    bm.add("jumbotron", {
      category: "Jumbotron",
      label: "Jumbotron",
      attributes: {
        class: "fa fa-puzzle-piece"
      },
      content: `<div class="jumbotron">
      <h1 class="display-4">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </p>
    </div>`
    });

  toAdd("jumbotron-fluid") &&
    bm.add("jumbotron-fluid", {
      category: "Jumbotron",
      label: "Jumbotron Fluid",
      attributes: { class: "fa fa-puzzle-piece" },
      content: `<div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Fluid jumbotron</h1>
        <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
      </div>
    </div>`
    });

  toAdd("list-group") &&
    bm.add("list-group", {
      category: "List Group",
      label: "List Group",
      attributes: { class: "fa fa-list" },
      content: `<ul class="list-group">
      <li class="list-group-item">Cras justo odio</li>
      <li class="list-group-item">Dapibus ac facilisis in</li>
      <li class="list-group-item">Morbi leo risus</li>
      <li class="list-group-item">Porta ac consectetur ac</li>
      <li class="list-group-item">Vestibulum at eros</li>
    </ul>`
    });

  toAdd("active-list-group") &&
    bm.add("active-list-group", {
      category: "List Group",
      label: "Active List Group",
      attributes: { class: "fa fa-list" },
      content: `<ul class="list-group">
      <li class="list-group-item active">Cras justo odio</li>
      <li class="list-group-item">Dapibus ac facilisis in</li>
      <li class="list-group-item">Morbi leo risus</li>
      <li class="list-group-item">Porta ac consectetur ac</li>
      <li class="list-group-item">Vestibulum at eros</li>
    </ul>`
    });

  toAdd("disabled-list-group") &&
    bm.add("disabled-list-group", {
      category: "List Group",
      label: "Disabled List Group",
      attributes: { class: "fa fa-list" },
      content: `<ul class="list-group">
      <li class="list-group-item disabled">Cras justo odio</li>
      <li class="list-group-item">Dapibus ac facilisis in</li>
      <li class="list-group-item">Morbi leo risus</li>
      <li class="list-group-item">Porta ac consectetur ac</li>
      <li class="list-group-item">Vestibulum at eros</li>
    </ul>`
    });

  toAdd("list-items-with-badges") &&
    bm.add("list-group-with-badges", {
      category: "List Group",
      label: "List Items with Badges",
      attributes: { class: "fa fa-list" },
      content: `<ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Cras justo odio
        <span class="badge badge-primary badge-pill">14</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Dapibus ac facilisis in
        <span class="badge badge-primary badge-pill">2</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Morbi leo risus
        <span class="badge badge-primary badge-pill">1</span>
      </li>
    </ul>`
    });

  toAdd("list-group-custom-content") &&
    bm.add("list-group-custom-content", {
      category: "List Group",
      label: "List Item with Custom Content",
      attributes: { class: "fa fa-list" },
      content: `<div class="list-group">
      <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">List group item heading</h5>
          <small>3 days ago</small>
        </div>
        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        <small>Donec id elit non mi porta.</small>
      </a>
      <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">List group item heading</h5>
          <small class="text-muted">3 days ago</small>
        </div>
        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        <small class="text-muted">Donec id elit non mi porta.</small>
      </a>
      <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">List group item heading</h5>
          <small class="text-muted">3 days ago</small>
        </div>
        <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        <small class="text-muted">Donec id elit non mi porta.</small>
      </a>
    </div>`
    });

  toAdd("modal") &&
    bm.add("modal", {
      category: "Modal",
      label: "Modal",
      attributes: { class: "fa fa-bell-o" },
      content: `<!-- Button trigger modal -->
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Launch demo modal
      </button>
      
      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>`
    });

  toAdd("nav") &&
    bm.add("nav", {
      category: "Navs",
      label: "Base nav",
      attributes: { class: "fa fa-bars" },
      content: `<ul class="nav">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>`
    });

  toAdd("tabs") &&
    bm.add("tabs", {
      category: "Navs",
      label: "Tabs",
      attributes: { class: "fa fa-bars" },
      content: `<ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>`
    });

  toAdd("pills") &&
    bm.add("pills", {
      category: "Navs",
      label: "Pills",
      attributes: { class: "fa fa-bars" },
      content: `<ul class="nav nav-pills">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>`
    });

  toAdd("navbar") &&
    bm.add("navbar", {
      category: "Navbar",
      label: "Navbar",
      attributes: { class: "fa fa-bars" },
      content: `<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">
    <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
    Bootstrap
  </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>`
    });

  toAdd("pagination") &&
    bm.add("pagination", {
      category: "Pagination",
      label: "Pagination",
      attributes: { class: "fa fa-file-powerpoint-o" },
      content: `<nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item disabled">
          <a class="page-link" href="#" tabindex="-1">Previous</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item active"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>`
    });

  toAdd("pop-overs") &&
    bm.add("pop-overs", {
      category: "Popovers",
      label: "Popovers",
      attributes: { class: "fa fa-comment-o" },
      content: `<a tabindex="0" class="btn btn-lg btn-danger" role="button" data-toggle="popover" data-trigger="focus" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?">Dismissible popover</a>`
    });
};
