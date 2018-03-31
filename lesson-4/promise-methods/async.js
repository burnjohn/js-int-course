function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  const x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}
f1();


const getRainbow = () => new Promise(
  resolve => { setTimeout(() => { resolve('rainbow'); }, 3000);},
  reject => { setTimeout((e) => { reject(e); }, 3000);}
);


async function unicorn() {
  try {
    let rainbow = await getRainbow();
    return rainbow;
  } catch(e) {
    return {
      message: e,
      somaText: 'Текст о не легкой жизни единорогов'
  }
  }
}

await unicorn();