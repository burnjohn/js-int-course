
/*
 * Decorators
 */


function checkPermissionDecorator(f) {
  return function(user) {
    if (isAdmin(user)) {
      return f.apply(this, arguments);
    }
    alert( 'Недостаточно прав' );
  }
}

function save(user) {
  localStorage.setItem('user', user);
}

save = checkPermissionDecorator(save);
