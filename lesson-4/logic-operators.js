/*
 * Here you can find examples of logic operators usage
 *
 */


/*
 * || (OR) operator
 *
 */


if (hour < 10 || hour > 18 || isWeekend) {
  alert( 'Офис до 10 или после 18 или в выходной закрыт' );
}


function getVariable(variable) {
  var DEFAULT_VALUE = 2;
  var newVariable = variable || DEFAULT_VALUE;

  // some code
}


{
  const a = 0 || false || null; //null
  const b = 0 || null || ''; //''

  const getVal = () => 'here';

  const c = false || getVal() || true; // 'here' if getVal result is true

  const d = null || {prop: 2} || true; // {prop: 2}

}


/*
 * || (and) operator
 *
 */


if (1 && 0 && true) { // false
  alert( 'не сработает, т.к. условие ложно' );
}

{
  const getVal = () => 'NEW';

  const a = 1 && 'here' && {a:2}; // {a:2}
  const a = 1 && 'here' && getVal(); // 'NEW'

}

// Practical examples

// Instead of "if"
{
  const x = 1;
  let b = null;

  (x > 0) && (b = 2);
}

{
  const doStuff = () => 'Doing code';


  (1 > 0) && doStuff();
}

{
  const obj = {
    props: {
      getValue: function() {
        return 'Some string'
      }
    }
  };

  obj.props && obj.props.getValue && obj.props.getValue(); // 'Some string'
}


/*
 * ? ternary operator
 *
 */

{
  const AGE = 12;
  const value = AGE < 13
    ? 'Is older'
    : 'is younger';
}


// Bad practice

{
  const age = 12;
  const otherManAge = 40;

  const value = age < 13
      ? age < otherManAge
        ? 'Is older'
        : 'Is not so older'
      : 'is younger';
}