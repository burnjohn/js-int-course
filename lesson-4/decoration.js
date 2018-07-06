
/*
 * Decorators
 */


function checkPermissionDecorator(cb) {
  return function(user) {

    if (isAdmin(user)) {
      return cb.apply(this, arguments);
    }
    alert( 'Недостаточно прав' );
  }

}

function save(user) {
  localStorage.setItem('user', user);
}

const saveWithParams = checkPermissionDecorator(save);

saveWithParams(user);
