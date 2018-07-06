function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

function f1() {
  resolveAfter2Seconds(10).then(
    (resp) => {
      resolveAfter3Seconds(agsdagsd).then(
        (aaaa) => {
          resolveAfter3Seconds(aaaa).then()
        }
      )
    }
  );

  console.log(x); // 10
}

f1();

const getRainbow = () => new Promise(
  resolve => {
    setTimeout(() => {
      resolve('rainbow');
    }, 3000);
  },
);

const getRainbow2 = () => new Promise(
  resolve => {
    setTimeout(() => {
      resolve('rainbow');
    }, 3000);
  },
);

const getResult = async () => await Promise.all([getRainbow(), getRainbow2()]);

async function unicorn() {
  try {
    let rainbow = await getRainbow();
    return rainbow;
  } catch (e) {
    return {
      message: e,
      somaText: 'Текст о не легкой жизни единорогов',
    };
  }
}


