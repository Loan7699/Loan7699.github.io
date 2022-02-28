const grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
   ]

// 1. Viết function tính thứ hạng trung bình của cả lớp
const calculateGrade = grade => {
    let sum_grade = 0;
    grades.forEach(student => {
        sum_grade = (sum_grade + student.grade);
    })
    return Math.floor(sum_grade / grades.length);
}
console.log(calculateGrade(grades));

// 2. Viết function tính thứ hạng trung bình của nam trong lớp
const calculateGradeM = grade => {
    let sum = 0;
    let grade_M = grades.filter(student => student.sex == 'M')
    grade_M.forEach(student => {
        sum += student.grade;
    })
    return Math.floor(sum/grade_M.length);
}
console.log(calculateGradeM(grades));

// 3. Viết function tính thứ hạng trung bình của Nữ trong lớp
const calculateGradeF = grade => {
    let sum = 0;
    let grade_F = grades.filter(student => student.sex == 'F')
    grade_F.forEach(student => {
        sum += student.grade;
    })
    return Math.floor(sum/grade_F.length);
}
console.log(calculateGradeF(grades));

// 4. Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp
const findMaleStudent = grade => {
    let arrayMale = grades.filter(student => student.sex == 'M' )
    let arrayGrade =  arrayMale.map(student => student.grade);
    return arrayMale.filter(student => student.grade == Math.max(...arrayGrade));
}
console.log(findMaleStudent(grades));

// 5. Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp
const findFemaleStudent = grade => {
    let arrayFemale = grades.filter(student => student.sex == 'F' )
    let arrayGrade =  arrayFemale.map(student => student.grade);
    return arrayFemale.filter(student => student.grade == Math.max(...arrayGrade));
}
console.log(findFemaleStudent(grades));

// 6. Viết function tìm học viên Nam có thứ hạng thấp nhất trong lớp
const findMaleStudent_01 = grade => {
    let arrayMale = grades.filter(student => student.sex == 'M' )
    let arrayGrade =  arrayMale.map(student => student.grade);
    return arrayMale.filter(student => student.grade == Math.min(...arrayGrade));
}
console.log(findMaleStudent_01(grades));

// 7. Viết function tìm học viên Nữ có thứ hạng thấp nhất trong lớp
const findFemaleStudent_01 = grade => {
    let arrayFemale = grades.filter(student => student.sex == 'F' )
    let arrayGrade =  arrayFemale.map(student => student.grade);
    return arrayFemale.filter(student => student.grade == Math.min(...arrayGrade));
}
console.log(findFemaleStudent_01(grades));

// Viết function thứ hạng cao nhất của cả lớp
const findBestGrade = grade => {
    let arrayGrade = grades.map(student => student.grade);
    return grades.filter(student => student.grade == Math.max(...arrayGrade));
}
console.log(findBestGrade(grades));

// Viết function thứ hạng thấp nhất của cả lớp
const findWorstGrade = grade => {
    let arrayGrade = grades.map(student => student.grade);
    return grades.filter(student => student.grade == Math.min(...arrayGrade));
}
console.log(findWorstGrade(grades));

// Viết function lấy ra danh sách tất cả học viên Nữ trong lớp
const listFemaleStudent = female => {
    return grades.filter(student => student.sex == 'F')
}
console.log(listFemaleStudent(grades));

// Viết function sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái
const arrangeName = name => {
    let names = grades.map(student => student.name);
    return names.sort();
}
console.log(arrangeName(grades));

// Viết function sắp xếp thứ hạng học viên theo chiều giảm dần
const arrangeGrade = grade => {
    let array_grade = grades.map(student => student.grade)
    return array_grade.sort((a, b) => b-a);
}
console.log(arrangeGrade(grades));

// Viết function lấy ra học viên Nữ có tên bắt đầu bằng “J”
const femaleStudentJ = name => {
    let female_names = grades.filter(student => student.sex == 'F');
    return female_names.filter(student => ((student.name).indexOf('J') == 0));
}
console.log(femaleStudentJ(grades));

// Viết function lấy ra top 5 người có thứ hạng cao nhất trong lớp
const topStudent = grade => {
    let array_top = [];
    let array_grade = grades.map(student => student.grade);
    array_grade.sort((a, b) => b - a);
    let top1 = (grades.filter(student => student.grade == array_grade[0]));
    let top2 = (grades.filter(student => student.grade == array_grade[1]));
    let top3 = (grades.filter(student => student.grade == array_grade[2]));
    let top4 = (grades.filter(student => student.grade == array_grade[3]));
    let top5 = (grades.filter(student => student.grade == array_grade[4]));
    return array_top = [...top1, ...top2, ...top3, ...top4, ...top5];
}
console.log(topStudent(grades));