# scss-drawer changelog

### 0.3.0 - June 21, 2016
* Add modifier classes (responsive modifier classes as well) for controlling position and width of user module
* Add animation keyframes and transition classes for resizing and moving the user module
* Update states and transitions to modify classes on user module
* Fix bugs across Chrome,  Firefox, Safari OS X, Safari iPhone, Safari iPad, Edge and IE11
  * Only known bug for now is the move-in animation for the user module in IE11, and I'm willing tolerate that

### 0.2.1 - June 21, 2016
* Generate `/dist` files

### 0.2.0 - June 21, 2016
* Fix all states and state transitions
  * Implement toggle states at all breakpoints
  * Implement responsive transition states between all breakpoints
* Add animation-specific modifier classes
  * add/remove them to trigger specific transitions between states
* Add ESHint for JavaScript linting and force it to use ECMAScript 5

### 0.1.0 - June 17, 2016
* Initial release
