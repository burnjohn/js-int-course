/*
 * Here you can find examples of types conversion
 *
 */


/*
 * to String type
 *
 */

{

  const a = [1, 2, 3, 4, 5] + ' '; //"1,2,3,4,5 "

  const b = 112 + 'abc'; //"112abc"

  const c = undefined + '133'; //"undefined133"

  const d = true + 'test'; //"truetest"

  const e = String(null); //"null"

}


/*
 * to Number type
 *
 */
{

  +true; // 1
  +false; // 0
  +undefined; //NaN
  +null; //0

  const a = +"123"; // 123

  const b = Number("123"); // 123

  const c = +'asf1'; //NaN

  const d = +'  1235  '; //1235

  const e = +'0' || +'' || +' '; //0


  // REMEMBER!!!

  null >= 0; //true


  parseFloat('1.223asgasdg'); //1.223

  parseInt('1.223asgasdg'); //1


}

/*
 * to Boolean type
 *
 */

{
  !!undefined; //false
  !!null; //false

  !!0; //false
  !!NaN; //false

  !!Infinity; //true
  !!1234; //true

  !!' '; //true

  !!''; //false

  !![]; //true
  !!{}; //true

}