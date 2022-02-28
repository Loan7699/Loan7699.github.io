const grades = [
    { name: 'John', grade: 8, sex: 'M' },
    { name: 'Sarah', grade: 12, sex: 'F' },
    { name: 'Bob', grade: 16, sex: 'M' },
    { name: 'Johnny', grade: 2, sex: 'M' },
    { name: 'Ethan', grade: 4, sex: 'M' },
    { name: 'Paula', grade: 18, sex: 'F' },
    { name: 'Donald', grade: 5, sex: 'M' },
    { name: 'Jennifer', grade: 13, sex: 'F' },
    { name: 'Courtney', grade: 15, sex: 'F' },
    { name: 'Jane', grade: 9, sex: 'F' }
]
// 1. Viết function tính thứ hạng trung bình của cả lớp
// tính thứ hạng trung bình
const avgGrade = (grade) =>
    grades.reduce((sum, std) => sum + std.grade, 0) / grades.length;
console.log(avgGrade(grades));

// 2. Viết function tính thứ hạng trung bình của Nam trong lớp
// Tìm học viên nam
const findMale = grade =>
    grades.filter(student => student.sex == 'M');
// tính trung bình nam
console.log(avgGrade(findMale(grades)));

// 3. Viết function tính thứ hạng trung bình của Nữ trong lớp
// tìm nữ
const findFemale = grade => grades.filter(student => student.sex == 'F');
// tính trung bình nữ
console.log(avgGrade(findFemale(grades)));

// 4. Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp
// tìm thứ hạng cao nhất
const findMax = (grades) => Math.max(...grades.map((std) => std.grade));
// học viên nam thứ hạng cao nhất
console.log(findMax(findMale(grades)));

// 5. Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp
console.log(findMax(findFemale(grades)));