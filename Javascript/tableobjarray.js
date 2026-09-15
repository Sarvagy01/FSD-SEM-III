let student_1={
    Name:"Krishna",
    City:"Delhi",
    CGPA:8.9,
};

let student_2={
    Name:"Banke Bihari",
    City:"Vrindavan",
    CGPA:8.6,
};

let student_3={
    Name:"Kheraswar",
    City:"Aligarh",
    CGPA:6.9,
};

let student_4={
    Name:"Neelkanth",
    City:"Agra",
    CGPA:8.9,
};

let student_5={
    Name:"Iscon",
    City:"Kanpur",
    CGPA:9.9,
};

let student_6={
    Name:"Kedarnath",
    City:"Gaumukh",
    CGPA:6.9,
};
let student_7={
    Name:"Marine drive",
    City:"Mumbai",
    CGPA:6.9,
};

let student_8={
    Name:"Mahakaleswar",
    City:"Ujjain",
    CGPA:6.9,
};

let student_9={
    Name:"Mansarovar",
    City:"Tibet",
    CGPA:6.9,
};

let arr=[student_1,student_2,student_3,student_4,student_5,student_6,student_7,student_8,student_9];
console.table(arr);

for(let i=0;i<arr.length;i++){
    if(arr[i].CGPA>=8 && arr[i].City=="Agra"){
        console.table(arr[i]);
    }
}
