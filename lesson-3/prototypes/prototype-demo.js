const studentOperator = {
  getSortedMarks: function() {
    return this.marks.sort(function(mark1, mark2) {
      if (mark1 === mark2) return 0;
      if (mark1 > mark2) return 1;

      return -1;
    });
  },

  getAverageMark: function() {

    const marksSum = this.marks.reduce(function(acc, item) {
      return acc + item;
    });

    return Math.round(marksSum / this.marks.length);
  }
};

const student1 = {
  marks: [10, 8, 3, 4, 5, 6, 2, 7, 3, 2]
};

const student2 = {
  marks: [8, 2, 6, 4, 5, 6, 7, 4, 2]
};

Object.setPrototypeOf(student1, studentOperator);
Object.setPrototypeOf(student2, studentOperator);

console.log('Sorted marks: ', student1.getSortedMarks());
console.log('Average mark is: ', student2.getAverageMark());